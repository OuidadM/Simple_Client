import axios from "axios";
const baseApiURL="http://localhost:4000";
export const createUser=async(payload)=>{
    const createUserEndpoint=`${baseApiURL}/v1/user`;
    const { data:apiResponse }= await axios.post(`${createUserEndpoint}`, payload);
    return apiResponse;
}

export const retrieveUser = async (userId)=>{
    const getUserEndpoint = `${baseApiURL}/v1/user/${userId}`;
    const {data:apiResponse} =await axios.get(`${getUserEndpoint}`);
    return apiResponse;
}

export const retrieveAllUsers = async ()=>{
    const getAllUsersEndPoint = `${baseApiURL}/v1/user/all`;
    const {data : apiResponse } = await axios.get(`${getAllUsersEndPoint}`);
    return apiResponse;
}
