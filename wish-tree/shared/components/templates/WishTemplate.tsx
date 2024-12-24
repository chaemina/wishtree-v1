"use client";

import { useState } from "react"; // useState import
import MessageCard from "../atoms/MessageCard";
import CustomButton from "../atoms/CustomButton";
import WishCard from "../molecules/WishCard";
import { WishInfoProps } from "../../types/BoxProps";
import Comment from "../molecules/Comment";

const WishTemplate = ({ content, comments, name, wishId }: WishInfoProps) => {
    const [showComments, setShowComments] = useState(false);

    const date = "2024.12.25"; // 작성 날짜

    const toggleComments = () => {
        setShowComments(!showComments); // 버튼 클릭 시 상태를 토글
    };

    const handleCloseComments = () => {
        setShowComments(false); // 닫기 버튼 클릭 시 comments 숨기기
    };

    return (
        <div className="w-full h-full flex flex-col items-center gap-10">
            <MessageCard message={`${name}의 크리스마스 소원`} />
            
            {showComments ? (
                <div className="w-full flex flex-col items-center gap-2">
                    <Comment comments={comments.map(comment => ({
                        comment_user_name: comment.comment_user_name, 
                        comment_content: comment.comment_content
                    }))} wishId={wishId} />  {/* wishId를 props로 전달 */}
                    <CustomButton btnColor="red" handleClick={handleCloseComments}>
                       응원 메세지 닫기
                    </CustomButton>
                </div>
            ) : (
                <>
                    <WishCard content={content} />
                    <MessageCard message={`${date}`} />
                    <CustomButton btnColor="red" handleClick={toggleComments}>
                        응원 메세지 보기
                    </CustomButton>
                </>
            )}
        </div>
    );
};

export default WishTemplate;
