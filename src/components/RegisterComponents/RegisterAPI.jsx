import MainComponent from "./MainComponent";
import { register } from "../../services/RegisterAPI.js";
import  toast  from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {useContext, useState} from "react";
import { UserContext } from "../../context/UserContext";

export default function LoginAPI() {
    const { setRegistredUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = (payload) => {
        let error = {};

        // Check for required fields
        if (!payload.full_name.trim()) error.full_name = "Full Name is required.";
        if (!payload.user_name.trim()) error.user_name = "Username is required.";
        if (!payload.email.trim()) {
            error.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(payload.email)) {
            error.email = "Email format is invalid.";
        }
        if (!payload.password.trim()) {
            error.password = "Password is required.";
        } else if (payload.password.length < 6) {
            error.password = "Password must be at least 6 characters.";
        }
        if (payload.password !== payload.confirme_password) {
            error.confirme_password = "Passwords do not match.";
        }
        if (!payload.phone_number.trim()) error.phone_number = "Phone number is required.";
        if (!payload.city.trim()) error.city = "City is required.";
        if (!payload.country.trim()) error.country = "Country is required.";
        if (!payload.address.trim()) error.address = "Address is required.";

        return error;
    };

    const handelSubnitForm = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const payload = {
            full_name: event.target.full_name.value,
            user_name: event.target.nick_name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            confirme_password: event.target.confirme_password.value,
            phone_number: event.target.phone_number.value,
            city: event.target.city.value,
            country: event.target.country.value,
            address: event.target.address.value
        }
        const validationErrors = validateForm(payload);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fill out the form.");
            setIsLoading(false);
            return;
        }
        try{
            const response = await register(payload);
            if(response.status === 200){
                toast.success(response.data.message);
                setRegistredUser({
                    user_id: response.data.user._id,
                    email: response.data.user.email,
                })
                setIsLoading(false)
                navigate('/confirm/account');
            }
        }catch(err){
            if(err.status === 401){
                toast.error(err.data.error)
            }
            if(err.status === 409){
                toast.error(err.data.message)
            }
            if(err.status === 400){
                toast.error(err.data.error)
            }
            if(err.status === 500){
                toast.error('server error!');
            }
            setIsLoading(false)
        }
    }
    return (
        <>
            <MainComponent 
            handelSubnitForm={handelSubnitForm}
            errors={errors}
            loading={isLoading}
            />
        </>
    );
}