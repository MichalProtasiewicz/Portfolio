import React from 'react';
import styled from 'styled-components';
import { routes } from 'routes';
import SocialButton from 'components/atoms/SocialButton/SocialButton';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialButtonsWrapper = styled.div`
  position: relative;
  left: 50px;
  display: none;
  height: 100%;
  width: -moz-calc(100vw - 860px);
  width: -webkit-calc(100vw - 860px);
  width: -o-calc(100vw - 860px);
  width: calc(100vw - 860px);
  @media (min-width: 950px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
  }
  @media (min-width: 1600px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const SocialButtons = () => (
  <SocialButtonsWrapper>
    <a target="_blank" rel="noreferrer" href={routes.linkedin}>
      <SocialButton linkedin>
        <LinkedInIcon style={{ fontSize: 50 }} />
      </SocialButton>
    </a>
    <a target="_blank" rel="noreferrer" href={routes.github}>
      <SocialButton github>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SocialButton>
    </a>
    <a target="_blank" rel="noreferrer" href={routes.email}>
      <SocialButton email>
        <EmailOutlinedIcon style={{ fontSize: 50 }} />
      </SocialButton>
    </a>
    <a target="_blank" rel="noreferrer" href={routes.telegram}>
      <SocialButton telegram>
        <TelegramIcon style={{ fontSize: 50 }} />
      </SocialButton>
    </a>
  </SocialButtonsWrapper>
);

export default SocialButtons;
