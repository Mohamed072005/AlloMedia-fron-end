import AxiosInstance from "./AxiosInstance.js";

export const login = async (payload) => {
    try{
        const response = await AxiosInstance.post('/login', payload);
        return response;
    }catch(err){
        throw  err;
    }
}

export const register = async (payload) => {
    try{        
        const response = await AxiosInstance.post(`/register`, payload );
        return response;
    }catch(err){
        throw err.response;
    }
}

export const logout = async () => {
    try {
        const response = await AxiosInstance.get('/logout');
        return response;
    }catch(err){
        throw err;
    }
}