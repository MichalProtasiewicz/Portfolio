import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoIcon } from 'assets/icons/LogoCracks.svg';
import gsap from 'gsap';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  grid-row: 1;
  grid-column: 2;
  justify-self: center;
  align-self: center;

  @media (min-width: 900px) {
    margin-bottom: 0px;
  }
  @media (min-width: 1250px) {
    grid-row: 1;
    grid-column: 2;
    width: 90%;
    height: 90%;
  }
`;

const StyledLogo = styled(LogoIcon)`
  position: absolute;
  min-width: 150px;
  min-height: 150px;
  width: 125%;
  height: 125%;
  right: -25px;
  bottom: -10px;
`;

const Logo = () => {
  const logoWrapper = useRef(null);

  useEffect(() => {
    const [elements] = logoWrapper.current.children;

    const border = elements.getElementById('Border');
    const circle = elements.getElementById('Circle');
    const letterM = elements.getElementById('LetterM');
    const letterP = elements.getElementById('LetterP');
    const cracks = elements.getElementById('Cracks');

    gsap.set([border, circle, letterM, letterP, cracks], {
      autoAlpha: 0,
      scale: 0,
      transformOrigin: '0% 0%',
    });

    const tl = gsap.timeline({ defaults: { ease: 'power4.in' } });

    tl.fromTo(letterM, {}, { duration: 1, scale: 1, autoAlpha: 1 })
      .fromTo(letterP, {}, { duration: 1, scale: 1, autoAlpha: 1 }, '-=0.5')
      .fromTo(circle, {}, { duration: 2, scale: 1, autoAlpha: 1 })
      .fromTo(border, {}, { duration: 2, scale: 1, autoAlpha: 1 }, '-=2')
      .fromTo(cracks, { scale: 1 }, { duration: 0.001, scale: 1, autoAlpha: 1 });
  }, []);
  return (
    <Wrapper ref={logoWrapper}>
      <StyledLogo />
    </Wrapper>
  );
};

export default Logo;
