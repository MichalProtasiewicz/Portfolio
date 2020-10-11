import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import gsap from 'gsap';

const StyledP = styled.p`
  opacity: 0;
  width: 95%;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.regular};
  @media (min-width: 950px) {
    max-width: 600px;
  }
  @media (min-width: 1400px) {
    max-width: 700px;
  }

  ${({ aboutPage }) =>
    aboutPage &&
    css`
      padding-bottom: 150px;
      @media (min-width: 450px) {
        padding-bottom: 200px;
      }
      @media (min-width: 750px) {
        padding-bottom: 250px;
      }
      @media (min-width: 950px) {
        padding-bottom: 150px;
      }
      @media (min-width: 1200px) {
        padding-bottom: 0px;
      }
    `}
`;

const Paragraph = ({ children, aboutPage }) => {
  const paragraph = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1, defaults: { ease: 'power1.easeInOut' } });
    tl.fromTo(paragraph.current, { autoAlpha: 0, x: 50 }, { duration: 1, autoAlpha: 1, x: 0 });
  }, []);
  return (
    <StyledP aboutPage={aboutPage} ref={paragraph}>
      {children}
    </StyledP>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  aboutPage: PropTypes.bool,
};

Paragraph.defaultProps = {
  aboutPage: null,
};

export default Paragraph;
