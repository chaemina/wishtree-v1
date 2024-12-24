import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { kakaoapi } from "../../../../shared/service/apis";
import { extractCodeFromUrl } from "../../../../shared/utils/extractCodeFromUrl";

const KakaoCallback = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 에러 메시지 상태 추가

  const handleKakaoLogin = useCallback(async (code: string) => {
    setIsLoading(true);
    setErrorMessage(null); 

    try {
      const response = await kakaoapi(code); 
      console.log("[API RESPONSE]", response);

      if (response.success) {
        router.push("/"); // 로그인 성공시 main 페이지로 이동
      } else {
        setErrorMessage("로그인 실패. 다시 시도해주세요."); // 실패 메시지 설정
        console.error("Login failed", response.error);
      }
    } catch (error) {
      setErrorMessage("로그인 중 문제가 발생했습니다. 다시 시도해주세요."); // 에러 메시지 설정
      console.error("Error during Kakao login", error);
    } finally {
      setIsLoading(false);
    }
  }, [router]);  // router를 의존성 배열에 추가

  useEffect(() => {
    const url = window.location.href; // 현재 URL을 가져옵니다.
    const code = extractCodeFromUrl(url); // extractCodeFromUrl로 code를 추출합니다.

    if (code) {
      console.log("Kakao authorization code:", code);
      handleKakaoLogin(code); // 카카오 로그인 처리 함수 호출
    }
  }, [handleKakaoLogin]);  // handleKakaoLogin을 의존성 배열에 추가

  return (
    <div>
      {isLoading && <p>카카오 로그인 중입니다. 잠시만 기다려주세요.</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* 에러 메시지 표시 */}
    </div>
  );
};

export default KakaoCallback;
