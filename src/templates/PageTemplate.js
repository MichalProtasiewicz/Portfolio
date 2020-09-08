import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';

const ContentWrapper = styled.div`
  padding-top: 60px;
  position: relative;
  min-height: 100vh;
`;

const ChildrenWrapper = styled.div`
  padding-bottom: 80px;
`;

const BodyCodeText = styled(CodeText)`
  position: absolute;
  top: 60px;
  left: 30px;
`;

const CloseBodyCodeText = styled(CodeText)`
  position: absolute;
  bottom: 35px;
  left: 30px;
`;

const HtmlCodeText = styled(CodeText)`
  position: absolute;
  bottom: 10px;
  left: 15px;
`;

const HeadingWrapper = styled.div`
`;

const H1CodeText = styled(CodeText)`
`;

const CloseH1CodeText = styled(CodeText)`
`;

const PageTemplate = ({ children, headingName }) => {
  return (
    <ContentWrapper>
      <BodyCodeText>&lt;body&gt;</BodyCodeText>
      <CloseBodyCodeText>&lt;/body&gt;</CloseBodyCodeText>
      <HtmlCodeText>&lt;/html&gt;</HtmlCodeText>
      <HeadingWrapper>
        <H1CodeText>&lt;h1&gt;</H1CodeText>
        <Heading>{headingName}</Heading>
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
