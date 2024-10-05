import React from 'react';
import IdentifierField from "./IdentifierField.jsx";
import PasswordField from "./PasswordField.jsx";
import {Link} from "react-router-dom";

export default function MainComponent() {
    return (
        <>
            <form className="space-y-4 md:space-y-6">
            <IdentifierField />
            <PasswordField />
            <button 
                    type="submit" 
                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Create an account
                </button>
                <p className="text-sm font-light text-black dark:text-gray-400">
                    Create an account? <Link to={"/register"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
            </form>
        </>
    );
}