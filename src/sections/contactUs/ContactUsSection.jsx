import { PhoneLink } from "../../components/addressLinks/PhoneLink";
import { EmailLink } from "../../components/addressLinks/EmailLink";
import { LocaleLink } from "../../components/addressLinks/LocaleLink";
import { SocialsLink } from "../../components/addressLinks/SocialsLink";
import { ContactForm } from "../contactForm/ContactForm";

export const ContactUsSection = () => {
  return (
    <div id="contact-us-section" className="container contact-us-container">
      <h2 className="section-heading contact-us-heading">Contact us</h2>
      <div className="contacts-grid">
        <div className="address-wrap">
          <PhoneLink />
          <EmailLink />
          <LocaleLink />
          <SocialsLink />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};
