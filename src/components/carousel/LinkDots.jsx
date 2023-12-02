import { casesGallery } from "../../sections/production/ProductionSection";

export const LinkDots = (onClickHandler, isSelected, index, label) => {

  if (isSelected) {
    return (
      <li
        // style={{ ...indicatorStyles, background: '#000' }}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
        ><span className="dots-text active">{casesGallery[index].name} </span></li>
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
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    ><span className="dots-text">{casesGallery[index].name}</span></li>
  );
};
