"use client";

import { useState } from "react";
import MessageCard from "../atoms/MessageCard";
import ObjBoxes from "../molecules/ObjBoxes";
import { Message } from "../../constants/strings";
import CustomButton from "../atoms/CustomButton";
import { RootState } from "../../redux/RootReducer";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { setObjId } from "../../redux/slice/TemplateWishSlice";

const SelectObjTemplate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { content, obj_id } = useSelector((state: RootState) => state.templateWish);

  
  // 상태: 클릭된 박스
  const [selectedBox, setSelectedBox] = useState<number | null>(null);

  const handleBoxClick = (key: number) => {
    // 선택된 박스를 변경하고 전역 상태에 저장
    setSelectedBox(key);
    dispatch(setObjId(key));
  };

  const handleClick = () => {
    // 전역 상태에 추가하고
    // api 요청 보내고 
    // 성공하면 이동 
      router.push("/");
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <MessageCard message={Message.SELECT_OBJ_MESSAGE} />
      <ObjBoxes selectedBox={selectedBox} onBoxClick={handleBoxClick} />
      <CustomButton handleClick={handleClick} btnColor="red">
        트리에 소원 걸기
      </CustomButton>
    </div>
  );
};

export default SelectObjTemplate;
