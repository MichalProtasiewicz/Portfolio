import styled from 'styled-components';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.blue};
`;

export default Heading;
