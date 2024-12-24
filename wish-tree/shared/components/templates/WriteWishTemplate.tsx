"use client";

import { useState } from "react";
import MessageCard from "../atoms/MessageCard";
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import { useRouter } from "next/navigation";
import { setContent } from "../../redux/slice/TemplateWishSlice";
import { useDispatch } from 'react-redux';

const WriteWishTemplate = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [wish, setWish] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWish(e.target.value);
      };
    
      const handleButtonClick = () => {
        // router 로 넘어가기 전, wish가 비어있는 경우 경고 alert 띄우기
        dispatch(setContent(wish));
        router.push("/selectobj")
      };

    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <MessageCard message={`나의 크리스마스 소원`}/>
            <CustomInput onChange={handleInputChange} placeholder="소원을 작성해주세요" className="h-[30%] mt-10 bg-background placeholder-foreground border-b w-[50%]"/>
            <CustomButton handleClick={handleButtonClick} btnColor="red" className="min-w-[10rem]">소원 담으러 가기</CustomButton>
        </div>
    )
}

export default WriteWishTemplate