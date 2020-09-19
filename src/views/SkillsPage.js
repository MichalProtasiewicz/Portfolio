import React from 'react';
import styled from 'styled-components';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import HoneyComb from 'components/organisms/HoneyComb/HoneyComb';

const PageWrapper = styled.div`
  padding: 13% 7% 13% 7%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    justify-content: center;
    height: 100%;
    width: -moz-calc(100vw - 60px);
    width: -webkit-calc(100vw - 60px);
    width: -o-calc(100vw - 60px);
    width: calc(100vw - 60px);
  }
  @media (min-width: 950px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`;

const Wrapper = styled.div`
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  max-width: 580px;
`;

const SkillsPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <StyledHeading>My skills</StyledHeading>
      <CodeText>&lt;/h1&gt;</CodeText>
      <StyledParagraph>
        Od dziecka interesowałem się programowaniem jednak bardziej profesjonalnym programowaniem
        zająłem się od 2015 roku. Dotychczas największe doświadczenie zdobyłem pracując jako
        freelancer Unity developer, tworząc aplikacje VR i AR. Po poznaniu wielu scieżek IT,
        zdecydowałem się na Frontend. Posiadam również wiedzę z Backendu, więc potrafię stworzyć
        aplikację z bazą danych i responsywnym oraz przyjemnym dla użytkownika interfejsem. (server
        side and client side of the web)
      </StyledParagraph>
    </Wrapper>
    <HoneyComb />
  </PageWrapper>
);

export default SkillsPage;
