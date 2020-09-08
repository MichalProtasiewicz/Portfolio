import styled from 'styled-components';

const CodeText = styled.span`
  font-family: 'Architects Daughter', cursive;
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.gray25};
`;

export default CodeText;
