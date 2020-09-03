import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 35px;
  height: 35px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  outline: none;

  &.active {
    background-color: ${({ theme }) => theme.blue};
  }
`;

export default ButtonIcon;
