import { LogoText } from "../../components/LogoText";
import { MenuBtn } from "../../components/MenuBtn";

import { breakpoints } from "../../utils/mediaConstants";
import { InTouchBtn } from "../../components/InTouchBtn";
import { BurgerMenu } from "../../components/BurgerMenu";

export const Header = ({ burgerMenuHandler, screen }) => {
  return (
    <header>
      <BurgerMenu burgerMenuHandler={burgerMenuHandler} />
      <div className="container header-container">
        <LogoText />
        <MenuBtn burgerMenuHandler={burgerMenuHandler} />
        {screen === breakpoints.wTablet || screen === breakpoints.wDesktop ? (
          <InTouchBtn />
        ) : null}
      </div>
    </header>
  );
};
