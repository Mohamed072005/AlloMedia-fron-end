import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { confirmAccount } from "./API";
import { useNavigate } from "react-router-dom";

export default function ConfirmAccount(){
    const { registredUser, setRegistredUser } = useContext(UserContext);
    const [error, setError] = useState(null);
    const [isConfirmed, setConformed] = useState(false);
    const [timeExpired, setTimeExpired] = useState(false);
    const navigate = useNavigate();
    
    if(!registredUser){
        navigate('/register');
    }
    useEffect(() => {
        let intervalId;
        let timeoutId;

        const checkConfirmation = async ()=>{
            try{
                const response = await confirmAccount(registredUser.user_id);
                if(response.status === 200){
                    setConformed(true);
                    clearInterval(intervalId);
                    // setRegistredUser(null);
                }
            }catch(err){
                setError('Error checking confirmation status');
            }
        }

        intervalId = setInterval(checkConfirmation, 15000);
        timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            setTimeExpired(true);
            setError(null);
        }, 120000);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timeoutId);
        }
    }, [registredUser.email]);
    if (isConfirmed) {
        return (
            <section className="bg-gradient-to-r from-[#0096c7] to-[#023e8a] min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-light mb-12 text-white">Account Confirmed!</h1>
                <p className="text-xl text-gray-100 mb-8">
                    Your account has been confirmed successfully. You can now log in.
                </p>
                <button 
                    onClick={() => window.location.href = '/login'}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                >
                    Go to Login
                </button>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-r from-[#0096c7] to-[#023e8a] min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <h1 className="text-6xl font-light mb-12 text-white">Verify Your Email</h1>
                <div>
                    <p className="text-xl text-gray-100 mb-8">
                        {timeExpired
                            ? "The time has expired. Please request a new confirmation link."
                            : "We have sent you a confirmation email. Please check your inbox and confirm your email address within the next 2 minutes."
                        }
                    </p>
                    {error && <p className="text-red-500"> check your email and verify your account !!</p>}
                    <p className="text-xl text-gray-100">
                        &mdash; The AlloMedia Team
                    </p>
                </div>
                <div className="flex justify-around space-x-4 mt-8 w-[50%]">
                    <button 
                        onClick={() => window.history.back()} 
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                    >
                        Back
                    </button>
                    <button 
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg"
                    >
                        Resend Email
                    </button>
                </div>
            </div>
        </section>
    );
}