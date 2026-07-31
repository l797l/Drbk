import axios from "axios"
import {getToken} from "./auth"

const api = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL
})

api.interceptors.request.use((con) =>{
    const token = getToken();
    if(token){
         con.headers.Authorization = `Bearer ${token}`;
    }
    return con;
})

export default api;
