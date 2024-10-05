import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/HomePage";
import RegisterPage from "../views/auth/RegisterPage";
import ConfirmAccount from "../views/config/ConfirmAccount";
import LoginPage from "../views/auth/LoginPage";

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
    },
    {
        path: '/login',
        element: <LoginPage />,
    }
])

export default router;