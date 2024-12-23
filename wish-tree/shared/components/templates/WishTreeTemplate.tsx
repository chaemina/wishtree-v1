"use client";

import { Message } from "../../constants/strings";
import MainMolecule from "../molecules/MainMolecule";
import CustomButton from "../atoms/CustomButton";
import { useRouter } from "next/navigation";
import WishTreeMolecule from "../molecules/WishTreeMolecule";

const WishTreeTemplate = () => {
    const router = useRouter()
    const message = Message.WISHTREE_MESSAGE

    const goToMyWish = () => {
        router.push("/wish/mywish")
    }

    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <MainMolecule message={message}/> 
            {/* 소원 + 트리 molecule 컴포넌트 */}
            <WishTreeMolecule/>
            <CustomButton className="absolute bottom-10" btnColor="red" handleClick={goToMyWish}>내 소원 보러가기</CustomButton>
        </div>
    )
}

export default WishTreeTemplate;