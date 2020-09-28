import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: -moz-calc(100vw - 7px);
  width: -webkit-calc(100vw - 7px);
  width: -o-calc(100vw - 7px);
  width: calc(100vw - 7px);
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
    justify-content: center;
    height: 100%;
    width: -moz-calc(100vw - 67px);
    width: -webkit-calc(100vw - 67px);
    width: -o-calc(100vw - 67px);
    width: calc(100vw - 67px);
  }
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`;

const Wrapper = styled.div``;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  max-width: 580px;
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const AboutPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>About me</StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
      <StyledParagraph>
        Since I was a child, I have been interested in IT, but I started programming more
        professionally during my studies in 2015. I&apos;m a young, quiet person who&apos;s
        constantly self-educated. As befits a prospective developer, I&apos;m mainly interested in
        programming and technology, but because of the fact that it&apos;s not programming itself
        that people are alive, I still like to watch series, play games and travel (mountain hiking
        in the summer makes me most happy). For some time now I have also been interested in
        economics, cryptocurrencies and stock market analysis. Additionally, in my free time I read
        books, mainly fantasy genre.
      </StyledParagraph>
    </Wrapper>
  </PageWrapper>
);

export default AboutPage;
