import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    children : string;
    handleClick? : MouseEventHandler<HTMLButtonElement>;
    btnColor? : string;
    className?: string;
}