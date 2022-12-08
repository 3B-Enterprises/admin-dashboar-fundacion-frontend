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
export const getChild = async(nui)=>{
    try {
        const req = await axios.get('',{headers:{Authorization:''}})
    } catch (error) {
        
    }
}