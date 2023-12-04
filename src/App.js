// import { Link } from 'react-router-dom';
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
import { BurgerMenu } from "./components/BurgerMenu";
import gsap from "gsap";

function App() {
  const [currentScreen, setCurrentScreen] = useState(breakpoints.wMobile);
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
  const [menuIsOpen, SetMenuIsOpen] = useState(false);

  const menuTl = gsap.timeline({ paused: true });

  menuTl.to(".burger-container", {
    duration: 1,
    opacity: 1,
    height: "100vh", // change this to 100vh for full-height menu
    ease: "expo.inOut",
    zIndex: 15,
  });
  // menuTl.from(
  //   ".burger-menu-item",
  //   {
  //     duration: 1,
  //     opacity: 0,
  //     y: 0,
  //     stagger: 0.1,
  //     ease: "expo.inOut",
  //   },
  //   "-=0.5"
  // );
  menuTl.reverse();
  const burgerMenuHandler = () => {
    menuTl.reversed(!menuTl.reversed());
    document.querySelector("body").classList.toggle("prevent-scroll");
  };

  return (
    <>
      
      <Header burgerMenuHandler={burgerMenuHandler} screen={currentScreen} />
      <HeroSection />
      <IntroductionSection currentScreen={currentScreen} />
      <ValuesSection currentScreen={currentScreen} />
      <ProductionSection currentScreen={currentScreen} />
      <Cases currentScreen={currentScreen} />
      <FaqSection />
      <CustomersSection currentScreen={currentScreen} />
      <ContactUsSection />

      <Footer />
    </>
  );
}

export default App;
