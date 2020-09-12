import styled from 'styled-components';
import logoIcon from 'assets/icons/Logo.svg';

const Logo = styled.svg`
  min-width: 150px;
  min-height: 150px;
  width: 100%;
  height: 100%;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;
`;

export default Logo;
