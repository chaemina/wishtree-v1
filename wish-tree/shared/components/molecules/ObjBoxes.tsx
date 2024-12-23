import React from "react";
import Box from "../atoms/Box";
import { getObjectComponent } from "../../constants/object";

const ObjBoxes = ({ selectedBox, onBoxClick }: { selectedBox: number | null, onBoxClick: (key: number) => void }) => {
  const objectKeys = Array.from({ length: 9 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-3 gap-6">
      {objectKeys.map((key) => (
        <Box
          key={key}
          isSelected={selectedBox === key} 
          onClick={() => onBoxClick(key)}  
        >
          {getObjectComponent(key)}
        </Box>
      ))}
    </div>
  );
};

export default ObjBoxes;
