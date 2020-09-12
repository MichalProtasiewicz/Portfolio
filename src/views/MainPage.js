import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Logo from 'components/molecules/Logo/Logo';


const HeaderWrapping = styled.div`

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
      <Logo />
      <HeaderWrapping>
        <CodeText>&lt;h1&gt;</CodeText>
        <StyledHeading>
          Hello,
          <br /> I&apos;m <StyledSpan>Michał</StyledSpan>,<br /> frontend developer.
        </StyledHeading>
        <CodeText>&lt;/h1&gt;</CodeText>
      </HeaderWrapping>
  </PageTemplate>
);
export default MainPage;
