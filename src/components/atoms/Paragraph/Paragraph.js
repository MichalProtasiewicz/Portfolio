import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
`;

const Paragraph = ({ children }) => {
  const paragraph = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({defaults: { ease: 'power1.easeInOut' } });
    tl.fromTo(paragraph.current, { autoAlpha: 0, x: 30, y: 10 }, { duration: 1, autoAlpha: 1, x: 0, y: 0 });
  }, []);
  return <StyledP ref={paragraph}>{children}</StyledP>;
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
