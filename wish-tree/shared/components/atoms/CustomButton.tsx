"use client"

import React from 'react';
import { CustomButtonProps } from '../../types/CustomButtonProps';

const CustomButton = ({ children, handleClick,btnColor }: CustomButtonProps) => {

  const color = btnColor ? "bg-myRed" : "bg-myYellow"

  return (
    <button
      title={children}
      className={`${color} mobile:w-[5rem] laptop:text-3xl laptop:w-[15rem] laptop:h-[3rem] desktop:text-5xl desktop:w-[15rem]  desktop:h-[4rem] rounded-3xl`}
      onClick={handleClick}
      aria-label={children}
    >
      {children}
    </button>
  );
}

export default CustomButton;