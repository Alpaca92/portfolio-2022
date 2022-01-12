import styled from "styled-components";
import { FaGlobe, FaGithub } from "react-icons/fa";
import { ProjectData } from "../assets/data/projectsData";

const ProjectContainer = styled.li`
  background-color: ${(props) => props.theme.hamburgerBgColor};
  box-shadow: 0px 1px 4px ${(props) => props.theme.boxShadowColor};
  padding: 1rem;
  border-radius: 1rem;
  word-break: break-all;

  & > img {
    width: 100%;
  }

  & > h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  & > p {
  }
`;

const CategoriesContainer = styled.ul`
  font-family: sans-serif;
  font-size: 0.9rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5.2rem, auto));
  grid-gap: 0.5rem 0.3rem;

  & > li {
    padding: 0.3rem 0;
    color: ${(props) => props.theme.accentColor};
    background-color: ${(props) => props.theme.hoverColor};
    border-radius: 1rem;
  }
`;

const LinkContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;

  & > li {
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;

    & + li {
      margin-left: 1rem;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
interface ProjectProps {
  project: ProjectData;
}

function Project({ project }: ProjectProps) {
  return (
    <ProjectContainer>
      <img src={project.image} alt={`${project.title}의 이미지`} />
      <CategoriesContainer>
        {project.categories.map((category, idx) => (
          <li key={idx}>{category}</li>
        ))}
      </CategoriesContainer>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <LinkContainer>
        <li>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </li>
        <li>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
      </LinkContainer>
    </ProjectContainer>
  );
}

export default Project;
