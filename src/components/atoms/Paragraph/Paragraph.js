import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.regular};
  @media (min-width: 1400px) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default Paragraph;
