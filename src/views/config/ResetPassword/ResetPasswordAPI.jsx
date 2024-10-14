import ResetPassword from "./ResetPassword.jsx";
import {useState} from "react";
import {askForResetPasswordLink} from "../../../services/ConfigAPI.js";
import toast from "react-hot-toast";
import * as response from "autoprefixer";

export default function ResetPasswordAPI() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const validateForm = (payload) => {
        let errors;
        if (!payload.identifier.trim()) return errors = 'Identifier is required';
        return errors = null;
    }

    const handelSubmitForm = async (event) => {
        event.preventDefault();
        setLoading(true);
        const payload = {
            identifier: event.target.identifier.value,
        }
        const validationResult = validateForm(payload);
        if (validationResult) {
            setLoading(false);
            toast.error('Please fill out the form.');
            setError(validationResult);
            return false;
        }
        try{
            const response = await askForResetPasswordLink(payload.identifier);
            console.log(response);
            if (response.status === 200){
                toast.success(response.data.message);
                setLoading(false);
                return true;
            }
        }catch (error) {
            if (error.status === 401) {
                toast.error(error.response.data.message);
            }
            setLoading(false);
            return false;
        }
    }
    return (
        <>
            <ResetPassword
                handelSubmitForm={handelSubmitForm}
                errors={error}
                loading={loading}
            />
        </>
    );
}