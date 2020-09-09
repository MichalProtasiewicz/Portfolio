import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
  padding: 0 12px;
  background-color: transparent;
  height: 40px;
  color: ${({ theme }) => theme.blue};
  border: 3px solid ${({ theme }) => theme.blue};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-transform: uppercase;
`;

export default Button;
