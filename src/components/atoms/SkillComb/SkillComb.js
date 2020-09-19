import styled from 'styled-components';

const SkillComb = styled.div`
  position: absolute;
  width: 34.65px;
  height: 60px;
  background: ${({ theme }) => theme.gray20};
  display: flex;
  justify-content: center;
  align-items: center;
  fill: ${({ theme }) => theme.gray50};
  transition: 0.2s ease all;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    left: -17.32px;
    top: 30;
    border-right: 17.32px solid ${({ theme }) => theme.gray20};
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    transition: 0.2s;
    &:hover {
      border-right: 17.32px solid ${({ theme }) => theme.blue};
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    right: -17.32px;
    top: 30;
    width: 0;
    border-left: 17.32px solid ${({ theme }) => theme.gray20};
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    transition: 0.2s;
  }
  &:hover {
    fill: ${({ theme }) => theme.white};
    background: ${({ color }) => color};
    &:before {
      border-right: 17.32px solid ${({ color }) => color};
    }
    &:after {
      border-left: 17.32px solid ${({ color }) => color};
    }
  }

  @media (min-width: 1400px) {
    width: 43.31px;
    height: 75px;
    &:before {
      left: -21.65px;
      top: 37.5;
      border-right: 21.65px solid ${({ theme }) => theme.gray20};
      border-top: 37.5px solid transparent;
      border-bottom: 37.5px solid transparent;
      &:hover {
        border-right: 21.65px solid ${({ theme }) => theme.blue};
      }
    }
    &:after {
      right: -21.65px;
      top: 37.5;
      border-left: 21.65px solid ${({ theme }) => theme.gray20};
      border-top: 37.5px solid transparent;
      border-bottom: 37.5px solid transparent;
    }
    &:hover {
      &:before {
        border-right: 21.65px solid ${({ color }) => color};
      }
      &:after {
        border-left: 21.65px solid ${({ color }) => color};
      }
    }
  }
`;

export default SkillComb;
