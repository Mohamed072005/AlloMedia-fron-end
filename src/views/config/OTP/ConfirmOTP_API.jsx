import ConfirmOTP from './ConfirmOTP.jsx';
import {useState} from "react";
import toast from "react-hot-toast";
import {verifyOTP, resendOTP} from "../../../services/ConfigAPI.js";
import {useNavigate} from "react-router-dom";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "../../../helpers/LocalStorageHelper.js";

export default function ConfirmOTP_API (){
    const [errors, setErrors] = useState(null);
    const navigate = useNavigate();
    const validateForm = (payload) => {
        let errors = {};
        if (!payload.code.trim()) return errors.code = 'code is required';
        return errors;
    }
    const handelSubmitForm = async (event) => {
        event.preventDefault();
        const payload = {
            code: event.target.code.value,
            rememberMe: event.target.remember_me.checked || false,
        }
        const validateResult = validateForm(payload);
        if (Object.keys(validateResult).length > 0) {
            setErrors(validateResult);
            console.log(errors)
            toast.error('Please fill out the form.');
            return;
        }
        try{
            const response = await verifyOTP(payload.code, payload.rememberMe);
            if (response.status === 200){
                console.log(response);
                toast.success(response.data.message);
                removeLocalStorage("token");
                removeLocalStorage("user_id");
                setLocalStorage("token", response.data.response.token);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        }catch(error){
            if (error.response.data.message === "jwt must be provided" || error.response.data.message === "jwt expired"){
                toast.error("You are not authorized");
            }
            if (error.status === 401){
                toast.error(error.response.data.message);
            }
        }

    }
    const resendOTPCode = async () => {
        removeLocalStorage("token");
        try {
            const user_id = getLocalStorage("user_id");
            const response = await resendOTP(user_id);
            if (response.status === 200){
                setLocalStorage("token", response.data.token);
                toast.success(response.data.message);
            }
        }catch (error) {
            if (error.status === 401){
                toast.error(error.response.data.message);
            }
            if (error.status === 500){
                toast.error('server error');
            }
        }
    }
    return (
        <>
            <ConfirmOTP
                handelSubmitForm={handelSubmitForm}
                errors={errors}
                resendOTPCode={resendOTPCode}
            />
        </>
    );
}