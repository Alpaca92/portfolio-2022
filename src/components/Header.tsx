import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../assets/styles/media";

const HeaderContainer = styled.header`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;

  & > a {
    font-family: "Licorice", sans-serif;
    font-weight: 600;
  }

  ${media.tablet} {
    color: #999;
  }
`;

const Navigation = styled.nav``;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">alpaca</Link>
      <Navigation>
        <ul>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/">projects</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
