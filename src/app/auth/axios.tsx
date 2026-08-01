import axios from "axios"
import {getToken} from "./auth"

const api = axios.create({
    baseURL : "https://drbk.runasp.net/api/"
})

api.interceptors.request.use((con) =>{
    const token = getToken();
    if(token){
         con.headers.Authorization = `Bearer ${token}`;
    }
    return con;
})

export default api;
