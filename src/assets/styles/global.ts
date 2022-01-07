import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
	height: 100%;
	background: radial-gradient(ellipse at bottom, ${(props) =>
    props.theme.bgBottomColor} 0%, ${(props) => props.theme.bgTopColor} 100%);
	overflow: hidden;
  }

  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;
    color: ${(props) => props.theme.textColor};
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
