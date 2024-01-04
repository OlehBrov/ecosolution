import { useEffect, useState } from "react";
import { Header } from "./sections/header/Header";
import { HeroSection } from "./sections/hero/Hero";
import { IntroductionSection } from "./sections/introduction/IntroductionSection";
import { ValuesSection } from "./sections/values/valuesSection";
import { breakpoints } from "./utils/mediaConstants";
import "./styles/App.scss";
import { ProductionSection } from "./sections/production/ProductionSection";
import { Cases } from "./sections/cases/Cases";
import { FaqSection } from "./sections/faq/FaqSection";
import { CustomersSection } from "./sections/ourCustomers/CustomersSection";
import { ContactUsSection } from "./sections/contactUs/ContactUsSection";

import { Footer } from "./sections/footer/Footer";
import gsap from "gsap";

function App() {
  const [currentScreen, setCurrentScreen] = useState(breakpoints.wMobile);
  const [menuContainer, setMenuContainer] = useState(null);

  useEffect(() => {
    setMenuContainer(document.querySelector(".burger-container"));
  
  }, []);
  const screenMatcher = (data) => {
    if (data >= breakpoints.wMobile && data < breakpoints.wSemiMobile) {
      setCurrentScreen(breakpoints.wMobile);
    } else if (data >= breakpoints.wSemiMobile && data < breakpoints.wTablet) {
      setCurrentScreen(breakpoints.wSemiMobile);
    } else if (data >= breakpoints.wTablet && data < breakpoints.wDesktop) {
      setCurrentScreen(breakpoints.wTablet);
    } else if (data >= breakpoints.wDesktop) {
      setCurrentScreen(breakpoints.wDesktop);
    }
  };
  window.addEventListener("resize", (e) =>
    screenMatcher(e.target.screen.width)
  );
  useEffect(() => {
    screenMatcher(window.screen.width);
  }, []);

  menuContainer && gsap.set(menuContainer, { autoAlpha: 0 });
  const menuTl = gsap.timeline({ paused: true });

  menuContainer &&
    menuTl.to(menuContainer, {
      duration: 1,
      opacity: 1,
      height: "100vh",
      ease: "expo.inOut",
      visibility: "visible",
      zIndex: 15,
    });

  // menuTl.reverse();
  const openMenu = () => {
    document.querySelector("body").classList.add("prevent-scroll");
    menuTl.play();
    document.querySelector("body").addEventListener("keydown", closeMenuByEsc);
  };

  const closeMenuByEsc = (e) => {
    if (e.code === "Escape") closeMenu();
  };
  const closeMenu = () => {
    document
      .querySelector("body")
      .removeEventListener("keydown", closeMenuByEsc);
    document.querySelector("body").classList.remove("prevent-scroll");
    menuTl.reverse();
  };

  return (
    <>
      <Header
        openMenu={openMenu}
        closeMenu={closeMenu}
        screen={currentScreen}
      />
      <HeroSection />
      <IntroductionSection currentScreen={currentScreen} />
      <ValuesSection currentScreen={currentScreen} />
      <ProductionSection currentScreen={currentScreen} />
      <Cases currentScreen={currentScreen} />
      <FaqSection />
      <CustomersSection currentScreen={currentScreen} />
      <ContactUsSection currentScreen={currentScreen} />

      <Footer />
    </>
  );
}

export default App;
