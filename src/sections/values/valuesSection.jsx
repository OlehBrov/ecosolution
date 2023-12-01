import { ValuesGallery } from "../../components/ValuesGallery";

export const ValuesSection = ({ currentScreen }) => {
  return (
    <div className="values-container container ">
      <div className="about-values-wrap">
        <h2 className="section-heading">Main values of our company</h2>
        <article className="values-article">
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world's energy needs.
        </article>
      </div>
      <ValuesGallery currentScreen={currentScreen} />
    </div>
  );
};
