import React from 'react';
import styled from 'styled-components';
import SocialButton from 'components/atoms/SocialButton/SocialButton';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const SocialButtonsWrapper = styled.div`
  display: flex;
  height: 100%;
  width: -moz-calc(100vw - 860px);
  width: -webkit-calc(100vw - 860px);
  width: -o-calc(100vw - 860px);
  width: calc(100vw - 860px);
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
  }
  @media (min-width: 1800px) {
    flex-direction: row;
    justify-content: center;

  }
`;

const SocialButtons = () => (
  <SocialButtonsWrapper>
    <SocialButton linkedin>
      <LinkedInIcon style={{ fontSize: 50 }} />
    </SocialButton>
    <SocialButton github>
      <GitHubIcon style={{ fontSize: 50 }} />
    </SocialButton>
    <SocialButton email>
      <EmailOutlinedIcon style={{ fontSize: 50 }} />
    </SocialButton>
    <SocialButton telegram>
      <TelegramIcon style={{ fontSize: 50 }} />
    </SocialButton>
  </SocialButtonsWrapper>
);

export default SocialButtons;
