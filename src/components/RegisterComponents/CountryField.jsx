export default function CountryField() {
    return (
        <>
            <div>
                <label 
                    htmlFor="country" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your country
                </label>
                <input 
                    type="text" 
                    name="country" 
                    id="country" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Morocco" 
                    
                />
            </div>
        </>
    );
}