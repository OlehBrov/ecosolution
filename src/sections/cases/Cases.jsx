import { React, useEffect, useState } from "react";
import Slider from "react-slick";

import solar1 from "../../images/cases/solar1.jpg";
import solar2 from "../../images/cases/solar2.jpg";
import solar3 from "../../images/cases/solar3.jpg";
import solar4 from "../../images/cases/solar4.jpg";
import solar5 from "../../images/cases/solar5.png";
import { LinkArrow } from "../../components/LinkArrow";
import { LeftButton } from "../../components/carousel/LeftButton";
import { RightButton } from "../../components/carousel/RightButton";

const casesData = [
  {
    id: 1,
    name: "index0 Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    about: "Wind Power for auto field irrigation",
    date: "July 2023",
    image: solar1,
  },
  {
    id: 2,
    name: "index1 Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    about: "Wind Power for auto field irrigation",
    date: "July 2023",
    image: solar2,
  },
  {
    id: 3,
    name: "index2 Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    about: "Wind Power for auto field irrigation",
    date: "July 2023",
    image: solar3,
  },
  {
    id: 4,
    name: "index3 Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    about: "Wind Power for auto field irrigation",
    date: "July 2023",
    image: solar4,
  },
  {
    id: 5,
    name: "index4 Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    about: "Wind Power for auto field irrigation",
    date: "July 2023",
    image: solar5,
  },
];

export const Cases = ({ currentScreen }) => {
  const [cases, setCases] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    setCases(casesData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerPadding: "50%",
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          // initialSlide: 2,
        },
      },
    ],
    nextArrow: <RightButton />,
    prevArrow: <LeftButton />,
    beforeChange: (index, current) => {
      console.log("current", current);
      if (current === -1) current = 4;
      if (current === -2) current = 3;

      setCurrentIndex(current + 1);
    },
  };
  return (
    <div id="cases-section" className="container cases-container">
      <h2 className="section-heading cases-heading">
        Successful cases of our company
      </h2>

      <div className="carousel-wrapper">
        <p className="slides-pages-counter">
          <span className="current-slide-number">
            {currentIndex && currentIndex.toString().padStart(2, "0")}{" "}
          </span>
          <span className="total-slides-number">
            /{cases.length.toString().padStart(2, "0")}
          </span>
        </p>
        <Slider {...settings}>
          {cases.map((el) => (
            <div key={el.id} className="case-card-wrapper" id={el.id}>
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
        </Slider>
      </div>
    </div>
  );
};
