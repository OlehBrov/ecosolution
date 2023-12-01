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
import { ContactForm } from "./sections/contactForm/ContactForm";
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

  const menuTl = gsap.timeline(
    gsap.timeline({
      paused: true,
      defaults: { duration: 0.3, ease: "power1.inOut" },
    })
  );
  menuTl.fromTo(
    ".burger-container",
    {
      xPercent: 100,
    },
    { xPercent: 0 }
  );

  const burgerMenuHandler = () => {
    console.log("func");
    if (!menuIsOpen) {
      menuTl.play();
      SetMenuIsOpen(true);
    } else {
      menuTl.reverse();
      SetMenuIsOpen(false);
    }
  };
  return (
    <>
      {/* <BurgerMenu burgerMenuHandler={burgerMenuHandler} /> */}
      <Header burgerMenuHandler={burgerMenuHandler} screen={currentScreen} />
      <HeroSection />
      <IntroductionSection />
      <ValuesSection currentScreen={currentScreen} />
      <ProductionSection />
      <Cases currentScreen={currentScreen}/>
      <FaqSection />
      <CustomersSection currentScreen={currentScreen} />
      <ContactUsSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
