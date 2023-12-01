import { BtnArrow } from "../../components/BtnArrow";
import { LogoText } from "../../components/LogoText";
import { EmailLink } from "../../components/addressLinks/EmailLink";
import { LocaleLink } from "../../components/addressLinks/LocaleLink";
import { SocialsLink } from "../../components/addressLinks/SocialsLink";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-logo-wrap">
          <LogoText />
          <a href="#" className="footer-link">
            {" "}
            <BtnArrow height={16} width={16} />
          </a>
        </div>
        <div className="footer-contacts">
          <SocialsLink showlabel={false} />
          <LocaleLink showlabel={false} />
          <EmailLink showlabel={false} />
              </div>
              <p className="copyright">ecosolution &copy; 2023</p>
      </div>
    </footer>
  );
};
