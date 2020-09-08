import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';

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
  padding-bottom: 80px;
  padding-left: 7%;
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

const HeadingWrapper = styled.div`
  padding-top: 13%;
  padding-left: 5%;
`;

const H1CodeText = styled(CodeText)`
`;

const CloseH1CodeText = styled(CodeText)`
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const PageTemplate = ({ children, headingName }) => {
  return (
    <ContentWrapper>
      <BodyCodeText>&lt;body&gt;</BodyCodeText>
      <CloseBodyCodeText>&lt;/body&gt;</CloseBodyCodeText>
      <HtmlCodeText>&lt;/html&gt;</HtmlCodeText>
      <HeadingWrapper>
        <H1CodeText>&lt;h1&gt;</H1CodeText>
        <StyledHeading>{headingName}</StyledHeading>
        <CloseH1CodeText>&lt;/h1&gt;</CloseH1CodeText>
      </HeadingWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </ContentWrapper>
  );
};

PageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  headingName: PropTypes.string,
};

PageTemplate.defaultProps = {
  headingName: '',
};

export default PageTemplate;
