import { ReactComponent as Phone } from "../../images/call.svg";

export const PhoneLink = ({ showlabel = true }) => {
  return (
    <div className="contact-wrap phone-contact">
      {showlabel && <p className="contacts-name">Phone:</p>}
      <address className="address-data address-phone">
        <a href="tel:+380981234567" className="contacts-contact-link" alt="Link to open phone app to call copmany number +380981234567">
          {showlabel && <Phone />}38 (098) 123 45 67
        </a>
        <a href="tel:+380931234567" className="contacts-contact-link" alt="Link to open phone app to call copmany number +380931234567">
          {showlabel && <Phone />}
          38 (093) 123 45 67
        </a>
      </address>
    </div>
  );
};
