import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';

import spizarkaImage from 'assets/screenshots/herroOfMorrigan.jpg';

const Wrapper = styled.div`
  display: flex;
`;

const ProjectsList = () => (
  <Wrapper>
    <ProjectCard
      title="Artificial Inteligence 1"
      description="React + Django aplication to store shopping products and generating shoping list."
      photo={spizarkaImage}
      codeLink="https://github.com/MichalProtasiewicz/Spizarka"
      liveLink="https://spizarkaa.herokuapp.com"
    />
    <ProjectCard
      title="Artificial Inteligence 1"
      description="React + Django aplication to store shopping products and generating shoping list."
      photo={spizarkaImage}
      codeLink="https://github.com/MichalProtasiewicz/Spizarka"
      liveLink="https://spizarkaa.herokuapp.com"
    />
    <ProjectCard
      title="Artificial Inteligence 1"
      description="React + Django aplication to store shopping products and generating shoping list."
      photo={spizarkaImage}
      codeLink="https://github.com/MichalProtasiewicz/Spizarka"
      liveLink="https://spizarkaa.herokuapp.com"
    />
  </Wrapper>
);

ProjectsList.propTypes = {};

ProjectsList.defaultProps = {};

export default ProjectsList;
