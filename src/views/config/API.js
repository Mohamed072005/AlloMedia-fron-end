import axios from "axios"

export const confirmAccount = async (user_id) => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/check/confirm/account`, {user_id});
        return response;
    }catch(err){
        throw err;
    }
}