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
  }

  ul {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;

export default GlobalStyle;
