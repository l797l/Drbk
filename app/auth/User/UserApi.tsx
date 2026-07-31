import { setToken } from "../auth";
import api from "../axios";
import { LoginDto, RegisterDto } from "./UserDto";
import axios from "axios";


export const loginApi = async (dto: LoginDto) => {
  const url = process.env.NEXT_PUBLIC_API_LOGIN_STRING;

  if (!url) return;

  try {
    const result = await api.post(url, dto);

    
    if(!result.data.token)
        setToken(result.data.token)
    
    return result.status;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  } else {
    console.log("حدث خطأ غير متوقع");
  }
}
  };

  export const registerApi = async (dto: RegisterDto) => {
  const url = process.env.NEXT_PUBLIC_API_REGISTER_STRING;

  if (!url) return;

  try {
    const result = await api.post(url, dto);
    
    return result.status;
  } catch (error: unknown) {
  if (axios.isAxiosError(error)) {
    console.log(error.response?.data);
  } else {
    console.log("حدث خطأ غير متوقع");
  }
}
  };