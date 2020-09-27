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
        I am young and calm person, who is constantly educating.
        <br />
        As befits a well-prospecting developer, I&apos;m mainly interested in programming and
        technology, but because of that man doesn’t live by programming alone, I also like watching
        TV series, playing games and traveling (mountain hiking in summer gives me the greatest
        joy). <br />
        From a certain date, I’m also interested in economics, cryptocurrencies and stock market
        analysis.
        <br />
        Additionally, in my spare time, I read books, mostly of the fantasy genre.
      </StyledParagraph>
    </Wrapper>
  </PageWrapper>
);

export default AboutPage;
