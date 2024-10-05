import AddressField from "./AddressField";
import CityField from "./CityField";
import ConfirmePasswordField from "./ConfirmePasswordField";
import CountryField from "./CountryField";
import EmailField from "./EmailField";
import FullNameField from "./FullNameField";
import NickNameField from "./NickNameField";
import PasswordField from "./PasswordField";
import PhoneNumberField from "./PhoneNumberField";
import {Link} from "react-router-dom";

export default function MainComponent ({handelSubnitForm}) {
    return (
        <>
            <form className="space-y-4 md:space-y-6" onSubmit={(event)=>handelSubnitForm(event)}>
                <div className="flex gap-3">
                    <FullNameField />
                    <NickNameField />
                </div>
                <div className="flex gap-3">
                    <EmailField />
                    <PhoneNumberField />
                </div>
                <div className="flex gap-3">
                    <PasswordField />
                    <ConfirmePasswordField />
                </div>
                <div className="flex gap-3">
                    <CountryField />
                    <CityField />
                </div>
                <div className="flex gap-3">
                    <AddressField />
                </div>
                <button 
                    type="submit" 
                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Create an account
                </button>
                <p className="text-sm font-light text-black dark:text-gray-400">
                    Already have an account? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                </p>
            </form>
        </>
    );
};
