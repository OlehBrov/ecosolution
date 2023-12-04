import { useEffect, useRef, useState } from "react";


import solar1 from '../../images/cases/solar1.jpg';
import solar2 from '../../images/cases/solar2.jpg';
import solar3 from '../../images/cases/solar3.jpg';
import solar4 from '../../images/cases/solar4.jpg';
import solar5 from '../../images/cases/solar5.png';
import { LinkArrow } from "../../components/LinkArrow";

import Carousel from "react-multi-carousel";


import "react-multi-carousel/lib/styles.css";
import { LeftButton } from "../../components/carousel/LeftButton";
import { RightButton } from "../../components/carousel/RightButton";
import { breakpoints } from "../../utils/mediaConstants";
import React from "react";


const casesData = [
   {
    "id": 1,
    "name": "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    "about": "Wind Power for auto field irrigation",
    "date": "July 2023",
    "image": solar1
  },
  {
    "id": 2,
    "name": "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    "about": "Wind Power for auto field irrigation",
    "date": "July 2023",
    "image": solar2
  },
  {
    "id": 3,
    "name": "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    "about": "Wind Power for auto field irrigation",
    "date": "July 2023",
    "image": solar3
  },
  {
    "id": 4,
    "name": "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    "about": "Wind Power for auto field irrigation",
    "date": "July 2023",
    "image": solar4
  },
  {
    "id": 5,
    "name": "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    "about": "Wind Power for auto field irrigation",
    "date": "July 2023",
    "image": solar5
  }
]


export const Cases = ({ currentScreen }) => {
  const [cases, setCases] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showPartial, setShowPartial] = useState(false);
  
  const carouselRef = useRef(null);
  useEffect(() => {
    setCases(casesData);
  }, []);
  useEffect(() => {
    if (
      currentScreen === breakpoints.wMobile ||
      currentScreen === breakpoints.wSemiMobile
    ) {
      setShowPartial(false);
    } else setShowPartial(true);
  }, [currentScreen]);

 

  const counter = (nextSlide, { currentSlide, onMove }, direction) => {
        
    if (nextSlide > currentSlide) {
     

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
