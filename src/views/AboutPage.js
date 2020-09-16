import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  max-width: 580px;
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const AboutPage = () => (
  <PageTemplate>
    <PageWrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>About me</StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
      <StyledParagraph>
        I am young and calm person, who is constantly educating.<br/>
        As befits a well-prospecting developer, I&apos;m mainly interested in programming and technology, but because of that man
        doesn’t live by programming alone, I also like watching TV series, playing games and
        traveling (mountain hiking in summer gives me the greatest joy). <br/>
        From a certain date, I’m also interested in economics, cryptocurrencies and stock market analysis.<br/>
        Additionally, in my spare time, I read books, mostly of the fantasy genre.
      </StyledParagraph>
    </PageWrapper>
  </PageTemplate>
);

export default AboutPage;
