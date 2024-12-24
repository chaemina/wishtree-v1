"use client";

import { useState } from "react"; 
import MessageCard from "../atoms/MessageCard";
import CustomButton from "../atoms/CustomButton";
import WishCard from "../molecules/WishCard";
import { WishInfoProps } from "../../types/BoxProps";
import Comment from "../molecules/Comment";
import ModifyWishCard from "../molecules/ModifyWishCard"; 


const WishTemplate = ({ content, comments, name, wishId }: WishInfoProps) => {
    const [showComments, setShowComments] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // 추가된 상태 변수

    const date = "2024.12.25"; // 작성 날짜

    const toggleComments = () => {
        setShowComments(!showComments); 
    };

    const handleCloseComments = () => {
        setShowComments(false);
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing); 
    };

    return (
        <div className="w-full h-full flex flex-col items-center gap-4">
            <MessageCard message={`${name}의 크리스마스 소원`} />
            {showComments ? (
                <div className="w-full flex flex-col items-center gap-6">
                    <Comment comments={comments.map(comment => ({
                        comment_user_name: comment.comment_user_name, 
                        comment_content: comment.comment_content
                    }))} wishId={wishId} /> 
                    <CustomButton btnColor="red" handleClick={handleCloseComments}>
                       응원 메세지 닫기
                    </CustomButton>
                </div>
            ) : (
                <>
                    {isEditing ? (
                    <>
                        <ModifyWishCard content={content} /> 
                    </>
                    ) : (
                    <>
                        <WishCard content={content} />
                        <MessageCard message={`${date}`} />
                        <div>
                        <CustomButton  btnColor="red" handleClick={toggleComments}>
                             응원 메세지 보기
                        </CustomButton>
                    {name === "나" ? (
                        <CustomButton className="ml-2 mb-20" handleClick={handleEditToggle}>
                            소원 수정하기
                        </CustomButton>
                    ) : null}
                    </div>
                    </>
                    )}
                  
                </>
            )}
        </div>
    );
};

export default WishTemplate;
