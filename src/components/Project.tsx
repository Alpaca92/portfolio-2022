import styled from "styled-components";
import { ProjectData } from "../assets/data/projectsData";

const ProjectContainer = styled.li``;
interface ProjectProps {
  project: ProjectData;
}

function Project({ project }: ProjectProps) {
  return (
    <ProjectContainer>
      <img src={project.image} alt={`${project.title}의 이미지`} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul>
        {project.categories.map((category, idx) => (
          <li key={idx}>{category}</li>
        ))}
      </ul>
      <ul>
        <li>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            링크
          </a>
        </li>
        <li>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            깃헙링크
          </a>
        </li>
      </ul>
    </ProjectContainer>
  );
}

export default Project;
