import AxiosInstance from "./AxiosInstance.js";

export const register = async (payload) => {
    try{        
        const response = await AxiosInstance.post(`/register`, payload );
        return response;
    }catch(err){
        throw err.response;
    }
}