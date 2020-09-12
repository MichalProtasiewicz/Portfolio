import styled from 'styled-components';
import logoIcon from 'assets/icons/Logo.svg';

const Logo = styled.svg`
  position: fixed;
  margin: 0px;
  top: 125px;
  right: 25px;
  width: 200px;
  height: 200px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;

  @media (min-width: 460px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 540px) {
    width: 275px;
    height: 275px;
  }
  @media (min-width: 750px) {
    top: 100px;
    width: 300px;
    height: 300px;
  }
  @media (min-width: 950px) {
    width: 325px;
    height: 325px;
  }
  @media (min-width: 1124px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 1250px) {
    top: 20%;
  }
  @media (min-width: 1340px) {
    width: 400px;
    height: 400px;
    right: 5%;
  }
`;

export default Logo;
