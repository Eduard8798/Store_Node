import {$host,$authHost} from "./index.js";
import { jwtDecode } from "jwt-decode";


export const registration = async (email, password) => {
   try {

    const { data } = await $host.post('/api/user/registration', { email, password });
    console.log('Registration response:', data); // Добавляем лог
       localStorage.setItem('token', data.token);
    return jwtDecode("токен"+data.token);}
    catch(err) {
       console.error(err);
       console.log("Немає інформації про токен");
    }
};

export const login = async (email, password) => {
    const { data } = await $host.post('api/user/login', { email, password });
    console.log('Login response:', data); // Добавляем лог
    localStorage.setItem('token', data.token);
    return jwtDecode(data.token);
};


export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}