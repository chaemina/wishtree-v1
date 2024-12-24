import { WishCardProps } from "../../types/BoxProps";
import CustomInput from "../atoms/CustomInput";

const WishCard = ({ content, onContentChange }: WishCardProps & { onContentChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void }) => {
  return (
    <div className="w-[80%] min-h-[50%] mobile:text-lg laptop:text-xl desktop:text-4xl bg-opacity-30 p-2 flex justify-center rounded-xl items-center bg-bgCard">
      {onContentChange ? (
        <CustomInput
          onChange={onContentChange}  
          className="w-full h-full bg-transparent text-center border-none outline-none"
          placeholder={content}
        />
      ) : (
        content
      )}
    </div>
  );
};

export default WishCard;
