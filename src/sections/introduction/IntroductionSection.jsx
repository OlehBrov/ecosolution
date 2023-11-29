// import turbine from '../../images/wind-turbine-clean-energy.jpg'

import { TeamGallery } from "../../components/TeamGallery";

export const IntroductionSection = () => {
  return (
    <div className="container intro-container">
      <div className="img-wrap"></div>
      <h2 className="section-heading">
        LET’s start with small start with ourselves
      </h2>
      <article className="intro-article">
        ECOSOLUTION is the largest group of companies in Western Ukraine, which
        is engaged in the development and implementation of renewable
        environmentally friendly energy sources. We are the first privately
        owned company that received a loan from the European Bank for
        Reconstruction and Development (EBRD) and built the first wind farm in
        Western Ukraine. During the company's work, a number of projects in the
        field of energy were implemented. At the same time, new investment
        projects, in particular small hydropower and biofuels, are constantly
        being developed and developed with existing objects.
          </article>
          <div className="team-wrap">
             <TeamGallery/>
          </div>
    </div>
  );
};
