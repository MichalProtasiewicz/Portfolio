import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';

import spizarkaImage from 'assets/screenshots/herroOfMorrigan.jpg';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  min-height: -moz-calc(100vh - 60px);
  min-height: -webkit-calc(100vh - 60px);
  min-height: -o-calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  height: -moz-calc(100% - 60px);
  height: -webkit-calc(100% - 60px);
  height: -o-calc(100% - 60px);
  height: calc(100% - 60px);

  @media (min-width: 750px) {
    padding: 12% 10% 12% 10%;
  }
  @media (min-width: 950px) {
    padding: 125px 90px 125px 90px;
  }

  @media (min-width: 950px) {
    justify-content: center;
    height: 100%;
    width: -moz-calc(100vw - 60px);
    width: -webkit-calc(100vw - 60px);
    width: -o-calc(100vw - 60px);
    width: calc(100vw - 60px);
  }
`;

const Wrapper = styled.div``;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const ProjectsPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>My projects</StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
    </Wrapper>
    <ProjectCard
      title="Artificial Inteligence 1"
      description="React + Django aplication to store shopping products and generating shoping list."
      photo={spizarkaImage}
      codeLink="https://github.com/MichalProtasiewicz/Spizarka"
      liveLink="https://spizarkaa.herokuapp.com"
    />
  </PageWrapper>
);

export default ProjectsPage;
