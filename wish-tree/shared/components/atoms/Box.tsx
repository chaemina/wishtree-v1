import { BoxProps } from "../../types/BoxProps";

const Box = ({ children, onClick, isSelected }: BoxProps & { onClick: () => void, isSelected: boolean }) => {
  
  return (
    <div
      className={`w-full bg-opacity-30 p-2 flex justify-center rounded-xl items-center bg-white
        ${isSelected ? "bg-opacity-100 bg-gray-100" : ""} 
        hover:bg-gray-100 hover:shadow-lg cursor-pointer`} 
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Box;
