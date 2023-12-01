import { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";

import data from "../../data/cases.json";
import { BtnArrow } from "../../components/BtnArrow";
import { LinkArrow } from "../../components/LinkArrow";
import { breakpoints } from "../../utils/mediaConstants";
import Carousel from "react-multi-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const responsive = {
  nonMobile: {
    breakpoint: { min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

export const Cases = ({ currentScreen }) => {
  const [cases, setCases] = useState([]);
  const [showMultipleSlides, setShowMultipleSlides] = useState(false);
  const [slidesNumber, setSlidesNumber] = useState(100);
  useEffect(() => {
    setCases(data);
  }, []);
  const statusFormat = (current, total) => {
    const formattedCurrent = current.toString().padStart(2, "0");
    const formattedTotal = total.toString().padStart(2, "0");

    return `${formattedCurrent} / ${formattedTotal}`;
  };

  const customPrevButton = (onClickHandler, hasPrev, label) => (
    <button
      className="slide-btn prev-slide-btn"
      onClick={onClickHandler}
      disabled={!hasPrev}
      aria-label={label}
    >
      <BtnArrow />
    </button>
  );
  const customNextButton = (onClickHandler, hasNext, label) => (
    <button
      className="slide-btn next-slide-btn"
      onClick={onClickHandler}
      disabled={!hasNext}
      aria-label={label}
    >
      <BtnArrow />
    </button>
  );

  const shownSlidesHandler = () => {
    if (
      currentScreen === breakpoints.wTablet ||
      currentScreen === breakpoints.wDesktop
    ) {
      setShowMultipleSlides(true);
      setSlidesNumber(50);
    } else {
      setShowMultipleSlides(false);
      setSlidesNumber(100);
    }
  };
  useEffect(() => {
    shownSlidesHandler();
  }, [currentScreen]);
  return (
    <div className="container cases-container">
      <h2 className="section-heading cases-heading">
        Successful cases of our company
      </h2>
      {/* <Carousel
        axis="horizontal"
        showThumbs={false}
        statusFormatter={statusFormat}
        showIndicators={false}
        centerMode={false}
        // centerSlidePercentage={50}
        // width={"50%"}
        infiniteLoop={true}
      
        renderArrowPrev={customPrevButton}
        renderArrowNext={customNextButton}
      >
        {cases.map((el) => (
          <div key={el.id}>
            <img className="case-image" src={el.image} alt="" />
            <div className="case-data-wrap">
              <div className="case-name-wrap">
                <p className="case-name">{el.name}</p>
                <a href="#" className="case-link">
                  <LinkArrow />
                </a>
              </div>
              <div className="case-about-wrap">
                <p className="case-about">{el.about}</p>
                <p className="case-date">{el.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel> */}
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        // dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
      >
        {cases.map((el) => (
          <div key={el.id}>
            <img className="case-image" src={el.image} alt="" />
            <div className="case-data-wrap">
              <div className="case-name-wrap">
                <p className="case-name">{el.name}</p>
                <a href="#" className="case-link">
                  <LinkArrow />
                </a>
              </div>
              <div className="case-about-wrap">
                <p className="case-about">{el.about}</p>
                <p className="case-date">{el.date}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
