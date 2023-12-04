import { BtnArrow } from "./BtnArrow";
import { Facebook} from "./addressLinks/Facebook";
import { Instagram } from "./addressLinks/Instagram";


export const BurgerMenu = ({ burgerMenuHandler }) => {
  return (
    <div className="burger-container">
      <div className="container mobile-burger-menu-container menu-wrapper">
        <div className="burger-menu">
          <button
            className="burger-menu-close-btn burger-menu-item-link"
            type="button"
            onClick={burgerMenuHandler}
          >
            Close
          </button>
          <ul className="burger-menu-list">
            <li className="burger-menu-item">
              <a
                href="#main-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to main section"
              >
                Main <BtnArrow height={16} width={16} color="#fff" />{" "}
              </a>
            </li>
            <li className="burger-menu-item">
              <a
                href="#about-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to section about company"
              >
                About <BtnArrow height={16} width={16} color="#fff" />
              </a>
            </li>
            <li className="burger-menu-item">
              <a
                href="#services-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to section about company services"
              >
                Service <BtnArrow height={16} width={16} color="#fff" />
              </a>
            </li>
            <li className="burger-menu-item">
              <a
                href="#cases-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to section about completed cases"
              >
                Cases <BtnArrow height={16} width={16} color="#fff" />
              </a>
            </li>
            <li className="burger-menu-item">
              <a
                href="#faq-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to frequently asked question section"
              >
                FAQ <BtnArrow height={16} width={16} color="#fff" />
              </a>
            </li>
            <li className="burger-menu-item">
              <a
                href="#customers-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to the list of top company clients"
              >
                Customers <BtnArrow height={16} width={16} color="#fff" />
              </a>
            </li>
            <li className="burger-menu-item">
              <a
                href="#contact-us-section"
                className="burger-menu-item-link"
                onClick={burgerMenuHandler}
                alt="Link to form to send message to company"
              >
                Contact Us
                <BtnArrow height={16} width={16} color="#fff" />
              </a>
            </li>
          </ul>
          <div className="burger-socilals">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={burgerMenuHandler}
              alt="Link to company facebook page"
            >
              <Facebook width="24" height="24" color="#fff" />
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={burgerMenuHandler}
               alt="Link to company instagram page"
            >
              <Instagram width="24" height="24" color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
