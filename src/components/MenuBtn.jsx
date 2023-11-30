import { Bars } from "../images/bars";

export const MenuBtn = ({burgerMenuBtnHandler}) => {
  return (
    <button type="button" className="menu-btn" onClick={burgerMenuBtnHandler}>
      <Bars/>
    </button>
  );
};
