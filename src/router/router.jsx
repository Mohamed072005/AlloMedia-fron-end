import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/auth/RegisterPage";
import ConfirmAccount from "../views/config/ConfirmAccount";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '/confirm/account',
        element: <ConfirmAccount />,
    }
])

export default router;