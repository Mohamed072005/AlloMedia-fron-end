import {OrbitProgress} from "react-loading-indicators";
import {useEffect, useState} from "react";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "../../../helpers/LocalStorageHelper.js";

export default function ResetPassword({handelSubmitForm, errors, loading}) {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [countDown, setCountDown] = useState(0);

    const handelSubmit = async (e) => {
        e.preventDefault();
        const result = await handelSubmitForm(e);
        console.log(result);
        if (result) {
            const expirationTime =  Date.now() + 600000;
            setLocalStorage("resetCountdownRP",  expirationTime);
            setIsButtonDisabled(true);
            setCountDown(600);
        }
    }

    useEffect(() => {
        const storedExpirationTime =  getLocalStorage("resetCountdownRP");
        if(storedExpirationTime){
            const timeRemaining = Math.floor((storedExpirationTime - Date.now()) / 1000);
            if (timeRemaining > 0) {
                setIsButtonDisabled(true);
                setCountDown(timeRemaining);
            }else {
                removeLocalStorage("resetCountdownRP");
            }
        }
        let timer;
        if (countDown  > 0) {
            timer = setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000)
        }else if(countDown === 0 && isButtonDisabled) {
            setIsButtonDisabled(false);
        }
        return () => clearTimeout(timer);
    }, [countDown, isButtonDisabled]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    return (
        <>
            <section
                className={`relative ${loading ? 'opacity-80' : ''} bg-gradient-to-r from-[#0096c7] to-[#023e8a] min-h-screen flex flex-col items-center justify-center`}>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    {loading &&
                        <div className="absolute h-[150px] w-[420px] top-80 flex items-center justify-center">
                            <OrbitProgress dense color="#03045e" size="medium" text="" textColor=""/>
                        </div>
                    }
                    <h1 className="text-6xl font-light mb-8 text-white">Reset Your Password</h1>
                    <div className="mb-4 text-center">
                        <p className="text-xl text-gray-100 mb-4">
                            Please enter your email address or username below to receive a password reset link.
                        </p>
                    </div>
                    <form className="flex flex-col items-center space-y-4 w-full max-w-md"
                          onSubmit={handelSubmit}>
                        <div className="w-full">
                            <input
                                type="text"
                                name="identifier"
                                placeholder="Email or Username"
                                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                                disabled={isButtonDisabled}
                            />
                            {errors && <span className="text-yellow-500 font-semibold">{errors}</span>}
                        </div>
                        <button
                            type="submit"
                            className={`w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 ${
                                isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'
                            }`}
                            disabled={isButtonDisabled} // Disable button when countdown is active
                        >
                            {isButtonDisabled ? `Wait for ${formatTime(countDown)}` : 'Send Reset Link'}
                        </button>
                    </form>
                    <div className="mt-8">
                        <button
                            onClick={() => window.history.back()}
                            data-cy='previuse-page'
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                        >
                            Go Back
                        </button>
                    </div>
                    <div className="mt-8">
                        <p className="text-xl text-gray-100">&mdash; The AlloMedia Team</p>
                    </div>
                </div>
            </section>
        </>
    );
}