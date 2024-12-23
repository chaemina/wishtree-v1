import { instance } from "./instance";
import { WishProps } from "../../types/WishProps";

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

// export const garbageDetail = async ({ garbageId }: { garbageId: number }) => {
//     try {
//       const response = await instance.get(`/api/garbages/${garbageId}`);
//       if (response.data.success) {
//         return response.data.response;
//       } else {
//         throw new Error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error('Error fetching chat data:', error);
//       throw error;
//     }
// };