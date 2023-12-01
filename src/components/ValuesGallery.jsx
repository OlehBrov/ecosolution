import { useEffect, useState } from "react";
import data from "../data/values.json";
import { breakpoints } from "../utils/mediaConstants";

export const ValuesGallery = ({ currentScreen }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (window.screen.width < breakpoints.wTablet) {
      setValues(
        data.filter((el) => {
          return el.hasOwnProperty("name");
        })
      );
    } else {
      setValues(data);
    }
  }, [currentScreen]);

  return (
    <div className="team-cards-grid values-cards-grid">
      {values.length &&
        values.map((val, index) => {
          if (val.hasOwnProperty("name")) {
            return (
              <div
                key={val.id}
                className={`values-card-wrap values-card-wrap_${index}`}
              >
                <div className="card-head">
                  <img src={val.image} alt={val.name} className="grid-icon" />
                  <p className="value-name" data-url={val.image}>
                    {val.name}
                  </p>
                </div>

                <p className="value-descr">{val.text}</p>
              </div>
            );
          } else {
            return (
              <div  key={val.id}
                className={`values-card-wrap values-card-wrap_${index} values-image-wrap`}
              >
                <img src={val.image} alt={val.name} className="value-img" />
              </div>
            );
          }
        })}
    </div>
  );
};
