import LargeLight from "../atoms/icons/LargeLight";
import { SVGBackgroundProps, Position } from "../../types/SVGBackgrountProps";

const SVGBackground = ({ position }: SVGBackgroundProps) => {
    
  return (
    <div
      className={`absolute z-0 ${position.TB} ${position.LR}`}>
      <LargeLight  />
    </div>
  );
};

export default SVGBackground;
