import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'components/molecules/Logo/Logo';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 1250px) {
    column-gap: 20px;
    grid-template-columns: 0.75fr 0.25fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1410px) {
    grid-template-columns: 0.6fr 0.4fr;
  }
`;

const StyledLogo = styled(Logo)`
  grid-column: 2;
  justify-self: center;
  align-self: center;
  @media (min-width: 900px) {
    width: 125%;
    height: 125%;
  }
  @media (min-width: 1050px) {
    width: 150%;
    height: 150%;
  }
  @media (min-width: 1250px) {
    grid-row: 1;
    grid-column: 2;
    width: 100%;
    height: 100%;
  }
`;

const HeaderWrapping = styled.div`
  grid-column: 1/3;
  @media (min-width: 1250px) {
    grid-column: 1;
    align-self: center;
  }
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 460px) {
    font-size: ${({ theme }) => theme.fontSize.xm};
  }
  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.blue};
`;


const MainPage = () => (
  <PageTemplate>
    <PageWrapper>
      <StyledLogo />
      <HeaderWrapping>
        <CodeText>&lt;h1&gt;</CodeText>
        <StyledHeading>
          Hello,
          <br /> I&apos;m <StyledSpan>Michał</StyledSpan>,<br /> frontend developer.
        </StyledHeading>
        <CodeText>&lt;/h1&gt;</CodeText>
      </HeaderWrapping>
    </PageWrapper>
  </PageTemplate>
);
export default MainPage;
