"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { kakaoapi } from "../../../../shared/components/service/apis";
import { useDispatch } from "react-redux";
import { extractCodeFromUrl } from "../../../../shared/utils/extractCodeFromUrl";

const KakaoCallback = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // URL 파라미터를 추출하는 useSearchParams 훅을 사용
  useEffect(() => {
    const url = window.location.href;  // 현재 URL을 가져옵니다.
    const code = extractCodeFromUrl(url); // extractCodeFromUrl로 code를 추출합니다.

    if (code) {
      console.log("Kakao authorization code:", code);
      handleKakaoLogin(code); // 카카오 로그인 처리 함수 호출
    }
  }, []);

  const handleKakaoLogin = async (code: string) => {
    setIsLoading(true);

    try {
      const response = await kakaoapi(code);  // 카카오 로그인 API 호출
      console.log("[API RESPONSE]", response);

      if (response.success) {
        router.push("/"); // 로그인 성공시 main 페이지로 이동
      } else {
        console.error("Login failed", response.error);
      }
    } catch (error) {
      console.error("Error during Kakao login", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <p>카카오 로그인 중입니다. 잠시만 기다려주세요.</p>}
    </div>
  );
};

export default KakaoCallback;
