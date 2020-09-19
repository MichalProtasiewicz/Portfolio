import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Navbar from 'components/organisms/Navbar/Navbar';
import CodeText from 'components/atoms/CodeText/CodeText';

const ContentWrapper = styled.div`
  padding-top: 60px;
  position: relative;
  min-height: 100vh;
  @media (min-width: 950px) {
    padding-top: 0px;
    padding-left: 60px;
  }
`;

const BodyCodeText = styled(CodeText)`
  position: absolute;
  top: 70px;
  left: 20px;
  @media (min-width: 950px) {
    top: 10px;
    left: 80px;
  }
`;

const CloseBodyCodeText = styled(CodeText)`
  position: absolute;
  bottom: 35px;
  left: 20px;
  @media (min-width: 950px) {
    left: 80px;
  }
`;

const HtmlCodeText = styled(CodeText)`
  position: absolute;
  bottom: 10px;
  left: 5px;
  @media (min-width: 950px) {
    left: 65px;
  }
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <ContentWrapper>
        <BodyCodeText>&lt;body&gt;</BodyCodeText>
        <CloseBodyCodeText>&lt;/body&gt;</CloseBodyCodeText>
        <HtmlCodeText>&lt;/html&gt;</HtmlCodeText>
        {children}
      </ContentWrapper>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
