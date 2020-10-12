import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  cursor: pointer;
  display: block;
  padding: 0;
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  background: none;
  transition: 0.2s;
  & {
    color: ${({ theme }) => theme.gray40};
    &:hover {
      color: ${({ theme }) => theme.blue};
    }
  }
  &.active {
    background-color: ${({ theme }) => theme.blue};
  }

  ${({ small }) =>
    small &&
    css`
      width: 25px;
      height: 25px;
    `}
`;

export default ButtonIcon;
