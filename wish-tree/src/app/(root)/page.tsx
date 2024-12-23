import NoWishTreeTemplate from "../../../shared/components/templates/NoWishTreeTemplate"
import WishTreeTemplate from "../../../shared/components/templates/WishTreeTemplate";

export const metadata = {
    title: "소원 트리",
  };
  
export default function Main() {
    // useEffect로 화면 로드할 때 마다 api 요청 보내서 여부 확인 
    // token 여부 먼저 검사하고, token 있으면 written 검사 
    
    const written = true;


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