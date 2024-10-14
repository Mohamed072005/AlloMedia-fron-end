export default function AddressField() {
    return(
        <>
            <div className="w-[100%]">
                <label 
                    htmlFor="address" 
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your address
                </label>
                <input 
                    type="text" 
                    name="address" 
                    id="address" 
                    className="bg-gray-50 border w[100%] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="al kods" 
                    
                />
            </div>
        </>
    );
}