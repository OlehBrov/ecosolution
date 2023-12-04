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
  const [menuContainer, setMenuContainer] = useState(null)
  useEffect(() => {
   setMenuContainer(document.querySelector(".burger-container"))
  }, [])
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
  gsap.set(menuContainer, { autoAlpha: 0 });
  const menuTl = gsap.timeline({ paused: true });

  menuTl.to(menuContainer, {
    duration: 1,
    opacity: 1,
    height: "100vh",
    ease: "expo.inOut",
    visibility: "visible",
    zIndex: 15,
  });

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
