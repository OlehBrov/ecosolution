import { LogoText } from "../../components/LogoText";
import { MenuBtn } from "../../components/MenuBtn";
import { Logo } from "../../images/logo";

export const Header = () => {
  return (
    <header>
      <div className="container header-container">
        {/* <a href="#" className="header-link">
          {<Logo />}ecosolution{" "}
          <p className="header-span">GREENERGY FOR LIFE</p>
        </a> */}
        <LogoText/>
        <MenuBtn />
      </div>
    </header>
  );
};
