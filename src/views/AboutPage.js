import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';


const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const AboutPage = () => (
  <PageTemplate>
    <>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>About me</StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
    </>
  </PageTemplate>
);

export default AboutPage;
