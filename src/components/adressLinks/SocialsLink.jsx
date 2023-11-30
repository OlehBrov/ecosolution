import { ReactComponent as Facebook } from "../../images/facebook.svg";
import { ReactComponent as Instagram } from "../../images/instagram.svg";

export const SocialsLink = ({ showlabel = true }) => {
  return (
    <div className="contact-wrap socials-contact">
     {showlabel && <p className="contacts-name">Social Networks:</p>}

      <address className="adress-socials">
        <a
          href="http://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contacts-contact-link social-link"
        >
          <Facebook />
        </a>

        <a
          href="http://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contacts-contact-link social-link"
        >
          <Instagram />
        </a>
      </address>
    </div>
  );
};
