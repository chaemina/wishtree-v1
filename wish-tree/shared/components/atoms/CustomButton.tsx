"use client"

import React from 'react';
import { CustomButtonProps } from '../../types/CustomButtonProps';

const CustomButton = ({ children, handleClick,btnColor, className}: CustomButtonProps) => {

  const color = btnColor ? "bg-myRed" : "bg-myYellow"
  const textColor = btnColor ? "text-foreground" : "text-black"

  return (
    <button
      title={children}
      className={`${color} ${className} text-xl laptop:text-2xl desktop:text-3xl rounded-3xl p-1 pl-4 pr-4`}
      onClick={handleClick}
      aria-label={children}
    >
      <p className={textColor}>{children}</p>
    </button>
  );
}

export default CustomButton;