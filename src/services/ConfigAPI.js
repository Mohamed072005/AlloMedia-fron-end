import AxiosInstance from "./AxiosInstance.js";

export const verifyOTP = async (code, rememberMe) => {
    try{
        const response = await AxiosInstance.post(`/verify/login`, {code, rememberMe});
        return response;
    }catch(error){
        throw error;
    }
}

export const resendOTP = async (user_id) => {
    try{
        const response = await AxiosInstance.post(`/resent/otp/code`, {user_id});
        return response;
    }catch(err){
        throw err;
    }
}

export const askForResetPasswordLink = async (identifier) => {
    try{
        const response = await AxiosInstance.post(`/ask/reset/password`, {identifier});
        return response;
    }catch (error) {
        throw error;
    }
}