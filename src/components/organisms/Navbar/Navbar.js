import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import logoIcon from 'assets/icons/Logo.svg';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const NavbarWrapper = styled.div`
  width: 100vw;
  height: 60px;
  position: fixed;
  right: 0;
  top: 0;
  display: grid;
  grid-template-rows: 60px;
  grid-template-columns: 60px 1fr;
  background-color: ${({ theme }) => theme.nawbarColor};
  z-index: 1;

  @media (min-width: 530px) {
    grid-template-columns: 60px 1fr 120px;
  }
  @media (min-width: 950px) {
    width: 60px;
    height: 100vh;
    left: 0;
    grid-template-columns: 60px;
    grid-template-rows: 60px 1fr 120px;
  }
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 60px;
  height: 60px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 75%;
  border: none;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  display: flex;
  justify-content: center;

  @media (min-width: 950px) {
    flex-direction: column;
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    button:first-of-type {
      color: ${({ theme }) => theme.blue};
    }
  }
`;

const HomeNavLink = styled(StyledNavLink)`
  display: none;

  @media (min-width: 380px) {
    display: flex;
  }
`;

const SocialList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: none;
  justify-content: center;

  @media (min-width: 530px) {
    display: flex;
  }
  @media (min-width: 950px) {
    flex-direction: column;
  }
`;

const NavbarButtonIcon = styled(ButtonIcon)`
  height: 60px;
  margin: 0 15px 0 15px;

  @media (min-width: 950px) {
    height: 35px;
    margin: 15px 0 15px 12px;
  }
`;
const SocialButtonIcon = styled(ButtonIcon)`
  height: 60px;
  margin: 0 5px 0 5px;

  @media (min-width: 950px) {
    height: 25px;
    margin: 5px 0 5px 17px;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLogoLink to={routes.home} />
      <NavList>
        <HomeNavLink to={routes.home}>
          <NavbarButtonIcon>
            <HomeOutlinedIcon style={{ fontSize: 35 }} />
          </NavbarButtonIcon>
        </HomeNavLink>
        <StyledNavLink to={routes.about}>
          <NavbarButtonIcon>
            <FaceOutlinedIcon style={{ fontSize: 35 }} />
          </NavbarButtonIcon>
        </StyledNavLink>
        <StyledNavLink to={routes.skills}>
          <NavbarButtonIcon>
            <SchoolOutlinedIcon style={{ fontSize: 35 }} />
          </NavbarButtonIcon>
        </StyledNavLink>
        <StyledNavLink to={routes.projects}>
          <NavbarButtonIcon>
            <BusinessCenterOutlinedIcon style={{ fontSize: 35 }} />
          </NavbarButtonIcon>
        </StyledNavLink>
        <StyledNavLink to={routes.contact}>
          <NavbarButtonIcon>
            <EmailOutlinedIcon style={{ fontSize: 35 }} />
          </NavbarButtonIcon>
        </StyledNavLink>
      </NavList>
      <SocialList>
        <a target="_blank" rel="noreferrer" href={routes.linkedin}>
          <SocialButtonIcon small>
            <LinkedInIcon style={{ fontSize: 25 }} />
          </SocialButtonIcon>
        </a>
        <a target="_blank" rel="noreferrer" href={routes.github}>
          <SocialButtonIcon small>
            <GitHubIcon style={{ fontSize: 25 }} />
          </SocialButtonIcon>
        </a>
        <a target="_blank" rel="noreferrer" href={routes.telegram}>
          <SocialButtonIcon small>
            <TelegramIcon style={{ fontSize: 25 }} />
          </SocialButtonIcon>
        </a>
      </SocialList>
    </NavbarWrapper>
  );
};

export default Navbar;
