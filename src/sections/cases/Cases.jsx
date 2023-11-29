import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

import data from "../../data/cases.json";
import { BtnArrow } from "../../components/BtnArrow";
import { LinkArrow } from "../../components/LinkArrow";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export const Cases = () => {
  const [cases, setCases] = useState([]);
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

  return (
    <div className="container cases-container">
      <h2 className="section-heading cases-heading">
        Successful cases of our company
      </h2>
      <Carousel
        axis="horizontal"
        showThumbs={false}
        statusFormatter={statusFormat}
        showIndicators={false}
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
      </Carousel>
    </div>
  );
};
