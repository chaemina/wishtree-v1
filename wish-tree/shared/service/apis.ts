import { instance } from "./instance";
import { WishProps } from "../types/WishProps";

// 카카오에서 발급 받은 인가코드를 담아서 post
export const kakaoapi = async (code :string) => {
    try {
      const response = await instance.post('/api/login/kakao', { code });
      return response.data;
    } catch (error) {
      console.error('Error during Kakao login API call', error);
      throw error;
    }
  };


export const mainapi = async () => {
    const response = await instance.get('/wishes');
    return response.data;
};

export const wishapi = async (wish : WishProps) => {
    try {
      const response = await instance.post('/api/wish',  wish);
      return response.data;
    } catch (error) {
      console.error('Error during Kakao login API call', error);
      throw error;
    }
  };


export const mywishapi = async () => {
    const response = await instance.get('/api/wish');
    return response.data;
};

export const friendwishapi = async (id: string) => {
  const response = await instance.get(`/api/wish/${id}`);  // id를 URL에 포함시킴
  return response.data;
};

export const commentapi = async (comment:string, id: string) => {
  try {
    const response = await instance.post(`/api/comment/${id}`,  comment);
    return response.data;
  } catch (error) {
    console.error('Error during Kakao login API call', error);
    throw error;
  }
};
