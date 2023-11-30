import { SocialsLink } from "./adressLinks/SocialsLink";

export const BurgerMenu = ({showMenu}) => {
  return (
    <div className="burger-container">
      <button type="button" onClick={()=>showMenu.reverse()}>Close</button>
      <ul className="burger-menu-list">
        <li className="burger-menu-item">
          <a href="#">Main</a>
        </li>
        <li className="burger-menu-item">
          <a href="#">About</a>
        </li>
        <li className="burger-menu-item">
          <a href="#">Service</a>
        </li>
        <li className="burger-menu-item">
          <a href="#">Cases</a>
        </li>
        <li className="burger-menu-item">
          <a href="#">FAQ</a>
        </li>
        <li className="burger-menu-item">
          <a href="#">Customers</a>
        </li>
        <li className="burger-menu-item">
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <SocialsLink showlabel={false} />
    </div>
  );
};
