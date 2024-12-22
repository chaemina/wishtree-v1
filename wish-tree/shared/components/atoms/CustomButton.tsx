"use client"

import React from 'react';
import { CustomButtonProps } from '../../types/CustomButtonProps';

const CustomButton = ({ children, handleClick,btnColor, className}: CustomButtonProps) => {

  const color = btnColor ? "bg-myRed" : "bg-myYellow"
  const textColor = btnColor ? "text-foreground" : "text-black"

  return (
    <button
      title={children}
      className={`${color} ${className} mobile:w-[8rem] text-2xl laptop:text-3xl laptop:w-[15rem] laptop:h-[3rem] desktop:text-4xl desktop:w-[15rem]  desktop:h-[4rem] rounded-3xl p-1`}
      onClick={handleClick}
      aria-label={children}
    >
      <p className={textColor}>{children}</p>
    </button>
  );
}

export default CustomButton;