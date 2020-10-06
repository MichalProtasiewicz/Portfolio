import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import SkillComb from 'components/atoms/SkillComb/SkillComb';

import { ReactComponent as HtmlIcon } from 'assets/icons/html5.svg';
import { ReactComponent as CssIcon } from 'assets/icons/css3.svg';
import { ReactComponent as JsIcon } from 'assets/icons/javascript.svg';
import { ReactComponent as ReactIcon } from 'assets/icons/react.svg';
import { ReactComponent as AngularIcon } from 'assets/icons/angular.svg';
import { ReactComponent as VueIcon } from 'assets/icons/vuejs.svg';
import { ReactComponent as NodeJsIcon } from 'assets/icons/nodejs.svg';
import { ReactComponent as ReduxIcon } from 'assets/icons/redux.svg';
import { ReactComponent as StorybookIcon } from 'assets/icons/storybook.svg';
import { ReactComponent as JestIcon } from 'assets/icons/jest.svg';
import { ReactComponent as GraphqlIcon } from 'assets/icons/graphql.svg';
import { ReactComponent as ApolloIcon } from 'assets/icons/apollo.svg';
import { ReactComponent as GatsbyIcon } from 'assets/icons/gatsby.svg';
import { ReactComponent as SassIcon } from 'assets/icons/sass.svg';
import { ReactComponent as PythonIcon } from 'assets/icons/python.svg';
import { ReactComponent as DjangoIcon } from 'assets/icons/django.svg';
import { ReactComponent as MysqlIcon } from 'assets/icons/mysql.svg';
import { ReactComponent as NetIcon } from 'assets/icons/net.svg';
import { ReactComponent as CsharpIcon } from 'assets/icons/c#.svg';
import { ReactComponent as CplusplusIcon } from 'assets/icons/cplusplus.svg';
import { ReactComponent as CIcon } from 'assets/icons/c.svg';
import { ReactComponent as UnityIcon } from 'assets/icons/unity.svg';
import { ReactComponent as VrIcon } from 'assets/icons/vr.svg';
import { ReactComponent as ArIcon } from 'assets/icons/ar.svg';
import { ReactComponent as GsapIcon } from 'assets/icons/gsap.svg';
import { ReactComponent as VSCIcon } from 'assets/icons/visualstudiocode.svg';
import { ReactComponent as VSIcon } from 'assets/icons/visualstudio.svg';
import { ReactComponent as MongoIcon } from 'assets/icons/mongodb.svg';
import { ReactComponent as PhotoshopIcon } from 'assets/icons/photoshop.svg';
import { ReactComponent as GimpIcon } from 'assets/icons/gimp.svg';
import { ReactComponent as AtlassianIcon } from 'assets/icons/atlassian.svg';
import { ReactComponent as GithubIcon } from 'assets/icons/github.svg';
import { ReactComponent as GitIcon } from 'assets/icons/git.svg';
import { ReactComponent as AdobeXdIcon } from 'assets/icons/adobexd.svg';
import { ReactComponent as FigmaIcon } from 'assets/icons/figma.svg';

const HoneyCombGridWrapper = styled.div`
  opacity: 0;
  position: relative;
  top: 50px;
  left: 50%;
  margin-left: -150px;

  @media (max-width: 300px) {
    display: none;
  }

  @media (min-width: 580px) {
    margin-left: -240px;
  }
  @media (min-width: 950px) {
    position: absolute;
    top: 35%;
    left: 70%;
  }
  @media (min-width: 1400px) {
    position: absolute;
    top: 50%;
    left: 75%;
    margin-left: -325px;
    margin-top: -325px;
  }
`;

