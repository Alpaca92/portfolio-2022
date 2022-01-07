import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../assets/styles/media";
import { RiExternalLinkLine } from "react-icons/ri";
import Themeswitcher from "./Themeswitcher";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 1.1rem;
  padding: 1rem;

  & > a {
    font-size: 1.8rem;
    font-family: "Licorice", sans-serif;
    font-weight: 600;
  }

  ${media.tablet} {
  }
`;

const Navigation = styled.nav`
  width: 500px;
  display: flex;
  justify-content: flex-end;
`;

const Gnb = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">Changsung</Link>
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
          <li>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Alpaca92"
            >
              <span>github</span>
              <RiExternalLinkLine />
            </a>
          </li>
          <li>
            {/* 블로그 만들면 주소 입력하기 */}
            <a rel="noopener noreferrer" target="_blank" href="#">
              <span>blog</span>
              <RiExternalLinkLine />
            </a>
          </li>
          <li>
            <Themeswitcher />
          </li>
        </Gnb>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
