import { Message } from "../../constants/strings";
import MainMolecule from "../molecules/MainMolecule";
import LargeTree from "../atoms/icons/LargeTree";

const NoWishTemplate = () => {
    const message = Message.MAIN_MESSAGE
    
    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <MainMolecule message={message}/> 
            {/* Large Tree */}
            <LargeTree className="absolute w-[500px] laptop:w-[600px] transform translate-y-24"/>
            {/* token 여부에 따라 다른 버튼 보여주기 */}
        </div>
    )
}

export default NoWishTemplate;