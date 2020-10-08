import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ProjectCard from 'components/molecules/ProjectCard/ProjectCard';
import { projects } from 'constants/projects';

const Wrapper = styled.div`
  margin-top: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  justify-items: center;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 2000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProjectsList = () => {
  const wrapper = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.3, defaults: { ease: 'power4.easeOut' } });
    tl.fromTo(
      wrapper.current.children,
      { autoAlpha: 0, x:50},
      { duration: 2, autoAlpha: 1, x:0, stagger: 0.2 },
    );
  }, []);
  return (
    <Wrapper ref={wrapper}>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </Wrapper>
  );
};

ProjectsList.propTypes = {};

ProjectsList.defaultProps = {};

export default ProjectsList;
