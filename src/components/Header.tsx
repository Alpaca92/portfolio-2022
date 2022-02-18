import { Link } from "react-router-dom";
import styled from "styled-components";
import media from "../assets/styles/media";
import { IconContext } from "react-icons";
import { RiExternalLinkLine, RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Themeswitcher from "./Themeswitcher";
import { useEffect, useState } from "react";

const HeaderContainer = styled.header`
  z-index: 999;
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
  background-color: ${(props) => props.theme.headerBgColor};

  & > a {
    font-size: 1.8rem;
    font-family: "Licorice", sans-serif;
    font-weight: 600;
  }

  & > svg {
    display: none;
  }

  ${media.tablet} {
    & > .hamburger-icon {
      display: block;
      cursor: pointer;
    }

    & .active {
      transform: translateX(0em);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const Navigation = styled.nav`
  z-index: 99;

  & > ul {
    width: 30rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .hamburger-close {
    display: none;
  }

  ${media.tablet} {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    padding: 0.7rem;
    background-color: ${(props) => props.theme.hamburgerBgColor};
    transform: translateX(30em);

    & > ul {
      font-size: 1rem;
      width: 20rem;
      display: grid;
      grid-template-columns: 35% 35% 20% 10%;
      grid-template-rows: repeat(4, minmax(2.3rem, auto));

      & * {
        font-family: sans-serif;
      }

      & > li:not(.hamburger-top):first-child {
        margin-top: 1rem;
      }

      & > li:not(.hamburger-top) {
        grid-column: 1 / -1;
        width: 100%;

        text-align: end;
        border-radius: 0.3rem;
        transition: background-color 0.15s ease-in-out;

        &:hover:not(.hamburger-top) {
          background-color: ${(props) => props.theme.hoverColor};
        }

        & > a {
          display: block;
          width: 100%;
          padding: 0.7rem;
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
          display: block;
          margin-top: 0.3rem;
          cursor: pointer;
        }

        & > a {
          & > .header__link-icon {
            margin-left: 0.2rem;
          }
        }
      }
    }
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9;
  opacity: 0.5;
  background-color: black;
`;

function Header() {
  const [hamburgerShow, setHamburgerShow] = useState(false);
  const [windowWidthSize, setWindowWidthSize] = useState(window.innerWidth);
  const headers = ["about", "projects", "contact"];

  const onHamburgerShow = () => {
    setHamburgerShow((cur) => !cur);
  };

  const onResize = () => {
    setWindowWidthSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (hamburgerShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [hamburgerShow]);

  return (
    <HeaderContainer>
      <Backdrop
        style={hamburgerShow ? { display: "block" } : { display: "none" }}
        onClick={windowWidthSize <= 768 ? onHamburgerShow : undefined}
      />
      <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Changsung
      </Link>
      <Navigation className={hamburgerShow ? "active" : ""}>
        <ul>
          {headers.map((header, idx) => (
            <li
              key={idx}
              onClick={windowWidthSize <= 768 ? onHamburgerShow : undefined}
            >
              <a href={`#${header}`}>{header}</a>
            </li>
          ))}
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
          <li className="hamburger-top blog">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://ayaan.oopy.io/"
            >
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
              <RiCloseFill onClick={onHamburgerShow} />
            </IconContext.Provider>
          </li>
        </ul>
      </Navigation>
      <IconContext.Provider
        value={{ size: "1.4em", className: "hamburger-icon" }}
      >
        <GiHamburgerMenu onClick={onHamburgerShow} />
      </IconContext.Provider>
    </HeaderContainer>
  );
}

export default Header;
