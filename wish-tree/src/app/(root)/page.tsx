import NoWishTreeTemplate from "../../../shared/components/templates/NoWishTreeTemplate"
import WishTreeTemplate from "../../../shared/components/templates/WishTreeTemplate";

export default function Main() {
    const written = false;


    return (
        <div className="w-full h-full">
            {/* token을 담아서 요청 보내고  */}
            {written ? (
                <WishTreeTemplate/>
            ): (
                <NoWishTreeTemplate/>
            ) }
        </div>
    )
}