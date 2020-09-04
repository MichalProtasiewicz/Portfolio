import React from 'react';
import { storiesOf } from '@storybook/react';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ButtonIcon from './ButtonIcon';

storiesOf('Atoms/ButtonIcon', module)
  .add('About', () => (
    <ButtonIcon>
      <FaceOutlinedIcon style={{ fontSize: 35 }} />
    </ButtonIcon>
  ))
  .add('Skills', () => (
    <ButtonIcon>
      <SchoolOutlinedIcon style={{ fontSize: 35 }} />
    </ButtonIcon>
  ))
  .add('Projects', () => (
    <ButtonIcon>
      <BusinessCenterOutlinedIcon style={{ fontSize: 35 }} />
    </ButtonIcon>
  ))
  .add('Email', () => (
    <ButtonIcon>
      <EmailOutlinedIcon style={{ fontSize: 35 }} />
    </ButtonIcon>
  ))
  .add('Github', () => (
    <ButtonIcon small>
      <GitHubIcon style={{ fontSize: 25 }} />
    </ButtonIcon>
  ))
  .add('Telegram', () => (
  <ButtonIcon small>
    <TelegramIcon style={{ fontSize: 25 }} />
  </ButtonIcon>
))
.add('LinkedIn', () => (
  <ButtonIcon small>
    <LinkedInIcon style={{ fontSize: 25 }} />
  </ButtonIcon>
));
