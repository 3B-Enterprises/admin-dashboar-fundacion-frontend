import axios from "axios";

export const loginuser = async (user,pass)=>{
    const data = {
        user:user,
        password:pass
    }
    try {
        const response = await axios.post("", data);
        return response;
    } catch (error) {
        return error;
    }

}