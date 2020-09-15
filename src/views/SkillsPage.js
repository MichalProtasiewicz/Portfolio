import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const SkillsPage = () => (
  <PageTemplate>
    <PageWrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>My skills</StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
    </PageWrapper>
  </PageTemplate>
);

export default SkillsPage;
