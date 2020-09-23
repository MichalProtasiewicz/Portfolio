import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import CodeIcon from '@material-ui/icons/Code';
import PublicIcon from '@material-ui/icons/Public';

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 375px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.blue};
  text-align: center;
`;

const Photo = styled.img`
  width: 100%;
  height: 170px;
`;

const Description = styled.p`
  height: 80px;
  padding: 0px 10px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  text-align: center;
`;

const CodeLink = styled(ButtonIcon)`
  position: absolute;
  bottom: 5px;
  right: 7px;
`;

const LiveLink = styled(ButtonIcon)`
  position: absolute;
  bottom: 5px;
  left: 7px;
`;

const ProjectCard = ({ title, photo, description, codeLink, liveLink }) => (
  <Wrapper>
    <Title>{title}</Title>
    <Photo src={photo} />
    <Description>{description}</Description>
    <a target="_blank" rel="noreferrer" href={codeLink}>
      <CodeLink>
        <CodeIcon style={{ fontSize: 30 }} />
      </CodeLink>
    </a>
    {liveLink && (
      <a target="_blank" rel="noreferrer" href={liveLink}>
        <LiveLink>
          <PublicIcon style={{ fontSize: 30 }} />
        </LiveLink>
      </a>
    )}
  </Wrapper>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string,
};

ProjectCard.defaultProps ={
  liveLink: null
}

export default ProjectCard;
