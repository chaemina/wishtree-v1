"use client";

import { Message } from "../../constants/strings";
import MainMolecule from "../molecules/MainMolecule";
import LargeTree from "../atoms/icons/LargeTree";
import CustomButton from "../atoms/CustomButton";
import { useEffect ,useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../../hooks/useToken";

const NoWishTreeTemplate = () => {
    const message = Message.MAIN_MESSAGE
    const router = useRouter();
    const [token, setToken] = useState<string | null>(getToken()); 

    const handleClick = () => {
        router.push('/write')
    }


    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <MainMolecule message={message}/> 
            {/* Large Tree */}
            <LargeTree className="absolute w-[500px] laptop:w-[600px] desktop:w-[100%] transform translate-y-24"/>
            {/* token 여부에 따라 다른 버튼 보여주기 */}
            {token ? (
                <CustomButton className="absolute bottom-10 min-w-[10rem]" btnColor="red" handleClick={handleClick}>소원 쓰기</CustomButton>
            ): (
                <CustomButton className="absolute bottom-10 min-w-[10rem]" handleClick={()=>{console.log("click")}}>카카오 로그인</CustomButton>
            )}
        </div>
    )
}

export default NoWishTreeTemplate;