import { WishCardProps } from "../../types/BoxProps";

const WishCard = ({wish} : WishCardProps) => {
    return(
        <div className="w-[80%] h-[50%] bg-opacity-30 p-2 flex justify-center rounded-xl items-center bg-bgCard">{wish}
        </div>
    )
}

export default WishCard;