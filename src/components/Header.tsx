import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  a {
    color: ${(props) => props.theme.textColor};
  }
`;

const Navigation = styled.nav``;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">Changsung</Link>
      <Navigation>
        <ul>
          <li>
            <Link to="/">about</Link>
            <Link to="/">projects</Link>
            <Link to="/">contact</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
