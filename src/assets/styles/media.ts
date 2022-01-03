const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth / 16}em)`;

const media = {
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
};

export default media;
