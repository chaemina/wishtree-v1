import { MessageCardProps } from "../../types/MessageCardProps";

const MessageCard = ({ message }: MessageCardProps) => { 
    return (
        <div className="w-[60%] p-2">
            <p className="mobile:text-md laptop:text-lg desktop:text-2xl text-center">{message}</p>
        </div>
    );
}

export default MessageCard;
