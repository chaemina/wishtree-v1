import LargeLight from "../atoms/icons/LargeLight";
import MediumLight from "../atoms/icons/MediumLight";
import { SVGBackgroundProps, Position } from "../../types/SVGBackgrountProps";

export const SVGBackground = ({ position }: SVGBackgroundProps) => {
    
  return (
    <>
    <div
      className={`absolute z-0 transform ${position.LR} ${position.TB} w-[59px] h-[59px]`}>
      <LargeLight />
    </div>
    </>
  );
};

export const SVGBackgroundM = ({ position }: SVGBackgroundProps) => {
  return (
    <>
    <div
      className={`absolute z-0 transform ${position.LR} ${position.TB} w-[31px] h-[31px]`}>
      <MediumLight />
    </div>
    </>
  );
};

