"use client";

import { useState } from "react";
import MessageCard from "../atoms/MessageCard";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import { useRouter } from "next/navigation";

const WriteWishTemplate = () => {
    const router = useRouter();
    const [wish, setWish] = useState("");
    const name = "채민아" // api 연결 

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWish(e.target.value);
      };
    
      const handleButtonClick = () => {
        console.log(wish); // wish를 전역상태로 저장하기 
        // router 로 넘어가기 전, wish가 비어있는 경우 경고 alert 띄우기
        router.push("/selectobj")
      };

    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <MessageCard message={`${name}의 크리스마스 소원`}/>
            <CustomInput onChange={handleInputChange} placeholder="소원을 작성해주세요" className="h-[30%] mt-10 bg-background placeholder-foreground border-b w-[50%]"/>
            <CustomButton handleClick={handleButtonClick} btnColor="red" className="min-w-[10rem]">소원 담으러 가기</CustomButton>
        </div>
    )
}

export default WriteWishTemplate