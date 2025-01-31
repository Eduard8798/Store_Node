import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Убедитесь, что REACT_APP_API_URL задан в .env
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Убедитесь, что REACT_APP_API_URL задан в .env
});

// Интерсептор для добавления токена авторизации в заголовки
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
    $host,
    $authHost, // Теперь $authHost корректно объявлен и экспортируется
};
