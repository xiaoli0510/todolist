import axios from 'axios';

//创建axios实例
const request = axios.create({
  baseURL:'/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
}); 

//添加请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


//添加响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
