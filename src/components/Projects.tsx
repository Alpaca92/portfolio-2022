import projectsData from "../assets/data/projectsData";
import { Article } from "../assets/styles/fundamentals";
import Project from "./Project";
import Button from "./Button";
import { useState } from "react";
import styled from "styled-components";
import media from "../assets/styles/media";

const ProjectsArticle = styled(Article)`
  padding: 0 1rem;
`;

const ProjectsContainer = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, auto));
  grid-gap: 1rem;

  ${media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(18rem, auto));
  }
`;

const allCategories = [
  "All",
  ...Array.from(
    new Set(
      projectsData.reduce((acc: string[], cur) => {
        acc = [...acc, ...cur.categories];

        return acc;
      }, [])
    )
  ),
];

function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [categories] = useState(allCategories);

  const filter = (button: string) => {
    if (button === "All") {
      setProjects(projectsData);
    } else {
      const filteredData = projectsData.filter((projectData) =>
        projectData.categories.includes(button)
      );

      setProjects(filteredData);
    }
  };

  return (
    <ProjectsArticle id="projects">
      <h1>Projects</h1>
      <Button categories={categories} filter={filter} />
      <ProjectsContainer>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </ProjectsArticle>
  );
}

export default Projects;
