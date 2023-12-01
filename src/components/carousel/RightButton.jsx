import { BtnArrow } from "../BtnArrow";

export const RightButton = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

    // setCurrentPage(currentSlide-1)
  return (
    <button className="slide-btn next-slide-btn" onClick={() => onClick()}><BtnArrow />
    </button>
  );
};
