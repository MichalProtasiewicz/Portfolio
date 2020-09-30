import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'components/molecules/Logo/Logo';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
  width: -moz-calc(100vw - 7px);
  width: -webkit-calc(100vw - 7px);
  width: -o-calc(100vw - 7px);
  width: calc(100vw - 7px);
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
    width: -moz-calc(100vw - 67px);
    width: -webkit-calc(100vw - 67px);
    width: -o-calc(100vw - 67px);
    width: calc(100vw - 67px);
  }
  @media (min-width: 1250px) {
    column-gap: 40px;
    grid-template-columns: 0.75fr 0.25fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1300px) {
    grid-template-columns: 0.7fr 0.3fr;
    grid-template-rows: 1fr;
  }
  @media (min-width: 1410px) {
    grid-template-columns: 0.6fr 0.4fr;
    grid-template-rows: 1fr;
  }
`;

const HeaderWrapping = styled.div`
  grid-row: 2;
  grid-column: 1/3;
  align-self: center;
  @media (min-width: 1250px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.blue};
`;

const MainPage = () => (
  <PageWrapper>
    <Logo />
    <HeaderWrapping>
      <CodeText>&lt;h1&gt;</CodeText>
      <Heading mainPage>
        Hello,
        <br />
        I&apos;m <StyledSpan>Michał</StyledSpan>,<br /> front end developer.
      </Heading>
      <CodeText>&lt;/h1&gt;</CodeText>
    </HeaderWrapping>
  </PageWrapper>
);

export default MainPage;
