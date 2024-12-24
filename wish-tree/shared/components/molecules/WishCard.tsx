import { WishCardProps } from "../../types/BoxProps";

const WishCard = ({content} : WishCardProps) => {
    return(
        <div className="w-[80%] h-[50%] mobile:text-lg laptop:text-xl desktop:text-4xl bg-opacity-30 p-2 flex justify-center rounded-xl items-center bg-bgCard">{content}
        </div>
    )
}

export default WishCard;