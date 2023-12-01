import { BtnArrow } from "../BtnArrow";

export const LeftButton = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className="slide-btn prev-slide-btn" onClick={() => onClick()}>
      {" "}
      <BtnArrow />
    </button>
  );
};
