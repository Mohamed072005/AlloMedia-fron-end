import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import {removeLocalStorage} from "../../helpers/LocalStorageHelper.js";

export default function ConfirmAccount(){
    const { registredUser, setRegistredUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!registredUser){
            // navigate("/register");
            window.history.back()
        }
        setTimeout(() => {
            setRegistredUser(null);
            removeLocalStorage("user_email");
            window.history.back()
            // navigate('/register');
        }, 180000)
    }, [registredUser]);

    return (
        <section
            className="bg-gradient-to-r from-[#0096c7] to-[#023e8a] min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <h1 className="text-6xl font-light mb-8 text-white">Email Verification Required</h1>
                <div className="mb-4 text-center">
                    <p className="text-xl text-gray-100 mb-4">
                        Please verify your email address to complete your registration. Check your inbox <big className="font-semibold text-yellow-300">"{registredUser?.user_email}"</big> and click on
                        the confirmation link.
                        <span className="font-semibold text-yellow-300"> The link will expire in 2 minutes.</span>
                    </p>
                    <p className="text-lg text-gray-200">
                        Didn't receive an email? Click "Resend Email" to get a new confirmation link.
                    </p>
                </div>
                <div className="flex justify-around space-x-4 mt-8 w-[50%]">
                    <button
                        onClick={() => window.history.back()}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                    >
                        Go Back
                    </button>
                </div>
                <div className="mt-8">
                    <p className="text-xl text-gray-100">
                        &mdash; The AlloMedia Team
                    </p>
                </div>
            </div>
        </section>
    );
}