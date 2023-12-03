import { Children, useEffect, useRef, useState } from "react";

import data from "../../data/cases.json";

import { LinkArrow } from "../../components/LinkArrow";

import Carousel from "react-multi-carousel";
import { getClones } from "react-multi-carousel/lib/utils/clones";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { getOriginalCounterPart } from "react-multi-carousel/lib/utils";
import "react-multi-carousel/lib/styles.css";
import { LeftButton } from "../../components/carousel/LeftButton";
import { RightButton } from "../../components/carousel/RightButton";
import { breakpoints } from "../../utils/mediaConstants";
import React from "react";

export const Cases = ({ currentScreen }) => {
  const [cases, setCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPartial, setShowPartial] = useState(false);
  
  const carouselRef = useRef(null);
  useEffect(() => {
    setCases(data);
  }, []);
  useEffect(() => {
    if (
      currentScreen === breakpoints.wMobile ||
      currentScreen === breakpoints.wSemiMobile
    ) {
      setShowPartial(false);
    } else setShowPartial(true);
  }, [currentScreen]);

  //   useEffect(() => {
  //   setChildrenArray(Children.toArray(carouselRef.current.props.children))
  // }, [carouselRef])

  const counter = (nextSlide, { currentSlide, onMove }, direction) => {
    console.log("nextSlide", nextSlide);
    console.log("currentSlide", currentSlide);
    
    if (nextSlide > currentSlide) {
      // setCurrentPage(nextSlide + currentSlide - sliderIndex );

      if (currentSlide > cases.length) {
        setCurrentPage(currentSlide - cases.length);
      } else {
        setCurrentPage(currentSlide);
      }
    } else if (nextSlide < currentSlide) {
      setCurrentPage(currentSlide);
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div id="cases-section" className="container cases-container">
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
          ref={carouselRef}
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
              <div className="cases-image-wrap">
                {" "}
                <img className="case-image" src={el.image} alt="" />
              </div>

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
