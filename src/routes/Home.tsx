import styled from "styled-components";
import Background from "../components/Background";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const ArticleContainer = styled.section`
  & > article + article {
    margin-top: 7rem;
  }
`;

function Home() {
  return (
    <>
      <Background />
      <Header />
      <ArticleContainer>
        <About />
        {/* <Projects /> */}
        <Contact />
      </ArticleContainer>
    </>
  );
}

export default Home;
