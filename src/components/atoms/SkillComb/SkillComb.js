import styled from 'styled-components';

const SkillComb = styled.div`
  position: absolute;
  width: 34.64px;
  height: 60px;
  color: ${({ theme }) => theme.gray50};
  background: ${({ theme }) => theme.gray20};
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    width: 0;
    left: -17.32px;
    top: 30;
    border-right: 17.32px solid ${({ theme }) => theme.gray20};
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
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
`;

export default SkillComb;
