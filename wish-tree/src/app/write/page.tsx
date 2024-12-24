import WriteWishTemplate from "../../../shared/components/templates/WriteWishTemplate"

export const metadata = {
    title: "소원 트리",
  };
  
export default function Write() {
    return (
        <div className="w-full h-full">
            <WriteWishTemplate/>
        </div>
    )
}