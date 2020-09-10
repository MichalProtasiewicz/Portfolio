import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'components/molecules/Logo/Logo'

const StyledHeading = styled(Heading)`
  padding-left: 10px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.blue};
`;

const HeaderWrapping = styled.div`
  position: fixed;
  top: 45%;
  @media (min-width: 750px) {
    top: 35%;
  }
  @media (min-width: 950px) {
    top: 35%;
  }
`;

const MainPage = () => (
  <PageTemplate>
    <>
    <Logo/>
    <HeaderWrapping>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>
        Hello,
        <br /> I&apos;m <StyledSpan>Michał</StyledSpan>,<br /> frontend developer.
      </StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
    </HeaderWrapping>
    </>
  </PageTemplate>
);
export default MainPage;



