import React from 'react';
import styled from 'styled-components';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';
import { projects } from 'constants/projects';

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  justify-items: center;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProjectsList = () => (
  <Wrapper>
    {projects.map((project) => (
      <ProjectCard
        title={project.title}
        description={project.description}
        photo={project.photo}
        codeLink={project.codeLink}
        liveLink={project.liveLink}
      />
    ))}
  </Wrapper>
);

ProjectsList.propTypes = {};

ProjectsList.defaultProps = {};

export default ProjectsList;
