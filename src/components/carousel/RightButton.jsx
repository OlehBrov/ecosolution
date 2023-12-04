import { BtnArrow } from "../BtnArrow";

export const RightButton = ({ onClick, ...rest }) => {
  
  return (
    <button className="slide-btn next-slide-btn" onClick={() => onClick()} aria-label="Button to slide to next cases slide"><BtnArrow height={36} width={36} color="#173D33"/>
    </button>
  );
};
