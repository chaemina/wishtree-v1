"use client";

import { useEffect, useState } from "react";
import NoWishTreeTemplate from "../../../shared/components/templates/NoWishTreeTemplate";
import WishTreeTemplate from "../../../shared/components/templates/WishTreeTemplate";
import { getToken } from "../../../shared/hooks/useToken";
import { useQuery } from "@tanstack/react-query";
import { mainapi } from "../../service/apis";

const MainTemplate = () => {
  const [token, setToken] = useState<string | null>(null);

  // 화면이 로드될 때마다 token 검사
  useEffect(() => {
    const tokenFromStorage = getToken();
    setToken(tokenFromStorage);
  }, []); // 빈 배열로 설정해서 최초 화면 로드 시만 실행

  // mainapi 호출 및 written 상태 설정
  const { data, error, isLoading } = useQuery({
    queryKey: ['main'],
    queryFn: () => mainapi(),  
    enabled: !!token, 
    refetchOnWindowFocus: true, 
  });

  const written = data?.response?.is_wish_writed
  const wishes = data?.response?.wishes
  console.log(wishes)
  //data.response.wishes -> WishTreeTemplate로 전달 
  
  if (isLoading) {
    return <div className="w-full flex justify-center items-center"><p>로딩 중...</p></div>;
  }

  if (error) {
    return <div className="w-full flex justify-center items-center"><p>에러가 발생했습니다</p></div>;
  }

  return (
    <div className="w-full h-full">
      {/* token과 written 값에 따라 다른 컴포넌트 렌더링 */}
      {token && written ? <WishTreeTemplate wishes={wishes} /> : <NoWishTreeTemplate />}
    </div>
  );
};

export default MainTemplate;
