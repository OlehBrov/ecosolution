import { useEffect, useState } from "react";

import { TeamGallery } from "../../components/TeamGallery";
import { EmailLink } from "../../components/addressLinks/EmailLink";
import { LocaleLink } from "../../components/addressLinks/LocaleLink";
import { IntroductionImg } from "../../components/srcSets/IntroductionImg";
import { breakpoints } from "../../utils/mediaConstants";
import { Copyright } from "../../components/Copyright";

export const IntroductionSection = ({ currentScreen }) => {
  const [isVisible, setIsVisible] = useState(null);
  useEffect(() => {
    if (
      currentScreen === breakpoints.wMobile ||
      currentScreen === breakpoints.wSemiMobile
    ) {
      setIsVisible(false);
    } else setIsVisible(true);
  }, [currentScreen]);
  return (
    <div id="about-section" className=" container intro-container">
      <div className="intro-address-wrap">
        <LocaleLink showlabel={false} /> <EmailLink showlabel={false} /> {isVisible && <Copyright/>}
      </div>

      <div className="img-wrap">
        <IntroductionImg />
      </div>
      <div className="about-team-wrap">
        <h2 className="section-heading">
          LET’s start with small start with ourselves
        </h2>
        <article className="intro-article">
          ECOSOLUTION is the largest group of companies in Western Ukraine,
          which is engaged in the development and implementation of renewable
          environmentally friendly energy sources. We are the first privately
          owned company that received a loan from the European Bank for
          Reconstruction and Development (EBRD) and built the first wind farm in
          Western Ukraine. During the company's work, a number of projects in
          the field of energy were implemented. At the same time, new investment
          projects, in particular small hydropower and biofuels, are constantly
          being developed and developed with existing objects.
        </article>
      </div>
      <div className="team-wrap">
        <TeamGallery />
      </div>
    </div>
  );
};
