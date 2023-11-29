import { LinkArrow } from "../../components/LinkArrow";

export const HeroSection = () => {
  return (
    <div className="container hero-container">
      <h1 className="heading section-heading">RENEWABLE ENERGY For any task</h1>
      <p className="paragraph">
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
          </p>
          <a href="#" className="hero-link">Learn more <LinkArrow /></a>
          <div className="separator"></div>
          <a href="https://maps.app.goo.gl/273JL63UX9UNxkFg9" target="_blank" rel="noopener noreferrer" className="contact-link">79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</a>
          <a href="mailto:office@ecosolution.com" className="contact-link">office@ecosolution.com</a>
    </div>
  );
};
