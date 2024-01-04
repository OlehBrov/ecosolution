import { LogoText } from "../../components/LogoText";
import { MenuBtn } from "../../components/MenuBtn";
import { breakpoints } from "../../utils/mediaConstants";
import { InTouchBtn } from "../../components/InTouchBtn";
import { BurgerMenu } from "../../components/BurgerMenu";

export const Header = ({ openMenu, closeMenu, screen }) => {
  return (
    <header>
      <BurgerMenu closeMenu={closeMenu} />
      <div className="container header-container">
        <LogoText />
        <MenuBtn openMenu={openMenu} />
        {screen === breakpoints.wTablet || screen === breakpoints.wDesktop ? (
          <InTouchBtn />
        ) : null}
      </div>
    </header>
  );
};
