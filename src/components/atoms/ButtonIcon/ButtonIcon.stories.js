import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import emailIcon from 'assets/icons/email.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.note};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator((story) => <YellowBackground>{story()}</YellowBackground>)
  .add('Email', () => <ButtonIcon icon={emailIcon} />);

