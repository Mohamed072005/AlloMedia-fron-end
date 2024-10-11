import AxiosInstance from "./AxiosInstance.js";

export const login = async (payload) => {
    try{
        const response = await AxiosInstance.post('/login', payload);
        return response;
    }catch(err){
        throw  err;
    }
}