import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import cartonPhoto from 'assets/cartonPhoto.gif';

const StyledImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0;
  height: 200px;
  width: 300px;
  @media (min-width: 450px) {
    height: 300px;
    width: 450px;
  }
  @media (min-width: 750px) {
    height: 400px;
    width: 600px;
  }
  @media (min-width: 1400px) {
    height: 500px;
    width: 750px;
  }
  @media (min-width: 1700px) {
    height: 600px;
    width: 900px;
  }
`;

const Photo = () => {
  const photo = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { delay: 1.5, ease: 'power1.easeInOut' } });
    tl.fromTo(photo.current.children, { autoAlpha: 0 }, { duration: 2, autoAlpha: 1 });
  }, []);
  return (
    <div ref={photo}>
      <StyledImg src={cartonPhoto} />
    </div>
  );
};
export default Photo;
