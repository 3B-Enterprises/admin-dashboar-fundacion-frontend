import axios from "axios";

const uri = "https://apifundacion-4gz3.onrender.com/api/v1/users";

export const loginuser = async (user,pass)=>{
    try {
        const response = await axios.post(`${uri}/login`,{username:user,password:pass});
        return response.data;
    } catch (error) {
        return error.response.status;
    }

}

export const registerUser = async (data)=>{
    try {
        const response = await axios.post(`${uri}/register`,data);
        return response;
    } catch (error) {
        return error.response.status;
    }
}

export const getChildren = async()=>{
    try {
        const res = await axios.get(`${uri}/allUsers`)
        return res.data
    } catch (error) {
        return error.response.status;
    }
}

export const getChild = async(cons)=>{
    try {
        const res = await axios.get(`${uri}/get/${cons}`);
        return res.data;
    } catch (error) {
        return error.response.status;
    }
}