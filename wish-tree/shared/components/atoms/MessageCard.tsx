import { MessageCardProps } from "../../types/MessageCardProps";

const MessageCard = ({ message }: MessageCardProps) => { 
    return (
        <div className="w-[60%]">
            <p className="mobile:text-xs laptop:text-lg desktop:text-2xl text-center">{message}</p>
        </div>
    );
}

export default MessageCard;
