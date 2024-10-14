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
import {OrbitProgress} from "react-loading-indicators";

export default function MainComponent ({handelSubnitForm, errors, loading}) {
    return (
        <>
            {loading &&
            <div className="absolute h-[150px] w-[370px] top-80 flex items-center justify-center">
                <OrbitProgress dense color="#03045e" size="medium" text="" textColor="" />
            </div>
            }
            <form className={`space-y-2 md:space-y-4 ${loading ? 'opacity-30' : ''}`} onSubmit={(event)=>handelSubnitForm(event)}>
                <div className="flex gap-3">
                    <div className="w-full">
                        <FullNameField />
                        {errors?.full_name && <span className="text-red-600">{errors.full_name}</span>}
                    </div>
                    <div className="w-full">
                        <NickNameField />
                        {errors?.user_name && <span className="text-red-600">{errors.user_name}</span>}
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-full">
                        <EmailField />
                        {errors?.email && <span className="text-red-600">{errors.email}</span>}
                    </div>
                    <div className="w-full">
                        <PhoneNumberField />
                        {errors?.phone_number && <span className="text-red-600">{errors.phone_number}</span>}
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-full">
                        <PasswordField />
                        {errors?.password && <span className="text-red-600">{errors.password}</span>}
                    </div>
                    <div className="w-full">
                        <ConfirmePasswordField />
                        {errors?.confirme_password && <span className="text-red-600">{errors.confirme_password}</span>}
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-full">
                        <CountryField />
                        {errors?.country && <span className="text-red-600">{errors.country}</span>}
                    </div>
                    <div className="w-full">
                        <CityField />
                        {errors?.city && <span className="text-red-600">{errors.city}</span>}
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="w-full">
                        <AddressField />
                        {errors?.address && <span className="text-red-600">{errors.address}</span>}
                    </div>
                </div>
                <button 
                    type="submit" 
                    className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
