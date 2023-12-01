import { ReactComponent as Local } from "../../images/map.svg";
export const LocaleLink = ({ showlabel = true }) => {
  return (
    <div className="contact-wrap address-contact">
     {showlabel && <p className="contacts-name">Address:</p>}
      <address className="address-data address-map">
        <a
          href="https://maps.app.goo.gl/273JL63UX9UNxkFg9"
          target="_blank"
          rel="noopener noreferrer"
          className="contacts-contact-link"
        >
         {showlabel && <Local /> }79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
      </address>
    </div>
  );
};
