"use client"

import { Message } from "../../constants/strings";
import MainMolecule from "../molecules/MainMolecule";
import LargeTree from "../atoms/icons/LargeTree";
import CustomButton from "../atoms/CustomButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken } from "../../hooks/useToken";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=aa8362ee4e12d330a4a02a523f17403f&redirect_uri=https://wishtree-v1.vercel.app/kakao/callback&response_type=code`;

const NoWishTreeTemplate = () => {
    const message = Message.MAIN_MESSAGE;
    const router = useRouter();
    const [token, setToken] = useState<string | null>(getToken());

    const handleClick = () => {
        router.push('/write');
    };

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTH_URL;
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <MainMolecule message={message} />
            <LargeTree className="absolute w-[500px] laptop:w-[600px] desktop:w-[100%] transform translate-y-24" />
            {token ? (
                <CustomButton className="absolute bottom-10 min-w-[10rem]" btnColor="red" handleClick={handleClick}>소원 쓰기</CustomButton>
            ) : (
                <CustomButton className="absolute bottom-10 min-w-[10rem]" handleClick={handleKakaoLogin}>카카오 로그인</CustomButton>
            )}
        </div>
    );
};

export default NoWishTreeTemplate;
