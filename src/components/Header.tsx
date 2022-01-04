import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../assets/styles/media";
import { RiExternalLinkLine } from "react-icons/ri";
import Themeswitcher from "./Themeswitcher";

const HeaderContainer = styled.header`
  color: ${(props) => props.theme.textColor};
  font-size: 1.2rem;

  & > a {
    font-family: "Licorice", sans-serif;
    font-weight: 600;
  }

  ${media.tablet} {
  }
`;

const Navigation = styled.nav``;

const Gnb = styled.ul``;

const Lnb = styled.ul``;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">alpaca</Link>
      <Navigation>
        <Gnb>
          <li>
            <Link to="/">about</Link>
          </li>
          <li>
            <Link to="/">projects</Link>
          </li>
          <li>
            <Link to="/">contact</Link>
          </li>
        </Gnb>
      </Navigation>
      <Lnb>
        <li>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Alpaca92"
          >
            github <RiExternalLinkLine />
          </a>
        </li>
        <li>
          <a rel="noopener noreferrer" target="_blank" href="#">
            blog <RiExternalLinkLine />
          </a>
        </li>
        <li>
          <Themeswitcher />
        </li>
      </Lnb>
    </HeaderContainer>
  );
}

export default Header;
