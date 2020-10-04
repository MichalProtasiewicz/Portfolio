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
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: 100%;
    width: -moz-calc(100vw - 67px);
    width: -webkit-calc(100vw - 67px);
    width: -o-calc(100vw - 67px);
    width: calc(100vw - 67px);
  }
`;

const Wrapper = styled.div``;

const AboutPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <Heading>About me</Heading>
      <CodeText>&lt;/h1&gt;</CodeText>
      <Paragraph>
        I have been interested in IT since I was a child, but I have dealt with more professional
        programming since 2015, when I started my studies. I am a young, calm person whose aim is to
        continuous self-educate. As an up-and-coming developer, I am mainly interested in
        programming and technology, however man does not live by programming alone, I also like
        watching TV series, playing games and traveling (mountain hiking in the summer is my
        greatest joy). For some time, I have also been interested in economics, cryptocurrencies and
        stock market analysis. In addition, in my spare time I read books, mainly fantasy.
      </Paragraph>
    </Wrapper>
  </PageWrapper>
);

export default AboutPage;
