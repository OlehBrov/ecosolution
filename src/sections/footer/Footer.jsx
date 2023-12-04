import { BtnArrow } from "../../components/BtnArrow";
import { Copyright } from "../../components/Copyright";
import { LogoText } from "../../components/LogoText";
import { EmailLink } from "../../components/addressLinks/EmailLink";
import { LocaleLink } from "../../components/addressLinks/LocaleLink";
import { SocialsLink } from "../../components/addressLinks/SocialsLink";

export const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-grid">
          <LogoText />
          <a href="#main-section" className="footer-link" alt="Link to scroll to top of the page">
            {" "}
            <BtnArrow height={16} width={16} color="#173D33"/>
          </a>
          <SocialsLink showlabel={false} />
          <LocaleLink showlabel={false} />
          <EmailLink showlabel={false} />
          <Copyright />
        </div>  
        {/* <div className="footer-logo-wrap">
          
        </div>
        <div className="footer-contacts">
          
        </div>
        */}
      </div>
    </footer>
  );
};
