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

const SpanLetter = styled.span`
  opacity: 0;
  transition: 0.2s ease all;
  &:hover {
    color: ${({ theme, mainPage }) => (mainPage ? theme.blue : theme.white)};
    text-shadow: 3px -3px ${({ theme, mainPage }) => (mainPage ? theme.gray20 : theme.gray20)};
  }
`;

const Heading = ({ children, mainPage }) => {
  const header = useRef(null);

  const splitTextAray = [];
  for (let i = 0; i < children.length; i++) {
    if (typeof children[i] === 'string') {
      splitTextAray.push(...children[i].split(''));
    } else {
      splitTextAray.push(children[i]);
    }
  }

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power1.easeInOut' } });
    tl.to(header.current.children, { duration: 1, autoAlpha: 1, stagger: 0.1 });
  }, []);
  return (
    <StyledH1 mainPage={mainPage} ref={header}>
      {splitTextAray.map((letter, id) => (
        <SpanLetter key={id} mainPage={mainPage}>
          {letter}
        </SpanLetter>
      ))}
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
