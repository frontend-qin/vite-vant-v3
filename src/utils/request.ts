import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

// create 实例
const instance = axios.create({
    baseURL: VITE_BASE_URL as string,
    timeout: 3000
});

// instance.defaults.headers.post['Content-Type'] =
//     'application/x-www-form-urlencoded';

// instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

// add 请求拦截
instance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config;
    },
    (err) => {
        // 对请求错误做些什么
        return Promise.reject(err);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
export default instance;
