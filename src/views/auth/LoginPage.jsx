import LoginAPI from "../../components/LoginComponents/LoginAPI.jsx";

export default function LoginPage() {
    return (
        <>
            <section className="bg-gradient-to-r from-[#0096c7] to-[#023e8a]">
                <div className="relative flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="bg-white bg-opacity-70 w-[25%] rounded-lg shadow-2xl shadow-[#90e0ef] sm:w-auto dark:border md:mt-0 xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                                Login
                            </h1>
                            <LoginAPI/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}