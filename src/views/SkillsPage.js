import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import HoneyComb from 'components/organisms/HoneyComb/HoneyComb';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
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
  }

  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: 100%;
    width: -moz-calc(100vw - 67px);
    width: -webkit-calc(100vw - 67px);
    width: -o-calc(100vw - 67px);
    width: calc(100vw - 67px);
  }
`;

const Wrapper = styled.div`
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  max-width: 580px;
`;

const SkillsPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <Heading>My skills</Heading>
      <CodeText>&lt;/h1&gt;</CodeText>
      <StyledParagraph>
        I have been interested in IT all along and so far I have known many career paths in the
        field. I worked as a Unity developer, mainly creating VR and AR applications. Currently I am
        dealing with Frontend. I also have knowledge of Backend, so I can create an application with
        a database and a responsive, user-friendly interface (server side and client side of the
        web).
      </StyledParagraph>
    </Wrapper>
    <HoneyComb />
  </PageWrapper>
);

export default SkillsPage;
