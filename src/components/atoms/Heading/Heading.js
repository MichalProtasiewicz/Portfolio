import styled from 'styled-components';

const Heading = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  color: ${({ theme }) => theme.blue};

  @media (min-width: 540px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (min-width: 750px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
  @media (min-width: 950px) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export default Heading;
