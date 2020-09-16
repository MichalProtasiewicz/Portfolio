import React from 'react';
import { storiesOf } from '@storybook/react';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SkillComb from './SkillComb';

storiesOf('Atoms/SkillComb', module)
  .add('Email', () => (
    <SkillComb>
      <EmailOutlinedIcon style={{ fontSize: 50 }} />
    </SkillComb>
  ))
  .add('Github', () => (
    <SkillComb>
      <GitHubIcon style={{ fontSize: 50 }} />
    </SkillComb>
  ))
  .add('Telegram', () => (
    <SkillComb>
      <TelegramIcon style={{ fontSize: 50 }} />
    </SkillComb>
  ))
  .add('LinkedIn', () => (
    <SkillComb>
      <LinkedInIcon style={{ fontSize: 50 }} />
    </SkillComb>
  ));
