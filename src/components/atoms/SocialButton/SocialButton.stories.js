import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SocialButton from './SocialButton';

storiesOf('Atoms/SocialButton', module)
  .add('Email', () => (
    <SocialButton email>
      <EmailOutlinedIcon style={{ fontSize: 50 }} />
    </SocialButton>
  ))
  .add('Github', () => (
    <SocialButton github>
      <GitHubIcon style={{ fontSize: 50 }} />
    </SocialButton>
  ))
  .add('Telegram', () => (
    <SocialButton telegram>
      <TelegramIcon style={{ fontSize: 50 }} />
    </SocialButton>
  ))
  .add('LinkedIn', () => (
    <SocialButton linkedin>
      <LinkedInIcon style={{ fontSize: 50 }} />
    </SocialButton>
  ));
