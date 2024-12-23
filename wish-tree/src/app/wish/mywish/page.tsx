import WishTemplate from "../../../../shared/components/templates/WishTemplate";

export const metadata = {
    title: "소원 트리",
  };

export default function Wish() {
    return (
        <>
         {/* 내 소원 전달 */}
           <WishTemplate content="소원 내용"/> 
        </>
    )
}