import React from 'react';
import styled, { css } from 'styled-components';
import SkillComb from 'components/atoms/SkillComb/SkillComb';
import GitHubIcon from '@material-ui/icons/GitHub';

const HoneyCombGridWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  margin-left: -150px;
  @media (min-width: 580px) {
    top: 53%;
    margin-left: -240px;
  }
  @media (min-width: 950px) {
    position: absolute;
    top: 35%;
    left: 70%;
  }
`;

const HoneyCombWrapper = styled.div`
  position: absolute;
  height: 191px;
  width: 180px;
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
`;

const SkillComb1 = styled(SkillComb)`
  top: 65px;
  left: 72px;
`;

const SkillComb2 = styled(SkillComb)`
  top: 0px;
  left: 72px;
`;
const SkillComb3 = styled(SkillComb)`
  top: 32.5px;
  left: 15px;
`;
const SkillComb4 = styled(SkillComb)`
  top: 97.5px;
  left: 15px;
`;
const SkillComb5 = styled(SkillComb)`
  top: 130px;
  left: 72px;
`;
const SkillComb6 = styled(SkillComb)`
  top: 97.5px;
  left: 129px;
`;
const SkillComb7 = styled(SkillComb)`
  top: 32.5px;
  left: 129px;
`;

const HoneyComb = () => (
  <HoneyCombGridWrapper>
    <HoneyCombWrapper first>
      <SkillComb1>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb1>
      <SkillComb2>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb2>
      <SkillComb3>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb3>
      <SkillComb4>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb4>
      <SkillComb5>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb5>
      <SkillComb6>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb6>
      <SkillComb7>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb7>
    </HoneyCombWrapper>

    <HoneyCombWrapper second>
      <SkillComb1>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb1>
      <SkillComb2>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb2>
      <SkillComb3>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb3>
      <SkillComb4>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb4>
      <SkillComb5>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb5>
      <SkillComb6>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb6>
      <SkillComb7>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb7>
    </HoneyCombWrapper>

    <HoneyCombWrapper third>
      <SkillComb1>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb1>
      <SkillComb2>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb2>
      <SkillComb3>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb3>
      <SkillComb4>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb4>
      <SkillComb5>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb5>
      <SkillComb6>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb6>
      <SkillComb7>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb7>
    </HoneyCombWrapper>

    <HoneyCombWrapper fourth>
      <SkillComb1>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb1>
      <SkillComb2>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb2>
      <SkillComb3>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb3>
      <SkillComb4>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb4>
      <SkillComb5>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb5>
      <SkillComb6>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb6>
      <SkillComb7>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb7>
    </HoneyCombWrapper>

    <HoneyCombWrapper fifth>
      <SkillComb1>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb1>
      <SkillComb2>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb2>
      <SkillComb3>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb3>
      <SkillComb4>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb4>
      <SkillComb5>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb5>
      <SkillComb6>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb6>
      <SkillComb7>
        <GitHubIcon style={{ fontSize: 30 }} />
      </SkillComb7>
    </HoneyCombWrapper>
  </HoneyCombGridWrapper>
);

export default HoneyComb;
