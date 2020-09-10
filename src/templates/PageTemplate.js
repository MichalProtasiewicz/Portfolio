import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const ChildrenWrapper = styled.div`
  position: relative;
  padding: 13% 7% 15% 7%;

  @media (min-width: 750px) {
    padding: 13% 10% 15% 10%;
  }
  @media (min-width: 950px) {
    padding: 135px 90px 135px 90px;

  }
`;

const PagesTemplate = ({ children }) => {
  return (
    <ContentWrapper>
      <BodyCodeText>&lt;body&gt;</BodyCodeText>
      <CloseBodyCodeText>&lt;/body&gt;</CloseBodyCodeText>
      <HtmlCodeText>&lt;/html&gt;</HtmlCodeText>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </ContentWrapper>
  );
};

PagesTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PagesTemplate;
