import axios from "axios"

export const register = async (payload) => {
    try{        
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/register`, payload );
        return response;
    }catch(err){
        throw err.response;
    }
}