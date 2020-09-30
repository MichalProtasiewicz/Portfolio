import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const StyledH1 = styled.h1`
  margin: 0;
  padding-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.blue};
  opacity: 0;

  @media (min-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (min-width: 750px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (min-width: 950px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  ${({ mainPage }) =>
    mainPage &&
    css`
      color: ${({ theme }) => theme.white};
      padding-left: 7px;
      color: ${({ theme }) => theme.white};
      @media (max-width: 460px) {
        font-size: ${({ theme }) => theme.fontSize.xm};
      }
      @media (max-width: 360px) {
        font-size: 28px;
      }
    `}
`;

const Heading = ({ children, mainPage }) => {
  const header = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.in' } });
    tl.fromTo(header.current, { autoAlpha: 0 }, { duration: 1, autoAlpha: 1 });
  }, []);
  return (
    <StyledH1 mainPage={mainPage} ref={header}>
      {children}
    </StyledH1>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  mainPage: PropTypes.bool,
};

Heading.defaultProps = {
  mainPage: null,
};

export default Heading;
