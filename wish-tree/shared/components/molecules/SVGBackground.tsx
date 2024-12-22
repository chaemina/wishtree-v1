import LargeLight from "../atoms/icons/LargeLight";
import { SVGBackgroundProps, Position } from "../../types/SVGBackgrountProps";

const SVGBackground = ({ position }: SVGBackgroundProps) => {
    
  return (
    <div
      className={`absolute z-0 transform ${position.LR} ${position.TB} w-[59px] h-[59px]`}>
      <LargeLight />
    </div>
  );
};

export default SVGBackground;
