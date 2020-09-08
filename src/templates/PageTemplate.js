import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';

const ContentWrapper = styled.div`
  margin-top: 60px;
  position: relative;
  min-height: 100vh;
  @media (min-width: 950px) {
    margin-top: 0px;
    margin-left: 60px;
  }
`;

const ChildrenWrapper = styled.div`
  padding-bottom: 80px;
`;

const BodyCodeText = styled(CodeText)`
  position: absolute;
  top: 10px;
  left: 20px;
`;

const CloseBodyCodeText = styled(CodeText)`
  position: absolute;
  bottom: 35px;
  left: 20px;
`;

const HtmlCodeText = styled(CodeText)`
  position: absolute;
  bottom: 10px;
  left: 5px;
`;

const HeadingWrapper = styled.div`
  padding-top: 220px;
  padding-left: 40px;
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
