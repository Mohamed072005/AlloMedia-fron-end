import { Outlet, useNavigate } from "react-router-dom";
import { getLocalStorage } from "../helpers/LocalStorageHelper"
import { useEffect } from "react";
import NavBar from "../components/HeaderComponents/NavBar";

export default function MainLayout() {
    // const authorizedUser = getLocalStorage("token");
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if(authorizedUser === null){
    //         console.log(authorizedUser);
    //         navigate('/login');
    //     }
    // }, [])
    return (
        <>
            <div className="h-auto">
                <NavBar />
                <main className="">
                    <Outlet />
                </main>
            </div>
        </>
    )
}