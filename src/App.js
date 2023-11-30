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

  return (
    <>
      <Header />
      <HeroSection />
      <IntroductionSection />
      <ValuesSection currentScreen={currentScreen} />
      <ProductionSection />
      <Cases />
      <FaqSection />
      <CustomersSection currentScreen={currentScreen} />
      <ContactUsSection />
      <ContactForm />
      <Footer/>
    </>
  );
}

export default App;
