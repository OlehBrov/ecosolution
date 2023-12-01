import { Adress } from "../../components/Adress";
import { LinkArrow } from "../../components/LinkArrow";

export const HeroSection = () => {
  return (
    <div className="container hero-container">
      <div className="hero-text">
        <div className="hero-heading-wrap">
          <h1 className="heading section-heading">
            RENEWABLE ENERGY For any task
          </h1>
        </div>
        <div className="hero-text-wrap">
          <p className="paragraph">
            Development and implementation of renewable non-polluting energy
            sources, generating power generation using energy wind, sun, water,
            biomass
          </p>
          <a href="#" className="hero-link">
            Learn more <LinkArrow />
          </a>
        </div>
      </div>
      {/* <div className="separator"></div> */}

     
    </div>
  );
};
