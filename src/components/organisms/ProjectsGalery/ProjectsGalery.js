import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from 'constants/projects';
import CodeIcon from '@material-ui/icons/Code';
import PublicIcon from '@material-ui/icons/Public';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';


const GaleryWrapper = styled.div`
  position: relative;
  justify-self: center;
  align-self: center;
  height: auto;
  width: 100%;
  max-width: 500px;
  top: 50px;
  border: 3px solid ${({ theme }) => theme.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleWrapper = styled.div`
  width: 90%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  max-width: 100%;
`;

const Title = styled.p`
  margin-top: 7px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;

const Description = styled.p`
  text-align: center;
  padding: 0 2%;
`;

const StyledSpan = styled.span`
  position: absolute;
  bottom: -40px;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.blue};
`;

const ProjectsGalery = () => {
  const [projectNumber, setProjectNumber] = useState(0);

  const IncrementProjectNumber = () => {
    if(projectNumber<projects.length-1)
    {
      setProjectNumber(projectNumber+1)
    }
  };
  const DecreaseProjectNumber = () => {
    if (projectNumber > 0) {
      setProjectNumber(projectNumber - 1);
    }
  };
  return (
    <GaleryWrapper>
      <StyledImg src={projects[projectNumber].photo} />
      <TitleWrapper>
        <a target="_blank" rel="noreferrer" href={projects[projectNumber].codeLink}>
          <ButtonIcon>
            <CodeIcon style={{ fontSize: 35 }} />
          </ButtonIcon>
        </a>
        <Title>{projects[projectNumber].title}</Title>
        <a target="_blank" rel="noreferrer" href={projects[projectNumber].liveLink}>
          <ButtonIcon>
            <PublicIcon style={{ fontSize: 35 }} />
          </ButtonIcon>
        </a>
      </TitleWrapper>
      <Description>{projects[projectNumber].description}</Description>
      <ButtonIcon onClick={() => DecreaseProjectNumber()}>
        <ArrowBackIosIcon style={{ fontSize: 35 }} />
      </ButtonIcon>
      <ButtonIcon onClick={() => IncrementProjectNumber()}>
        <ArrowForwardIosIcon style={{ fontSize: 35 }} />
      </ButtonIcon>
      <StyledSpan>.....</StyledSpan>
    </GaleryWrapper>
  );
};

export default ProjectsGalery;
