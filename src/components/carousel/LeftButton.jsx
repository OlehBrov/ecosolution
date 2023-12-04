import { BtnArrow } from "../BtnArrow";

export const LeftButton = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className="slide-btn prev-slide-btn" onClick={() => onClick()} aria-label="Button to slide to previous cases slide">
      {" "}
      <BtnArrow height={36} width={36} color="#173D33"/>
    </button>
  );
};
