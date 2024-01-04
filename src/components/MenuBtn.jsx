import { Bars } from "../images/bars";

export const MenuBtn = ({openMenu}) => {
  return (
    <button type="button" className="menu-btn" onClick={()=>openMenu()} aria-label="Open site menu button">
      <Bars/>
    </button>
  );
};
