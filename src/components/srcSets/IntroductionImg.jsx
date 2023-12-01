import introImgMobile from '../../images/intro/mobile_wind-turbine.jpg';
import introImgTablet from '../../images/intro/tablet_wind-turbine.jpg';
import introImgDesktop from '../../images/intro/desktop_wind-turbine.jpg';

// const introImgMobile = "../../images/intro/mobile_wind-turbine.jpg";
// const introImgTablet = "../../images/intro/tablet_wind-turbine.jpg";
// const introImgDecktop = "../../images/intro/desktop_wind-turbine.jpg";

export const IntroductionImg = () => {
  return (
    <img
      srcSet={`${introImgMobile} 320w, ${introImgTablet} 708w, ${introImgDesktop} 1240w`}
      sizes="(min-width: 1280px) 1242px, (min-width: 768px) 709px, 100vw"
      src={introImgMobile}
          alt="Turbine"
          className='introduction-img'
    />
  );
};
