"use client"

import { useEffect, useState } from "react";
import NoWishTreeTemplate from "../../../shared/components/templates/NoWishTreeTemplate";
import WishTreeTemplate from "../../../shared/components/templates/WishTreeTemplate";
import { getToken } from "../../../shared/hooks/useToken";

const MainTemplate = () => {
  const [token, setToken] = useState<string | null>(null);
  const [written, setWritten] = useState<boolean>(false); 

  // useEffect로 화면 로드할 때마다 token 검사 및 written 상태 설정, 설정 되는 동안 로딩 처리
  useEffect(() => {
    const tokenFromStorage = getToken();  
    setToken(tokenFromStorage);  

    // token이 있으면 소원 작성 여부(written)를 API를 통해 확인
    if (tokenFromStorage) {
        
      setWritten(false);  
    }
  }, []); 

  return (
    <div className="w-full h-full">
        {token && written ?  <WishTreeTemplate/> : <NoWishTreeTemplate/> }
    </div>
  );
}

export default MainTemplate;
