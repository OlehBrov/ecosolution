import { useEffect, useState } from "react";

import data from "../../data/cases.json";
import { BtnArrow } from "../../components/BtnArrow";
import { LinkArrow } from "../../components/LinkArrow";

import Carousel from "react-multi-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "react-multi-carousel/lib/styles.css";
import { LeftButton } from "../../components/carousel/LeftButton";
import { RightButton } from "../../components/carousel/RightButton";
import { breakpoints } from "../../utils/mediaConstants";

export const Cases = ({ currentScreen }) => {
  const [cases, setCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPartial, setShowPartial] = useState(false);

  useEffect(() => {
    setCases(data);
  }, []);
  useEffect(() => {
    if (
      currentScreen === breakpoints.wMobile ||
      currentScreen === breakpoints.wSemiMobile
    ) {
      setShowPartial(false);
    } else  setShowPartial(true)
  }, [currentScreen]);
  const counter = (nextSlide, { currentSlide, onMove }, direction) => {
    if (nextSlide > currentSlide) {
      if (currentSlide > cases.length) {
        setCurrentPage(currentSlide - cases.length);
      } else {
        setCurrentPage(currentSlide);
      }
    } else if (currentPage === 1) {
      setCurrentPage(cases.length);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="container cases-container">
      <h2 className="section-heading cases-heading">
        Successful cases of our company
      </h2>

      <div className="carousel-wrapper">
        <p className="slides-pages-counter">
          <span className="current-slide-number">
            {currentPage.toString().padStart(2, "0")}{" "}
          </span>
          <span className="total-slides-number">
            /{cases.length.toString().padStart(2, "0")}
          </span>
        </p>
        <Carousel
          responsive={{
            nonMobile: {
              breakpoint: { max: 4000, min: 768 },
              items: 2,
              partialVisibilityGutter: 50,
            },
            mobile: {
              breakpoint: { max: 768, min: 0 },
              items: 1,
            },
          }}
          swipeable={true}
          showDots={false}
          infinite={true}
          customLeftArrow={<LeftButton />}
          customRightArrow={<RightButton setCurrentPage={setCurrentPage} />}
          arrows={true}
          renderArrowsWhenDisabled={true}
          beforeChange={counter}
          partialVisbile={showPartial}
          
        >
          {cases.map((el) => (
            <div key={el.id} className="case-card-wrapper">
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
    </div>
  );
};
