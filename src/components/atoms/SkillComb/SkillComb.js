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

  &:before {
    content: '';
    position: absolute;
    width: 0;
    left: -17.32px;
    top: 30;
    border-right: 17.32px solid ${({ theme }) => theme.gray20};
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
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
`;

export default SkillComb;
