import { casesGallery } from "../../sections/production/ProductionSection";

export const LinkDots = (onClickHandler, isSelected, index, label) => {

  if (isSelected) {
    return (
      <li
        // style={{ ...indicatorStyles, background: '#000' }}
        aria-label={`Selected: ${casesGallery[index].tag}`}
        title={`Selected: ${casesGallery[index].tag}`}
        className="dots-item active"
        ><span className="dots-text active">{casesGallery[index].tag} </span></li>
    );
  }
  return (
    <li
      // style={indicatorStyles}
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${casesGallery[index].tag}`}
      aria-label={`${casesGallery[index].tag}`}
      className="dots-item"
    ><span className="dots-text">{casesGallery[index].tag}</span></li>
  );
};
