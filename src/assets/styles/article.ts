import styled from "styled-components";
import media from "./media";

const Article = styled.article`
  max-width: 75em;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  word-break: break-word;

  & > h1 {
    font-size: 2rem;
  }

  ${media.tablet} {
    max-width: 100vw;
  }
`;

export default Article;
