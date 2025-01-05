import axios from "axios";
const baseApiURL="http://localhost:4000/v1";
export const createUser=async(payload)=>{
    const createUserEndpoint=`${baseApiURL}/user`;
    const { data:apiResponse }= await axios.post(`${createUserEndpoint}`, payload);
    return apiResponse;
}

export const EditUser=async(userId,payload)=>{
    const editUserEndpoint=`${baseApiURL}/user/${userId}`;
    const { data:apiResponse }= await axios.put(editUserEndpoint, payload);
    return apiResponse;
}

export const retrieveUser = async (userId)=>{
    const getUserEndpoint = `${baseApiURL}/user/${userId}`;
    const {data:apiResponse} =await axios.get(getUserEndpoint);
    return apiResponse;
}

export const retrieveAllUsers = async ()=>{
    const getAllUsersEndPoint = `${baseApiURL}/user/all`;
    const {data : apiResponse } = await axios.get(getAllUsersEndPoint);
    return apiResponse;
}

export const removeUser = async (userId)=> {
const removeUserEndpoint =`${baseApiURL}/user/${userId}`;
const {data: apiResponse}=await axios.delete(removeUserEndpoint);
return apiResponse;
}
