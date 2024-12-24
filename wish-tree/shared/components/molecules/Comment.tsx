"use client";

import { useState } from "react"; // useState import
import CustomInput from "../atoms/CustomInput";
import CustomButton from "../atoms/CustomButton";
import Profile from "../atoms/icons/Profile";
import { commentapi } from "../../service/apis"; // commentapi 임포트

interface CommentProps {
    comments: Array<{
        comment_user_name: string;
        comment_content: string;
    }>;
    wishId: number; 
}

const Comment = ({ comments, wishId }: CommentProps) => {
    const [wish, setWish] = useState(""); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState<string | null>(null); 

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setWish(e.target.value);
    };

    const handleCommentSubmit = async () => {
        if (wish.trim() === "") {
            setError("댓글 내용을 입력해주세요.");
            return;
        }

        setLoading(true); 
        setError(null); 

        try {
            const response = await commentapi(wish, String(wishId));
            console.log("댓글 전송 성공:", response);
            window.location.reload()
        } catch (err) {
            console.error("댓글 전송 실패:", err);
            setError("댓글 전송에 실패했습니다. 다시 시도해주세요.");
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="flex flex-col desktop:items-center w-[90%] min-h-[10rem] max-h-[24rem] bg-white bg-opacity-50 rounded-xl">
            {/* 댓글 리스트 렌더링 */}
            <div className="flex flex-col gap-4 mt-5 overflow-y-scroll desktop:w-[50%]">
                {comments.map((comment, index) => (
                    <div key={index} className="flex w-full items-center p-2 gap-2">
                        <div className="w-1/10">
                            <Profile />
                        </div>
                        <div className="w-9/10 flex flex-col">
                            <p className="text-black">{comment.comment_user_name}</p>
                            <p className="text-black">{comment.comment_content}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* 댓글 입력 폼 */}
            <div className="w-full flex flex-col items-center gap-2">
                <CustomInput
                    onChange={handleInputChange}
                    placeholder="응원 메세지를 작성해주세요"
                    className="h-[30%] text-black mt-10 bg-transparent placeholder-black border-b border-black w-[50%]"
                />
                {error && <p className="text-red-500">{error}</p>} {/* 에러 메시지 */}
                <CustomButton 
                    handleClick={handleCommentSubmit}
                >
                    {loading ? "전송 중..." : "댓글 쓰기"}
                </CustomButton>
            </div>
        </div>
    );
};

export default Comment;
