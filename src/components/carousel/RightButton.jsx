import { useState } from "react";
import { BtnArrow } from "../BtnArrow";

export const RightButton = ({ onClick, ...rest }) => {
  const [arrowColor, setArrowColor] = useState("#173D33");

  const hoverHandler = (e) => {
    setArrowColor("#97D28B");
  };
  const hoverOffHandler = (e) => {
    setArrowColor("#173D33");
  };
  return (
    <button
      className="slide-btn next-slide-btn"
      onClick={() => onClick()}
      aria-label="Button to slide to next cases slide"
      onMouseOver={hoverHandler}
      onMouseOut={hoverOffHandler}
    >
      <BtnArrow height={36} width={36} color={arrowColor} />
    </button>
  );
};
