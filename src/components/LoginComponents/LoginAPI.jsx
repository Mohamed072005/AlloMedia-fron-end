import MainComponent from "./MainComponent.jsx";
import {useContext, useState} from "react";
import toast from "react-hot-toast";
import {login} from "../../services/LoginAPI.js";
import {useNavigate} from "react-router-dom";
// import {UserContext} from "../../context/UserContext.jsx";
import {setLocalStorage} from "../../helpers/LocalStorageHelper.js";

export default function LoginAPI () {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    // const { setLoggedUser } = useContext(UserContext);
    const navigate = useNavigate();
    const validateForm = (payload) => {
        let errors = {};
        if(!payload.identifier.trim()) errors.identifier = 'identifier is required';
        if (!payload.password.trim()) errors.password = 'password is required';
        return errors;
    }
    const handelSubmitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            identifier: e.target.identifier.value,
            password: e.target.password.value,
        }
        const validationErrors = validateForm(payload);
        if (Object.keys(validationErrors).length ) {
            setErrors(validationErrors);
            setLoading(false);
            toast.error('Please fill out the form.');
            return;
        }
        try{
            const response = await login(payload);
            if(response.status === 200 && response.data.isLogged){

                setLocalStorage("token", response.data.response.token);
                toast.success(response.data.response.message);
                setLoading(false);
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
            if (response.status === 200 &&  !response.data.isLogged){
                toast.success(response.data.message);
                setLocalStorage("user_email", response.data.user_email);
                setLoading(false);
                setTimeout(() => {
                    navigate('/confirm/account');
                },2000)
            }
            if (response.status === 202){
                toast.success(response.data.response.message);
                setLocalStorage("token", response.data.response.token)
                setLocalStorage("user_id", response.data.response.user_id)
                setLoading(false)

                setTimeout(() => {
                    navigate('/confirm/one/time/password');
                }, 2000);
            }
        }catch(error){
            if (error.status === 401){
                toast.error(error.response.data.message);
            }
            if (error.status === 500){
                toast.error(error.response.data.message);
            }
            setLoading(false)
        }
    }
    return (
      <>
          <MainComponent
              handelSubmitForm={handelSubmitForm}
              errors={errors}
              loading={loading}
          />
      </>
    );
}