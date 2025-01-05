import axios from "axios";
const baseApiURL="http://localhost:4000/v1";
const headers = {
    Accept : "application/json",
    "Content-Type": "application/json"
}
export const createUser=async(payload)=>{
    const createUserEndpoint=`${baseApiURL}/user`;
    const method = "POST";
    const rawResponse= await fetch(`${createUserEndpoint}`,{method,
        headers,
        body: JSON.stringify(payload),});
    return rawResponse.json();
}

export const EditUser=async(userId,payload)=>{
    const editUserEndpoint=`${baseApiURL}/user/${userId}`;
    const rawResponse= await fetch(editUserEndpoint, { method : "PUT", headers, body : JSON.stringify(payload),});
    return rawResponse.json();
}

export const retrieveUser = async (userId)=>{
    const getUserEndpoint = `${baseApiURL}/user/${userId}`;
    const {data : apiResponse}=await axios.get(getUserEndpoint);
    return apiResponse;
}

export const retrieveAllUsers = async ()=>{
    const getAllUsersEndPoint = `${baseApiURL}/user/all`;
    const {data:apiResponse}=await axios.get(getAllUsersEndPoint);
    return apiResponse;
    //const rawResponse = await fetch(getAllUsersEndPoint);
    //return rawResponse.json();
}

export const removeUser = async (userId)=> {
const removeUserEndpoint =`${baseApiURL}/user/${userId}`;
const {data : apiResponse}=await axios.delete(removeUserEndpoint);
return apiResponse;
}
