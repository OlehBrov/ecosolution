import { useState } from "react";
import { BurgerMenu } from "../../components/BurgerMenu";
import { LogoText } from "../../components/LogoText";
import { MenuBtn } from "../../components/MenuBtn";
import { Logo } from "../../images/logo";
import gsap from "gsap";
import { breakpoints } from "../../utils/mediaConstants";
import { InTouchBtn } from "../../components/InTouchBtn";

export const Header = ({ burgerMenuHandler, screen }) => {
  return (
    <header>
      <div className="container header-container">
        {/* <a href="#" className="header-link">
          {<Logo />}ecosolution{" "}
          <p className="header-span">GREENERGY FOR LIFE</p>
        </a> */}
        <LogoText />
        <MenuBtn burgerMenuHandler={burgerMenuHandler} />
        {screen === breakpoints.wTablet || screen === breakpoints.wDesktop ? (
          <InTouchBtn />
        ) : null}
      </div>
    </header>
  );
};
