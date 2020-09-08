import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { routes } from 'routes';
import logoIcon from 'assets/icons/Logo.svg';
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
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.nawbarColor};
  z-index: 1;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 60px;
  height: 60px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 90%;
  border: none;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;

const SocialList = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: flex;
  justify-content: space-between;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  margin: 0 10px 0 10px;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLogoLink to={routes.home} />
      <NavList>
        <NavLink to={routes.about}>
          <StyledButtonIcon>
            <FaceOutlinedIcon style={{ fontSize: 35 }} />
          </StyledButtonIcon>
        </NavLink>
        <NavLink to={routes.skills}>
          <StyledButtonIcon>
            <SchoolOutlinedIcon style={{ fontSize: 35 }} />
          </StyledButtonIcon>
        </NavLink>
        <NavLink to={routes.projects}>
          <StyledButtonIcon>
            <BusinessCenterOutlinedIcon style={{ fontSize: 35 }} />
          </StyledButtonIcon>
        </NavLink>
        <NavLink to={routes.contact}>
          <StyledButtonIcon>
            <EmailOutlinedIcon style={{ fontSize: 35 }} />
          </StyledButtonIcon>
        </NavLink>
      </NavList>
      <SocialList>
        <Link to={routes.github}>
          <StyledButtonIcon small>
            <GitHubIcon style={{ fontSize: 25 }} />
          </StyledButtonIcon>
        </Link>
        <Link to={routes.telegram}>
          <StyledButtonIcon small>
            <TelegramIcon style={{ fontSize: 25 }} />
          </StyledButtonIcon>
        </Link>
        <Link to={routes.linkedin}>
          <StyledButtonIcon small>
            <LinkedInIcon style={{ fontSize: 25 }} />
          </StyledButtonIcon>
        </Link>
      </SocialList>
    </NavbarWrapper>
  );
};

export default Navbar;
