import styled from 'styled-components';

const SkillComb = styled.div`
  position: absolute;
  width: 57.74px;
  height: 100px;
  color: ${({ theme }) => theme.gray50};
  background: ${({ theme }) => theme.gray20};
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    left: -28.87px;
    top: 50;
    border-right: 28.87px solid ${({ theme }) => theme.gray20};
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
  }
  &:after {
    content: '';
    position: absolute;
    width: 0;
    right: -28.87px;
    top: 50;
    width: 0;
    border-left: 28.87px solid ${({ theme }) => theme.gray20};
    border-top: 50px solid transparent;
    border-bottom: 50px solid transparent;
  }
`;

export default SkillComb;
