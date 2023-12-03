import { Bars } from "../images/bars";

export const MenuBtn = ({burgerMenuHandler}) => {
  return (
    <button type="button" className="menu-btn" onClick={()=>burgerMenuHandler()}>
      <Bars/>
    </button>
  );
};
