import { instance } from "./instance";

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


// export const garbagesWaitingList = async () => {
//     const response = await instance.get('/api/garbages/waiting');
//     return response.data;
// };

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