import React from "react";
import Ob1 from "../components/atoms/icons/Ob1";
import Ob2 from "../components/atoms/icons/Ob2";
import Ob3 from "../components/atoms/icons/Ob3";
import Ob4 from "../components/atoms/icons/Ob4";
import Ob5 from "../components/atoms/icons/Ob5";
import Ob6 from "../components/atoms/icons/Ob6";
import Ob7 from "../components/atoms/icons/Ob7";
import Ob8 from "../components/atoms/icons/Ob8";
import Ob9 from "../components/atoms/icons/Ob9";

// 매핑 객체
const objectMapping: Record<number, React.FC> = {
  1: Ob1,
  2: Ob2,
  3: Ob3,
  4: Ob4,
  5: Ob5,
  6: Ob6,
  7: Ob7,
  8: Ob8,
  9: Ob9,
};

export const getObjectComponent = (key: number) => {
  const Component = objectMapping[key];
  return Component ? <Component /> : null; 
};
