import { useNavigate } from "react-router-dom";
import { logout } from "../../services/authAPI";
import toast from "react-hot-toast";
import { removeLocalStorage } from "../../helpers/LocalStorageHelper";


export default function LogoutButton() {
    const navigate = useNavigate();
    const Logout = async () => {
        try{
            const response = await logout();
            console.log(response);
            if(response.status === 200){
                removeLocalStorage('token');
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
            }
        }catch(err){
            if(err.status === 401){
                toast.error(err.response.data.error);
                navigate('/login');
            }
            if(err.status === 500){
                toast.error(err.response.data.error);
            }
        }
    }
    return (
        <>
            <button onClick={() => Logout()}>
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
            </button>
        </>
    );
}