import { useEffect, useState } from "react";
import { breakpoints } from "../utils/mediaConstants";
import openness from '../images/values/maximize-circle.svg';
import responsibility from '../images/values/global-edit.svg';
import innovation from '../images/values/cpu-charge.svg';
import quality from '../images/values/ranking.svg';
import windFarms from '../images/values/wind-farms-fields.png'
import workers from '../images/values/man-worker-firld-by-solar-panels.png'




const valuesData = [
  {
    "id": 1,
    "name": "Openness",
    "image": openness,
    "text": "to the world, people, new ideas and projects"
  },
  {
    "id": 2,
    "name": "Responsibility",
    "image": responsibility,
    "text": "we are aware that the results of our work have an impact on our lives and the lives of future generations"
  },
  {
    "id": 3,
    "image": windFarms
  },

  {
    "id": 5,
    "name": "Innovation",
    "image": innovation,
    "text": "we use the latest technology to implement non-standard solutions"
  },
  {
    "id": 6,
    "name": "Quality",
    "image": quality,
    "text": "we do not strive to be the first among others, but we want to be the best in our business"
  },
  {
    "id": 4,
    "image": workers
  }
]

export const ValuesGallery = ({ currentScreen }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    if (window.screen.width < breakpoints.wTablet) {
      setValues(
        valuesData.filter((el) => {
          return el.hasOwnProperty("name");
        })
      );
    } else {
      setValues(valuesData);
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
