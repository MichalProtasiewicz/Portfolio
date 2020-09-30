import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routes } from 'routes';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import CodeText from 'components/atoms/CodeText/CodeText';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import SocialButtons from 'components/molecules/SocialButtons/SocialButtons';
import NotificationWrapper from 'components/atoms/NotificationWrapper/NotificationWrapper';

emailjs.init('user_LkTlQVkcnUFqTZ37ltp6T');

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

const StyledHeading = styled(Heading)`
  padding-left: 10px;
`;

const StyledParagraph = styled(Paragraph)`
  width: 95%;
  @media (min-width: 950px) {
    max-width: 600px;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;
`;

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;

  @media (min-width: 950px) {
    max-width: 600px;
  }
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

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Wrong email').required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const ContactPage = () => {
  const [notification, setNotification] = useState(false);

  return (
    <PageWrapper>
      {notification && (
        <NotificationWrapper>Thank you for sending the message!</NotificationWrapper>
      )}
      <Wrapper>
        <CodeText>&lt;h1&gt;</CodeText>
        <StyledHeading>Contact me</StyledHeading>
        <CodeText>&lt;/h1&gt;</CodeText>
        <StyledParagraph>
          You can find me in many places:&nbsp;
          <StyledLink to={routes.github}>Github</StyledLink>,&nbsp;
          <StyledLink to={routes.linkedin}>Linkedin</StyledLink>,&nbsp;
          <StyledLink to={routes.telegram}>Telegram</StyledLink>. <br />
          I am interested in all kind of employment, expecially permament. <br />
          However, if u have other request or question, don’t hestitate to contact me using below
          form either.
        </StyledParagraph>
        <Formik
          initialValues={{ name: '', email: '', subject: '', message: '' }}
          validationSchema={ContactSchema}
          onSubmit={(values, { resetForm }) => {
            emailjs
              .send('001', 'template_2jj9o96', values)
              .then(() => {
                resetForm({ values: '' });
                return setNotification(true);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => {
            return (
              <StyledForm onSubmit={handleSubmit}>
                <InputsWrapper>
                  <Input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    errorLabelName="name"
                  >
                    Name
                  </Input>
                  <Input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    errorLabelName="email"
                  >
                    Email
                  </Input>
                  <SubjectInputWrapper>
                    <Input
                      type="text"
                      name="subject"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subject}
                      errorLabelName="subject"
                    >
                      Subject
                    </Input>
                  </SubjectInputWrapper>
                  <MessageInputWrapper>
                    <Input
                      as="textarea"
                      style={{ resize: 'vertical', minHeight: '125px' }}
                      type="text"
                      name="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      errorLabelName="message"
                    >
                      Message
                    </Input>
                  </MessageInputWrapper>
                </InputsWrapper>
                <StyledButton type="submit">Send</StyledButton>
              </StyledForm>
            );
          }}
        </Formik>
      </Wrapper>
      <SocialButtons />
    </PageWrapper>
  );
};
export default ContactPage;