const HoneyCombWrapper = styled.div`
  position: absolute;
  height: 191px;
  width: 180px;
  margin-bottom: 10px;
  ${({ first }) =>
    first &&
    css`
      top: 0px;
      left: 0px;
    `}
  ${({ second }) =>
    second &&
    css`
      top: 130px;
      left: 114px;
    `}
  ${({ third }) =>
    third &&
    css`
      top: 260px;
      left: 0px;
    `}
  ${({ fourth }) =>
    fourth &&
    css`
      top: 390px;
      left: 114px;
    `}
  ${({ fifth }) =>
    fifth &&
    css`
      top: 520px;
      left: 0px;
    `}
    @media (min-width: 580px) {
    ${({ first }) =>
      first &&
      css`
        top: 65px;
        left: 0px;
      `}
    ${({ second }) =>
      second &&
      css`
        top: 32.5px;
        left: 170px;
      `}
  ${({ third }) =>
      third &&
      css`
        top: 0px;
        left: 340px;
      `}
  ${({ fourth }) =>
      fourth &&
      css`
        top: 196px;
        left: 113px;
      `}
  ${({ fifth }) =>
      fifth &&
      css`
        top: 163px;
        left: 283px;
      `}
  }
  @media (min-width: 950px) {
    ${({ first }) =>
      first &&
      css`
        top: 326px;
        left: 0px;
      `}
    ${({ second }) =>
      second &&
      css`
        top: 293.5px;
        left: 170px;
      `}
  ${({ third }) =>
      third &&
      css`
        top: 326px;
        left: 340px;
      `}
  ${({ fourth }) =>
      fourth &&
      css`
        top: 163px;
        left: 283px;
      `}
  ${({ fifth }) =>
      fifth &&
      css`
        top: 0px;
        left: 340px;
      `}
  }
  @media (min-width: 1400px) {
    height: 240px;
    width: 230px;
    ${({ first }) =>
      first &&
      css`
        top: 412px;
        left: 0px;
      `}
    ${({ second }) =>
      second &&
      css`
        top: 371px;
        left: 212px;
      `}
  ${({ third }) =>
      third &&
      css`
        top: 412px;
        left: 424px;
      `}
  ${({ fourth }) =>
      fourth &&
      css`
        top: 206px;
        left: 353px;
      `}
  ${({ fifth }) =>
      fifth &&
      css`
        top: 0px;
        left: 424px;
      `}
  }
`;

const SkillComb1 = styled(SkillComb)`
  top: 65px;
  left: 72px;
  @media (min-width: 1400px) {
    top: 81.75px;
    left: 92.25px;
  }
`;
const SkillComb2 = styled(SkillComb)`
  top: 0px;
  left: 72px;
  @media (min-width: 1400px) {
    top: 0px;
    left: 92.25px;
  }
`;
const SkillComb3 = styled(SkillComb)`
  top: 32.5px;
  left: 15px;
  @media (min-width: 1400px) {
    top: 41.25px;
    left: 21px;
  }
`;
const SkillComb4 = styled(SkillComb)`
  top: 97.5px;
  left: 15px;
  @media (min-width: 1400px) {
    top: 123.75px;
    left: 21px;
  }
`;
const SkillComb5 = styled(SkillComb)`
  top: 130px;
  left: 72px;
  @media (min-width: 1400px) {
    top: 163.5px;
    left: 92.25px;
  }
`;
const SkillComb6 = styled(SkillComb)`
  top: 97.5px;
  left: 129px;
  @media (min-width: 1400px) {
    top: 123.75px;
    left: 163.5px;
  }
`;
const SkillComb7 = styled(SkillComb)`
  top: 32.5px;
  left: 129px;
  @media (min-width: 1400px) {
    top: 41.25px;
    left: 163.5px;
  }
`;

