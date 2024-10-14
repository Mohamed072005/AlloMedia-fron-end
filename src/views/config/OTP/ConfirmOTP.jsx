import {useEffect, useState} from "react";
import {getLocalStorage, removeLocalStorage, setLocalStorage} from "../../../helpers/LocalStorageHelper.js";

export default function confirmOTP({ handelSubmitForm, errors, resendOTPCode }) {
    const [isDisabledButton, setIsDisabledButton] = useState(false);
    const [countDown, setCountDown] = useState(0);

    const handelResendOTP = async () => {
        resendOTPCode();

        const expirationTime = Date.now() + 300000;
        setLocalStorage("resetCountdownOTP", expirationTime);
        setIsDisabledButton(true);
        setCountDown(300);
    }
    useEffect(() => {
        const storedExpirationTime = getLocalStorage("resetCountdownOTP");
        if(storedExpirationTime){
            const timeRemaining = Math.floor((storedExpirationTime - Date.now()) / 1000);
            if (timeRemaining > 0) {
                setIsDisabledButton(true);
                setCountDown(timeRemaining);
            }else {
                removeLocalStorage("resetCountdownOTP");
            }
        }
        let timer;
        if (countDown > 0) {
            timer = setTimeout(() => {
                setCountDown(countDown - 1);
            }, 1000)
        }else {
            setIsDisabledButton(false);
        }
        return () => clearTimeout(timer);
    }, [countDown, isDisabledButton]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    return (
        <>
            <section
                className="bg-gradient-to-r from-[#0096c7] to-[#023e8a] min-h-screen flex flex-col items-center justify-center">
                <div className="flex flex-col w-[70%] items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div
                        className="bg-white bg-opacity-70 rounded-lg shadow-2xl shadow-[#90e0ef] w-[35%] dark:border md:mt-0 xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                                Verify the new device
                            </h1>

                            <p className="text-gray-600 text-sm">
                                For your security, we need to verify that it's really you. A code has been sent to your
                                email. Please enter the code below to complete the verification process.
                                <br/> The link will expire in <span
                                className="text-red-600 font-semibold">2 minutes</span>, so please be sure to complete
                                the process in time.
                            </p>

                            <form className="space-y-4 md:space-y-6" onSubmit={(event) => handelSubmitForm(event)}>
                                <div className="w-full">
                                    <label htmlFor="code"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Enter the code
                                    </label>
                                    <input
                                        type="number"
                                        name="code"
                                        id="code"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="XXXXXX"
                                    />
                                    {errors && <span className="text-red-600 font-semibold">{errors}</span>}
                                </div>
                                <div className='w-full flex items-center gap-2'>
                                    <label htmlFor="remember_me">Remember me</label>
                                    <input
                                        type="checkbox"
                                        name="remember_me"
                                        className="checked:border-indigo-500 rounded focus:ring-blue-500 focus:ring-2 h-5 w-5"
                                    />
                                </div>
                                <div className="w-full flex justify-center">
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        Verify
                                    </button>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm font-light text-black dark:text-gray-400">
                                        Resend the email?
                                        <button
                                            onClick={handelResendOTP}
                                            className={`font-medium text-primary-600 hover:underline dark:text-primary-500 ${
                                                isDisabledButton ? 'cursor-not-allowed text-gray-400' : ''
                                            }`}
                                            type="button"
                                            disabled={isDisabledButton}
                                        >
                                            {isDisabledButton ? `Wait for ${formatTime(countDown)}` : "Send"}
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}