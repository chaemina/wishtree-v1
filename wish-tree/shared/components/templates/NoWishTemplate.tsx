"use client";

import { Message } from "../../constants/strings";
import MainMolecule from "../molecules/MainMolecule";
import LargeTree from "../atoms/icons/LargeTree";
import CustomButton from "../atoms/CustomButton";
import { useEffect ,useState } from "react";
import { getToken } from "../../hooks/useToken";

const NoWishTemplate = () => {
    const message = Message.MAIN_MESSAGE
    const [token, setToken] = useState<string | null>(getToken()); 

    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <MainMolecule message={message}/> 
            {/* Large Tree */}
            <LargeTree className="absolute w-[500px] laptop:w-[600px] transform translate-y-24"/>
            {/* token 여부에 따라 다른 버튼 보여주기 */}
            {token ? (
                <CustomButton className="absolute bottom-10" btnColor="red" handleClick={()=>{console.log("click")}}>소원 쓰기</CustomButton>
            ): (
                <CustomButton className="absolute bottom-10" handleClick={()=>{console.log("click")}}>카카오 로그인</CustomButton>
            )}
        </div>
    )
}

export default NoWishTemplate;