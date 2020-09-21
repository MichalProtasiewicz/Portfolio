import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import screenshot from 'assets/screenshots/tmp.jpg';

const GaleryWrapper = styled.div`
  position: absolute;
  height: 90%;
  width: 60%;
  border: 3px solid ${({ theme }) => theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleWrapper = styled.div`
  width: 85%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  height: 70%;
  width: auto;
  max-width: 100%;
`;

const Description = styled.p`
  text-align: center;
`;

const StyledSpan = styled.span`
  position: absolute;
  bottom: -40px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.blue};
`;

const ProjectsGalery = () => (
  <GaleryWrapper>
    <StyledImg src={screenshot} />
    <TitleWrapper>
      <ButtonIcon>
        <GitHubIcon style={{ fontSize: 25 }} />
      </ButtonIcon>
      <p>Project Title</p>
      <ButtonIcon>
        <GitHubIcon style={{ fontSize: 25 }} />
      </ButtonIcon>
    </TitleWrapper>
    <Description>
      Gra platformowa 2D stworzona w silniku Unity. Stworzona w 2018 roku, zamieszczna na platformie
      google play.
    </Description>
    <StyledSpan>.....</StyledSpan>
  </GaleryWrapper>
);

export default ProjectsGalery;