const HoneyComb = () => {
  const wrapper = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({delay: 1.3 ,defaults: { ease: 'power4.easeOut' } });
    tl.fromTo(
      wrapper.current,
      { autoAlpha: 0},
      { duration: 2, autoAlpha: 1 },
    );
  }, []);
  return (
    <HoneyCombGridWrapper ref={wrapper}>
      <HoneyCombWrapper first>
        <SkillComb1 color="#E34F26">
          <HtmlIcon width={50} height={50} />
        </SkillComb1>
        <SkillComb2 color="#1572B6">
          <CssIcon width={50} height={50} />
        </SkillComb2>
        <SkillComb3 color="#F7DF1E">
          <JsIcon width={50} height={50} />
        </SkillComb3>
        <SkillComb4 color="#61DAFB">
          <ReactIcon width={50} height={50} />
        </SkillComb4>
        <SkillComb5 color="#DD0031">
          <AngularIcon width={50} height={50} />
        </SkillComb5>
        <SkillComb6 color="#4FC08D">
          <VueIcon width={50} height={50} />
        </SkillComb6>
        <SkillComb7 color="#339933">
          <NodeJsIcon width={50} height={50} />
        </SkillComb7>
      </HoneyCombWrapper>

      <HoneyCombWrapper second>
        <SkillComb1 color="#764ABC">
          <ReduxIcon width={50} height={50} />
        </SkillComb1>
        <SkillComb2 color="#FF4785">
          <StorybookIcon width={50} height={50} />
        </SkillComb2>
        <SkillComb3 color="#C21325">
          <JestIcon width={50} height={50} />
        </SkillComb3>
        <SkillComb4 color="#E10098">
          <GraphqlIcon width={50} height={50} />
        </SkillComb4>
        <SkillComb5 color="#311C87">
          <ApolloIcon width={50} height={50} />
        </SkillComb5>
        <SkillComb6 color="#663399">
          <GatsbyIcon width={50} height={50} />
        </SkillComb6>
        <SkillComb7 color="#CC6699">
          <SassIcon width={50} height={50} />
        </SkillComb7>
      </HoneyCombWrapper>

      <HoneyCombWrapper third>
        <SkillComb1 color="#3776AB">
          <PythonIcon width={50} height={50} />
        </SkillComb1>
        <SkillComb2 color="#092E20">
          <DjangoIcon width={50} height={50} />
        </SkillComb2>
        <SkillComb3 color="#4479A1">
          <MysqlIcon width={50} height={50} />
        </SkillComb3>
        <SkillComb4 color="#5C2D91">
          <NetIcon width={50} height={50} />
        </SkillComb4>
        <SkillComb5 color="#239120">
          <CsharpIcon width={50} height={50} />
        </SkillComb5>
        <SkillComb6 color="#00599C">
          <CplusplusIcon width={50} height={50} />
        </SkillComb6>
        <SkillComb7 color="#A8B9CC">
          <CIcon width={50} height={50} />
        </SkillComb7>
      </HoneyCombWrapper>

      <HoneyCombWrapper fourth>
        <SkillComb1 color="#000000">
          <UnityIcon width={50} height={50} />
        </SkillComb1>
        <SkillComb2 color="#0679c1">
          <VrIcon width={50} height={50} />
        </SkillComb2>
        <SkillComb3 color="#c43149">
          <ArIcon width={50} height={50} />
        </SkillComb3>
        <SkillComb4 color="#36eb62">
          <GsapIcon width={50} height={50} />
        </SkillComb4>
        <SkillComb5 color="#007ACC">
          <VSCIcon width={50} height={50} />
        </SkillComb5>
        <SkillComb6 color="#5C2D91">
          <VSIcon width={50} height={50} />
        </SkillComb6>
        <SkillComb7 color="#47A248">
          <MongoIcon width={50} height={50} />
        </SkillComb7>
      </HoneyCombWrapper>

      <HoneyCombWrapper fifth>
        <SkillComb1 color="#31A8FF">
          <PhotoshopIcon width={50} height={50} />
        </SkillComb1>
        <SkillComb2 color="#5C5543">
          <GimpIcon width={50} height={50} />
        </SkillComb2>
        <SkillComb3 color="#0052CC">
          <AtlassianIcon width={50} height={50} />
        </SkillComb3>
        <SkillComb4 color="#181717">
          <GithubIcon width={50} height={50} />
        </SkillComb4>
        <SkillComb5 color="#F05032">
          <GitIcon width={50} height={50} />
        </SkillComb5>
        <SkillComb6 color="#FF26BE">
          <AdobeXdIcon width={50} height={50} />
        </SkillComb6>
        <SkillComb7 color="#F24E1E">
          <FigmaIcon width={50} height={50} />
        </SkillComb7>
      </HoneyCombWrapper>
    </HoneyCombGridWrapper>
  );
};

export default HoneyComb;
