import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../assets/styles/media";
import { IconContext } from "react-icons";
import { RiExternalLinkLine, RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
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
  & > svg {
    display: none;
  }
`;

const Navigation = styled.nav`
  & > ul {
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${media.tablet} {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 0.7rem;
    background-color: rgb(23, 23, 24);

    & > ul {
      font-size: 1rem;
      width: 20rem;
      display: grid;
      grid-template-columns: 35% 35% 20% 10%;
      grid-template-rows: repeat(4, minmax(2.3rem, auto));

      & * {
        font-family: sans-serif;
      }

      & > li:not(.hamburger-top) {
        grid-column: 1 / -1;
        width: 100%;
        padding: 0.7rem;
        text-align: end;
        border-radius: 0.3rem;
        transition: background-color 0.15s ease-in-out;

        &:hover:not(.hamburger-top) {
          background-color: rgb(47, 48, 49);
        }

        & > a {
          & > .header__link-icon {
            margin-left: 0.2rem;
          }
        }
      }

      & > .github {
        display: flex;
        justify-content: flex-end;
      }

      & > .hamburger-top {
        order: -1;
        grid-column: auto;
        justify-self: normal;

        & > .hamburger-close {
          margin-top: 0.3rem;
        }
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">Changsung</Link>
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
          <li className="hamburger-top github">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/Alpaca92"
            >
              <span>github</span>
              <IconContext.Provider value={{ className: "header__link-icon" }}>
                <RiExternalLinkLine />
              </IconContext.Provider>
            </a>
          </li>
          <li className="hamburger-top">
            {/* 블로그 만들면 주소 입력하기 */}
            <a rel="noopener noreferrer" target="_blank" href="#">
              <span>blog</span>
              <IconContext.Provider value={{ className: "header__link-icon" }}>
                <RiExternalLinkLine />
              </IconContext.Provider>
            </a>
          </li>
          <li className="hamburger-top toggle">
            <Themeswitcher />
          </li>
          <li className="hamburger-top">
            <IconContext.Provider
              value={{ size: "1.4em", className: "hamburger-close" }}
            >
              <RiCloseFill />
            </IconContext.Provider>
          </li>
        </ul>
      </Navigation>
      <IconContext.Provider value={{ size: "1.4em" }}>
        <GiHamburgerMenu />
      </IconContext.Provider>
    </HeaderContainer>
  );
}

export default Header;
