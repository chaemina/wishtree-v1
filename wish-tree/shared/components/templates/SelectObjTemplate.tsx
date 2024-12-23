"use client"

import MessageCard from "../atoms/MessageCard";
import ObjBoxes from "../molecules/ObjBoxes";
import { Message } from "../../constants/strings";
import CustomButton from "../atoms/CustomButton";
import { useRouter } from "next/navigation";

const SelectObjTemplate = () => {

    const router = useRouter()

    const handleClick = () => {
        // 전역 상태에 추가하고
        // api 요청 보내고 
        // 성공하면 이동 
        router.push("/")
    }
    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <MessageCard message={Message.SELECT_OBJ_MESSAGE}/>
            <ObjBoxes/>
            <CustomButton handleClick={handleClick} btnColor="red" >트리에 소원 걸기</CustomButton>
        </div>
    )
}

export default SelectObjTemplate;