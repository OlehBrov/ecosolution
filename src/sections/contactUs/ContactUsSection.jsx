

import { PhoneLink } from "../../components/adressLinks/PhoneLink";
import { EmailLink } from "../../components/adressLinks/EmailLink";
import { LocaleLink } from "../../components/adressLinks/LocaleLink";
import { SocialsLink } from "../../components/adressLinks/SocialsLink";


export const ContactUsSection = () => {
  return (
    <div className="container contact-us-container">
      <h2 className="section-heading">Contact us</h2>
          <div className="adress-wrap">
              <PhoneLink />
              <EmailLink />
              <LocaleLink />
              <SocialsLink/>
        
      </div>
    </div>
  );
};
