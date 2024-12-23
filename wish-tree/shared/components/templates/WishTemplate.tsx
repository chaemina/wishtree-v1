"use client";

import MessageCard from "../atoms/MessageCard";
import CustomButton from "../atoms/CustomButton";
import WishCard from "../molecules/WishCard";
import { WishCardProps } from "../../types/BoxProps";

const WishTemplate = ({wish}: WishCardProps)  => {

    const name = "채민아" // api 요청 
    const date = "2024.12.24" // 작성 날짜

    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <MessageCard message={`${name}의 크리스마스 소원`}/>
            {/* wish card 에 내 소원 전달 */}
            <WishCard wish={wish} />
            <MessageCard message={`${date}`}/>
            <CustomButton btnColor="red" handleClick={()=>{console.log("click")}}>응원 메세지 보기</CustomButton>
        </div>
    )
}

export default WishTemplate;