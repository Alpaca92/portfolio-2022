import styled from "styled-components";
import { Article } from "../assets/styles/fundamentals";
import { IconContext } from "react-icons";
import { BiMobileVibration } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import media from "../assets/styles/media";

const ContactContainer = styled.ul`
  width: 34rem;
  margin: 0 auto;

  & > li {
    margin-top: 2rem;

    & > a {
      border: 1px solid ${(props) => props.theme.mainColor};
      border-radius: 0.5rem;
      width: 100%;
      height: 8rem;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      &:hover {
        background-color: ${(props) => props.theme.hoverColor};
      }
    }
  }

  ${media.tablet} {
    width: 80%;
  }
`;

function Contact() {
  return (
    <Article id="contact">
      <h1>Contact</h1>
      <p>궁금한 점이 있으시다면 언제든지 연락주세요 📞</p>
      <ContactContainer>
        <li>
          <a href="tel:010-2954-0569">
            <IconContext.Provider
              value={{ size: "2.5rem", className: "contact-icon" }}
            >
              <BiMobileVibration />
            </IconContext.Provider>
            <span>010-2954-0569</span>
          </a>
        </li>
        <li>
          <a href="mailto:be.minimal.o.o9@gmail.com">
            <IconContext.Provider
              value={{ size: "2.5rem", className: "contact-icon" }}
            >
              <AiOutlineMail />
            </IconContext.Provider>
            <span>be.minimal.o.o9@gmail.com</span>
          </a>
        </li>
      </ContactContainer>
    </Article>
  );
}

export default Contact;
