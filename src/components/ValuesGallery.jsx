import { useEffect, useState } from "react";
import data from "../data/values.json";
import { breakpoints } from "../utils/mediaConstants";

export const ValuesGallery = ({ currentScreen }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (window.screen.width < breakpoints.wSemiMobile) {
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
    <div className="team-cards-grid">
      {values.length &&
        values.map((val) => (
          <div key={val.id} className="card-wrap">
            <div className="card-head">
              <img src={val.image} alt={val.name} className="grid-icon" />
              <p className="grid-name value-name" data-url={val.image}>
                {val.name}
              </p>
            </div>

            <p className="grid-position value-descr">{val.text}</p>
          </div>
        ))}
    </div>
  );
};
