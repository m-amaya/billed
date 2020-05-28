const breakpoints = {
  phone: 320,
  tablet: 768,
  desktop: 1024,
  hd: 1440,
};

export const mq = {
  phone: `@media (min-width: ${breakpoints.phone}px)`,
  tablet: `@media (min-width: ${breakpoints.tablet}px)`,
  desktop: `@media (min-width: ${breakpoints.desktop}px)`,
  hd: `@media (min-width: ${breakpoints.hd}px)`,
};

export default breakpoints;
