import WishTemplate from "../../../../shared/components/templates/WishTemplate";

export const metadata = {
    title: "소원 트리",
  };
  

export default function Wish() {
    return (
        <div>
        {/* 해당 id 사용자 메세지 전달 */}
            <WishTemplate wish="소원 내용"/>
        </div>
    )
}