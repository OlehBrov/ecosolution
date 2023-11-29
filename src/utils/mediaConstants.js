export const breakpoints = {
  wMobile: "360",
  wSemiMobile:"480",
  wTablet: "768",
  wDesktop: "1280",

}

export const devices = {
  mobile: `(min-width: ${breakpoints.wMobile})`,
  semiMobile: `(min-width: ${breakpoints.wSemiMobile})`,
  tablet: `(min-width: ${breakpoints.wTablet})`,
  desktop: `(min-width: ${breakpoints.wDesktop})`,
 
}