import { useState } from "react";
import { BurgerMenu } from "../../components/BurgerMenu";
import { LogoText } from "../../components/LogoText";
import { MenuBtn } from "../../components/MenuBtn";
import { Logo } from "../../images/logo";
import gsap from "gsap";

export const Header = () => {
  const [menuIsOpen, SetMenuIsOpen] = useState(false);

  const showMenu = gsap.timeline({ duration: 2 });
  showMenu.to(".burger-container", { yPercent: 100 });
  const burgerMenuBtnHandler = (e) => {
    console.log("func", e);
    SetMenuIsOpen((prev) => !prev);
    showMenu.play()
  };
  return (
    <header>
      <div className="container header-container">
        {/* <a href="#" className="header-link">
          {<Logo />}ecosolution{" "}
          <p className="header-span">GREENERGY FOR LIFE</p>
        </a> */}
        <LogoText />
        <MenuBtn burgerMenuBtnHandler={burgerMenuBtnHandler} />
        <BurgerMenu showMenu={ showMenu} />
      </div>
    </header>
  );
};
