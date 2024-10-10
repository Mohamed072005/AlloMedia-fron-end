import React from 'react';
import IdentifierField from "./IdentifierField.jsx";
import PasswordField from "./PasswordField.jsx";
import {Link} from "react-router-dom";
import {OrbitProgress} from "react-loading-indicators";

export default function MainComponent({errors, handelSubmitForm, loading}) {
    return (
        <>
            {loading &&
                <div className="absolute h-[150px] w-[420px] top-80 flex items-center justify-center">
                    <OrbitProgress dense color="#03045e" size="medium" text="" textColor="" />
                </div>
            }
            <form className={`space-y-4 md:space-y-6 ${loading ? 'opacity-30' : ''}`}
                  onSubmit={(event) => handelSubmitForm(event)}>
                <div className="w-full">
                    <IdentifierField/>
                    {errors?.identifier && <span className="text-red-500">{errors.identifier}</span>}
                </div>
                <div className="w-full">
                    <PasswordField/>
                    {errors?.password && <span className="text-red-500">{errors.password}</span>}
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Create an account
                </button>
                <p className="text-sm font-light text-black dark:text-gray-400">
                    Create an account? <Link to={"/register"}
                                             className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register
                    here</Link>
                </p>
                <p className="text-sm font-light text-black dark:text-gray-400">
                    Forgot password? <Link to={"/register"}
                                             className="font-medium text-primary-600 hover:underline dark:text-primary-500">reset it here
                    here</Link>
                </p>
            </form>
        </>
    );
}