

import { PhoneLink } from "../../components/addressLinks/PhoneLink";
import { EmailLink } from "../../components/addressLinks/EmailLink";
import { LocaleLink } from "../../components/addressLinks/LocaleLink";
import { SocialsLink } from "../../components/addressLinks/SocialsLink";


export const ContactUsSection = () => {
  return (
    <div className="container contact-us-container">
      <h2 className="section-heading">Contact us</h2>
          <div className="address-wrap">
              <PhoneLink />
              <EmailLink />
              <LocaleLink />
              <SocialsLink/>
        
      </div>
    </div>
  );
};
