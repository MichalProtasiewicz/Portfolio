import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import ProjectsList from 'components/organisms/ProjectsList/ProjectsList';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: -moz-calc(100vw - 7px);
  width: -webkit-calc(100vw - 7px);
  width: -o-calc(100vw - 7px);
  width: calc(100vw - 7px);
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
    justify-content: center;
    height: 100%;
    width: -moz-calc(100vw - 67px);
    width: -webkit-calc(100vw - 67px);
    width: -o-calc(100vw - 67px);
    width: calc(100vw - 67px);
  }
`;

const Wrapper = styled.div``;

const ProjectsPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <Heading>My projects</Heading>
      <CodeText>&lt;/h1&gt;</CodeText>
    </Wrapper>
    <ProjectsList/>
  </PageWrapper>
);

export default ProjectsPage;
