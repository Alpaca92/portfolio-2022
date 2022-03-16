import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";
import { Article } from "../assets/styles/fundamentals";
import Img from "../assets/images/profile-emoji.png";
import media from "../assets/styles/media";

const AboutArticle = styled(Article)`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div {
    & > i {
      font-size: 1.7rem;
      font-weight: 700;
      word-break: break-all;

      & > span {
        font-size: 1rem;
        opacity: 0.8;
      }
    }

    & > p {
      font-size: 1.3rem;

      & > div {
        display: inline;
      }
    }

    & > div {
      display: flex;
      justify-content: center;

      & > a {
        color: ${(props) => props.theme.accentColor};
        width: 7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.8;
        transition: opacity 0.2s ease-in-out;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  & > img {
    width: 18rem;
  }

  ${media.tablet} {
    width: 80%;
    flex-direction: column;

    & > div {
      & > i {
        font-size: 1.5rem;

        & > span {
          font-size: 0.8rem;
        }
      }

      & > p {
        font-size: unset;
      }
    }

    & > img {
      margin-top: 1rem;
      width: 13rem;
    }
  }
`;

function About() {
  return (
    <AboutArticle id="about">
      <div>
        <i>
          compare yourself to who you were yesterday,
          <br />
          not to who someone else is today.
          <br />
          <span>by Dr. Jordan B. Peterson</span>
        </i>
        <p>
          저는{" "}
          <Typewriter
            options={{
              strings: [
                "도전하는",
                "책을 좋아하는",
                "꾸준한",
                "게임을 좋아하는",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          사람입니다.
        </p>
        <div>
          <a
            href="https://ayaan.oopy.io/profile"
            rel="noopener noreferrer"
            target="_blank"
          >
            view more <BiChevronRight />
          </a>
        </div>
      </div>
      <img src={Img} alt="프로필용 이모지" />
    </AboutArticle>
  );
}

export default About;
