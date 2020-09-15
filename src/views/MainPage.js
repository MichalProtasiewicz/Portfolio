import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'components/molecules/Logo/Logo';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
  width: 100vw;
  min-height: -moz-calc(100vh - 60px);
  min-height: -webkit-calc(100vh - 60px);
  min-height: -o-calc(100vh - 60px);
  min-height: calc(100vh - 60px);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media (min-width: 750px) {
    padding: 12% 10% 12% 10%;
  }
  @media (min-width: 950px) {
    height: 100%;
    padding: 125px 90px 125px 90px;
    width: -moz-calc(100vw - 60px);
    width: -webkit-calc(100vw - 60px);
    width: -o-calc(100vw - 60px);
    width: calc(100vw - 60px);
  }
  @media (min-width: 1250px) {
    column-gap: 40px;
    grid-template-columns: 0.75fr 0.25fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 0.7fr 0.3fr;
  }
  @media (min-width: 1410px) {
    grid-template-columns: 0.6fr 0.4fr;
  }
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 100px;
  grid-column: 2;
  justify-self: center;
  align-self: center;
  @media (min-width: 900px) {
    width: 125%;
    height: 125%;
    margin-bottom: 0px;
  }

  @media (min-width: 1250px) {
    grid-row: 1;
    grid-column: 2;
    width: 90%;
    height: 90%;
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
);
export default MainPage;
