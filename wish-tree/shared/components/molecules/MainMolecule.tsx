import { Message } from "../../constants/strings";
import MessageCard from "../atoms/MessageCard";

const MainMolecule = () => {
    const message = Message.MAIN_MESSAGE
    
    return (
        <div className="w-full flex flex-col items-center">
            <MessageCard message={message}/> 
            {/* template 에서 message 전달하기 */}
        </div>
    )
}

export default MainMolecule;