import styled from "styled-components";
import media from "./media";

export const Article = styled.article`
  max-width: 75rem;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  word-break: break-all;
  scroll-margin-top: 4.4rem;

  & > h1 {
    font-size: 2rem;
  }

  ${media.tablet} {
    max-width: 100vw;
  }
`;
