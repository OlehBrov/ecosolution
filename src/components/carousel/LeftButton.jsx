import { BtnArrow } from "../BtnArrow";

export const LeftButton = ({ onClick, ...rest }) => {
 
  return (
    <button className="slide-btn prev-slide-btn" onClick={() => onClick()} aria-label="Button to slide to previous cases slide">
      {" "}
      <BtnArrow height={36} width={36} color="#173D33"/>
    </button>
  );
};
