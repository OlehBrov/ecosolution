import { useEffect, useState } from "react";
import { Counter } from "../../components/Counter";
import { breakpoints } from "../../utils/mediaConstants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import nuclear from "../../images/casesGalleryImgs/nuclear.jpg";
import wind from "../../images/casesGalleryImgs/wind.jpg";
import solar from "../../images/casesGalleryImgs/solar.jpg";
import hydro from "../../images/casesGalleryImgs/hydro.jpg";
import thermal from "../../images/casesGalleryImgs/thermal.jpg";
import { LinkDots } from "../../components/carousel/LinkDots";

export const casesGallery = [
  {
    id: "001",
    name: "Solar Energy",
    tag: "Solar",
    descr:
      "Solar Energy lorem Solar Energy lorem Solar Energy lorem Solar Energy lorem Solar Energy lorem",
    image: solar,
  },
  {
    id: "002",
    name: "Wind Energy",
    tag: "Wind",
    descr:
      "Branch of alternative energy that specializes in converting the kinetic energy of the wind into electrical energy",
    image: wind,
  },
  {
    id: "003",
    name: "Hydro Energy",
    tag: "Hydro",
    descr:
      "Branch of alternative energy that specializes in converting the kinetic energy of the wind into electrical energy",
    image: hydro,
  },
  {
    id: "004",
    name: "Thermal Energy",
    tag: "Thermal",
    descr:
      "Branch of alternative energy that specializes in converting the kinetic energy of the wind into electrical energy",
    image: thermal,
  },
  {
    id: "005",
    name: "Nuclear Energy",
    tag: "Nuclear",
    descr:
      "Branch of alternative energy that specializes in converting the kinetic energy of the wind into electrical energy",
    image: nuclear,
  },
];

export const ProductionSection = ({ currentScreen }) => {
  
  const [showCarousel, setShowCarousel] = useState(false);
  useEffect(() => {
    if (currentScreen === breakpoints.wDesktop) {
      setShowCarousel(true);
    } else setShowCarousel(false);
  }, [currentScreen]);
  return (
    <div className="container production-container">
      <h2 className="section-heading production-heading">
        Electricity we produced for all time
      </h2>
      <div className="counter-section">
        <Counter />
      </div>
      <h2 className="section-heading production-heading">
        The services we provide
      </h2>
      {showCarousel && (
        <div className="products-gallery-wrap">
          <div className="gallery-controls"></div>
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 4000, min: 1280 },
                items: 1,
              },
            }}
            swipeable={false}
            showDots={true}
            infinite={false}
            arrows={false}
            axis="vertical"
            width={596}
            showThumbs={false}
            dynamicHeight={false}
            showArrows={false}
            renderIndicator={LinkDots}
            showStatus={ false}
          >
            {casesGallery.map((el) => (
              <div key={el.id} className="carousel-card">
                <p className="carousel-card-name">{el.name}</p>
                <div className="image-wrapper">
                  <img className="carousel-card-image" src={el.image} alt="" />
                </div>

                <p className="carousel-card-description">{el.descr}</p>
              </div>
            ))}
          </Carousel>{" "}
        </div>
      )}
      {!showCarousel && (
        <div className="services-wrap">
          <div className="description-wrap">
            <p className="services-description">
              Development and implementation of renewable enviroMentally
              friendly energy sources
            </p>
          </div>

          <div className="services-nav">
            <ul className="services-list">
              <li className="services-item">
                <a href="#" className="services-item-link">
                  Solar
                </a>
              </li>
              <li className="services-item">
                <a href="#" className="services-item-link">
                  Wind
                </a>
              </li>
              <li className="services-item">
                <a href="#" className="services-item-link">
                  Hydro
                </a>
              </li>
              <li className="services-item">
                <a href="#" className="services-item-link">
                  Thermal
                </a>
              </li>
              <li className="services-item">
                <a href="#" className="services-item-link">
                  Nuclear
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
