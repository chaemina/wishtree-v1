import { ReactNode } from "react";

export interface BoxProps {
    children: ReactNode; 
}

export interface WishCardProps {
    content: string;
    onContentChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // `content`를 수정할 때 사용
  }
  

export interface WishInfoProps {
    content: string;
    name: string;
    comments: Array<CommentData>;
    wishId: number;
}

export interface CommentData {
    comment_user_name: string; 
    comment_content: string; 
}

export interface CommentProps {
    comments: Array<CommentData>; 
}
