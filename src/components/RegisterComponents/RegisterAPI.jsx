import MainComponent from "./MainComponent";
import { register } from "./API";
import  toast  from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function LoginAPI() {
    const { setRegistredUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handelSubnitForm = async (event) => {
        event.preventDefault();

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
        try{
            const response = await register(payload);
            if(response.status === 200){
                toast.success(response.data.message);
                setRegistredUser({
                    user_id: response.data.user._id,
                    email: response.data.user.email,
                })
                navigate('/confirm/account');
            }

        }catch(err){
            if(err.status === 401){
                toast.error(err.data.error)
            }
            if(err.status === 500){
                toast.error('server error!');
            }
            console.log(err);
            
        }
    }
    return (
        <>
            <MainComponent 
            handelSubnitForm={handelSubnitForm}
            />
        </>
    );
}