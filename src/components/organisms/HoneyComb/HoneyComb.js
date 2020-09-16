import React from 'react';
import styled, { css } from 'styled-components';
import SkillComb from 'components/atoms/SkillComb/SkillComb';
import GitHubIcon from '@material-ui/icons/GitHub';


const HoneyCombGridWrapper = styled.div`
  position: absolute;
`;

const HoneyCombWrapper = styled.div`
  position: absolute;
  height: 320px;
  width: 306px;
  ${({ first }) =>
    first &&
    css`
      top: 110px;
      left: 0px;
    `}
  ${({ second }) =>
    second &&
    css`
      top: 55px;
      left: 285px;
    `}
  ${({ third }) =>
    third &&
    css`
      top: 0px;
      left: 570px;
    `}
  ${({ fourth }) =>
    fourth &&
    css`
      top: 330px;
      left: 190px;
    `}
  ${({ fifth }) =>
    fifth &&
    css`
      top: 275px;
      left: 475px;
    `}
`;

const HoneyComb = () => (
  <HoneyCombGridWrapper>
    <HoneyCombWrapper first>
      <SkillComb style={{ top: '109px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '0px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '219px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
    </HoneyCombWrapper>

    <HoneyCombWrapper second>
      <SkillComb style={{ top: '109px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '0px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '219px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
    </HoneyCombWrapper>

    <HoneyCombWrapper third>
      <SkillComb style={{ top: '109px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '0px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '219px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
    </HoneyCombWrapper>

    <HoneyCombWrapper fourth>
      <SkillComb style={{ top: '109px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '0px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '219px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
    </HoneyCombWrapper>

    <HoneyCombWrapper fifth>
      <SkillComb style={{ top: '109px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '0px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '28px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '219px', left: '123px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '165px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
      <SkillComb style={{ top: '55px', left: '218px' }}>
        <GitHubIcon style={{ fontSize: 50 }} />
      </SkillComb>
    </HoneyCombWrapper>
  </HoneyCombGridWrapper>
);

export default HoneyComb;
