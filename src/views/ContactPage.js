import React from 'react';
import styled from 'styled-components';
import { routes } from 'routes';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ContactForm from 'components/organisms/ContactForm/ContactForm';
import SocialButtons from 'components/molecules/SocialButtons/SocialButtons';

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

const StyledLink = styled.a`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
`;

const ContactPage = () => (
  <PageWrapper>
    <Wrapper>
      <CodeText>&lt;h1&gt;</CodeText>
      <Heading>Contact me</Heading>
      <CodeText>&lt;/h1&gt;</CodeText>
      <Paragraph>
        You can find me in many places:&nbsp;
        <StyledLink target="_blank" rel="noreferrer" href={routes.github}>
          Github
        </StyledLink>
        ,&nbsp;
        <StyledLink target="_blank" rel="noreferrer" href={routes.linkedin}>
          Linkedin
        </StyledLink>
        ,&nbsp;
        <StyledLink target="_blank" rel="noreferrer" href={routes.telegram}>
          Telegram
        </StyledLink>
        . <br />
        I am interested in all kind of employment, expecially permament. <br />
        However, if u have other request or question, don’t hestitate to contact me using below form
        either.
      </Paragraph>
      <ContactForm />
    </Wrapper>
    <SocialButtons />
  </PageWrapper>
);

export default ContactPage;
