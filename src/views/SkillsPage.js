import React from 'react';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import HoneyComb from 'components/organisms/HoneyComb/HoneyComb';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 100%;
  max-width: 580px;
`;

const SkillsPage = () => (
  <PageTemplate>
    <PageWrapper>
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
    </PageWrapper>
    <HoneyComb />
  </PageTemplate>
);

export default SkillsPage;
