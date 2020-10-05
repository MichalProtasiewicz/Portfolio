import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import NotificationWrapper from 'components/atoms/NotificationWrapper/NotificationWrapper';

emailjs.init('user_LkTlQVkcnUFqTZ37ltp6T');

const InputWrapper = styled.div`
  opacity: 0;
`;

const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 20px;

  @media (min-width: 950px) {
    max-width: 700px;
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
  opacity: 0;
  grid-column: 1;
  grid-row: 3;
  @media (min-width: 530px) {
    grid-column: 1/3;
    grid-row: 2;
  }
`;

const MessageInputWrapper = styled.div`
  opacity: 0;
  grid-column: 1;
  grid-row: 4;
  @media (min-width: 530px) {
    grid-column: 1/3;
    grid-row: 3;
  }
`;

const StyledButton = styled(Button)`
  opacity:0;
  margin-top: 15px;
  margin-right: 20px;
  align-self: flex-end;
`;

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Wrong email').required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const ContactForm = () => {
  const [notification, setNotification] = useState(false);

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputSubject = useRef(null);
  const inputMessage = useRef(null);
  const button = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: 'power1.easeInOut' } });
    tl.fromTo(inputName.current, { autoAlpha: 0, y: 500 }, { duration: 1, autoAlpha: 1, y: 0 })
      .fromTo(
        inputEmail.current,
        { autoAlpha: 0, y: 500 },
        { duration: 1, autoAlpha: 1, y: 0 },
        '-=0.6',
      )
      .fromTo(
        inputSubject.current,
        { autoAlpha: 0, y: 500 },
        { duration: 1, autoAlpha: 1, y: 0 },
        '-=0.7',
      )
      .fromTo(
        inputMessage.current,
        { autoAlpha: 0, y: 500 },
        { duration: 1, autoAlpha: 1, y: 0 },
        '-=0.8',
      )
      .fromTo(
        button.current,
        { autoAlpha: 0, y: 500 },
        { duration: 1, autoAlpha: 1, y: 0 },
        '-=0.9',
      );
  }, []);
  return (
    <>
      {notification && (
        <NotificationWrapper>Thank you for sending the message!</NotificationWrapper>
      )}
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
                <InputWrapper ref={inputName}>
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
                </InputWrapper>
                <InputWrapper ref={inputEmail}>
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
                </InputWrapper>
                <SubjectInputWrapper ref={inputSubject}>
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
                <MessageInputWrapper ref={inputMessage}>
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
              <StyledButton ref={button} type="submit">Send</StyledButton>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default ContactForm;
