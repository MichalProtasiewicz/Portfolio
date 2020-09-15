import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import PageTemplate from 'templates/PageTemplate';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import SocialButtons from 'components/molecules/SocialButtons/SocialButtons'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 800px;
`;

const HeadingWrapper = styled.div``;

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 95%;
  max-width: 500px;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
`;

const ContactFormWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 760px;
  padding-top: 20px;
`;

const InputsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px 50px 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  @media (min-width: 530px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50px 50px 1fr;
  }
`;

const SubjectInputWrapper = styled.div`
  grid-column: 1;
  grid-row: 3;
  @media (min-width: 530px) {
    grid-column: 1/3;
    grid-row: 2;
  }
`;

const MessageInputWrapper = styled.div`
  grid-column: 1;
  grid-row: 4;
  @media (min-width: 530px) {
    grid-column: 1/3;
    grid-row: 3;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  margin-right: 20px;
  align-self: flex-end;
`;

const ContactPage = () => (
  <PageTemplate>
    <PageWrapper>
      <HeadingWrapper>
        <CodeText>&lt;h1&gt;</CodeText>
        <StyledHeading>Contact me</StyledHeading>
        <CodeText>&lt;/h1&gt;</CodeText>
      </HeadingWrapper>
      <StyledParagraph>
        You can find me in many places.&nbsp;
        <StyledLink to={routes.github}>Github</StyledLink>,&nbsp;
        <StyledLink to={routes.linkedin}>Linkedin</StyledLink>,&nbsp;
        <StyledLink to={routes.telegram}>Telegram</StyledLink>. <br />
        I am interested in all kind of employment, expecially permament. <br />
        However, if u have other request or question, don’t hestitate to contact me using below form
        either.
      </StyledParagraph>
      <ContactFormWrapper>
        <InputsWrapper>
          <Input>Name</Input>
          <Input>Email</Input>
          <SubjectInputWrapper>
            <Input>Subject</Input>
          </SubjectInputWrapper>
          <MessageInputWrapper>
            <Input as="textarea" style={{ resize: 'vertical', minHeight: '125px' }}>
              Message
            </Input>
          </MessageInputWrapper>
        </InputsWrapper>
        <StyledButton type="submit">Send</StyledButton>
      </ContactFormWrapper>
      </PageWrapper>
      <SocialButtons/>
  </PageTemplate>
);
export default ContactPage;
