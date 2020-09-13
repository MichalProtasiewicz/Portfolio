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

const ChildrenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 13% 7% 13% 7%;
  width: 100vw;
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
    height: 100%;
    width: -moz-calc(100vw - 60px);
    width: -webkit-calc(100vw - 60px);
    width: -o-calc(100vw - 60px);
    width: calc(100vw - 60px);
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
  children: PropTypes.node.isRequired,
};

export default PagesTemplate;
