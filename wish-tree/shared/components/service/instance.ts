import axios from 'axios';
import { getToken, saveToken } from '../../hooks/useToken';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();  
    if (token) {
      config.headers['Authorization'] = `${token}`;  
    } else {
      console.log('토큰이 존재하지 않습니다.');
    }
    return config;
  },
  (error) => {
    console.log(`[API REQUEST ERROR] ${error}`);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    const token = response.headers['authorization'];
    if (token) {
      await saveToken(token); 
    }
    return response;
  },
  (error) => {
    console.log(`[API RESPONSE ERROR] ${error}`);
    return Promise.reject(error);
  }
);
