"use client";

import { useState } from "react";
import WishCard from "./WishCard";
import { editwishapi } from "../../service/apis";
import CustomButton from "../atoms/CustomButton";

// ModifyWishCard 컴포넌트
const ModifyWishCard = ({ content }: { content: string }) => {
  const [newContent, setNewContent] = useState<string>(content);

  // 입력 내용 변경 핸들러
  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewContent(e.target.value);
  };

  // 저장하기 버튼 클릭 핸들러
  const handleSaveToggle = async () => {
    try {
      const response = await editwishapi(newContent);

      if (response.success) {
        window.location.reload()
      } else {
        console.error("소원 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("API 호출 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <>
      <WishCard content={newContent} onContentChange={handleContentChange} />
      <CustomButton className="mb-20" handleClick={handleSaveToggle}>
        저장하기
      </CustomButton>
    </>
  );
};

export default ModifyWishCard;
