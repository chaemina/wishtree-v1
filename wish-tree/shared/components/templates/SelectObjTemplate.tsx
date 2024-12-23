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
import { wishapi } from "../service/apis"; 

const SelectObjTemplate = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { content, obj_id } = useSelector((state: RootState) => state.templateWish);
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [loading, setLoading] = useState(false); 

  const handleBoxClick = (key: number) => {
    setSelectedBox(key);
    dispatch(setObjId(key));
  };

  const handleClick = async () => {
    try {
      setLoading(true); 

      const wish = {
        content,
        obj_id, 
      };

      const response = await wishapi(wish); 

      if (response.success) {
        router.push("/"); 
      } else {
        console.log("에러 발생");
      }
    } catch (error) {
      console.log("에러 발생");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <MessageCard message={Message.SELECT_OBJ_MESSAGE} />
      <ObjBoxes selectedBox={selectedBox} onBoxClick={handleBoxClick} />
      <CustomButton handleClick={handleClick} btnColor="red">
        {loading ? "로딩 중..." : "트리에 소원 걸기"} 
      </CustomButton>
    </div>
  );
};

export default SelectObjTemplate;
