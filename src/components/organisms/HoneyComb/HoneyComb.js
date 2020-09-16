import React from 'react';
import styled, { css } from 'styled-components';
import SkillComb from 'components/atoms/SkillComb/SkillComb';
import GitHubIcon from '@material-ui/icons/GitHub';

const HoneyCombGridWrapper = styled.div`
  position: absolute;
`;

const HoneyCombWrapper = styled.div`
  position: absolute;
  height: 191px;
  width: 180px;
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
      left: 165px;
    `}
  ${({ third }) =>
    third &&
    css`
      top: 0px;
      left: 330px;
    `}
  ${({ fourth }) =>
    fourth &&
    css`
      top: 195px;
      left: 110px;
    `}
  ${({ fifth }) =>
    fifth &&
    css`
      top: 162.5px;
      left: 275px;
    `}
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
  left: 17px;
`;
const SkillComb4 = styled(SkillComb)`
  top: 97.5px;
  left: 17px;
`;
const SkillComb5 = styled(SkillComb)`
  top: 130px;
  left: 72px;
`;
const SkillComb6 = styled(SkillComb)`
  top: 97.5px;
  left: 127px;
`;
const SkillComb7 = styled(SkillComb)`
  top: 32.5px;
  left: 127px;
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
