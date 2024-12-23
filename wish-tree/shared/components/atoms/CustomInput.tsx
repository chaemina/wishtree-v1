import React from 'react';
import { CustomInputProps } from '../../types/CustomInputProps';

const CustomInput = ({ placeholder, className, onChange }: CustomInputProps) => {
  return (
    <textarea
      placeholder={placeholder}
      className={`${className} mobile:text-lg desktop:text-2xl focus:outline-none text-center`}
      onChange={onChange} 
    />
  );
};

export default CustomInput;
