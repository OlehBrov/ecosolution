import { ReactComponent as Email } from "../../images/sms.svg";

export const EmailLink = ({ showlabel = true }) => {
  return (
    <div className="contact-wrap email-contact">
      {showlabel && <p className="contacts-name">Email:</p>}
      <address className="address-data address-email">
        <a
          href="mailto:office@ecosolution.com"
          className="contacts-contact-link"
        >
         {showlabel && <Email /> }office@ecosolution.com
        </a>
      </address>
    </div>
  );
};
