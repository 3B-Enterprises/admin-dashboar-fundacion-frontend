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
export const getChildren = async()=>{
    try {
        const res = await axios.get('',{headers:{Authorization:''}})
        return res.data
    } catch (error) {
        return error
    }
}

export const getChild = async(id)=>{
    try {
        const res = await axios.get('',{params:id})
        return res.data
    } catch (error) {
        return error
    }
}