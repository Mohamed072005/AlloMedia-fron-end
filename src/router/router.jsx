import { createBrowserRouter } from "react-router-dom";
import HomePage from "../views/app/HomePage.jsx";
import RegisterPage from "../views/auth/RegisterPage";
import ConfirmAccount from "../views/config/ConfirmAccount";
import LoginPage from "../views/auth/LoginPage";
import ConfirmOTP_API from "../views/config/OTP/ConfirmOTP_API.jsx";
import ResetPasswordAPI from "../views/config/ResetPassword/ResetPasswordAPI.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import ChatPage from "../views/app/ChatPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/my/chats',
                element: <ChatPage />
            }
        ]
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
    },
    {
        path: '/confirm/one/time/password',
        element: <ConfirmOTP_API />
    },
    {
        path: '/reset/password',
        element: <ResetPasswordAPI />
    },
])

export default router;