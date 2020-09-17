import styled, { css } from 'styled-components';

const SocialButton = styled.button`
  color: ${({ theme }) => theme.gray50};
  position: relative;
  display: block;
  padding: 0;
  width: 75px;
  height: 75px;
  margin: 30px 50px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.gray20};
  transform: rotate(-25deg) skew(25deg) translate(0, 0);
  transition: 0.5s;
  box-shadow: -20px 20px 10px rgba(0, 0, 0, 0.5);

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    height: 100%;
    width: 20px;
    background: #252525;
    transition: 0.5s;
    transform: rotate(0deg) skewY(-45deg);
  }
  &:after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: -10px;
    height: 20px;
    width: 100%;
    background: #292929;
    transition: 0.5s;
    transform: rotate(0deg) skewX(-45deg);
  }
  &:hover {
    color: #fff;
    transform: rotate(-25deg) skew(25deg) translate(20px, -20px);
    box-shadow: -50px 50px 50px rgba(0, 0, 0, 0.5);

    ${({ email }) =>
      email &&
      css`
        background: #d44638;
        &:before {
          background: #a9362b;
        }
        &:after {
          background: #c13d30;
        }
      `}
    ${({ github }) =>
      github &&
      css`
        background: #151515;
        &:before {
          background: #101010;
        }
        &:after {
          background: #121212;
        }
      `}
  ${({ telegram }) =>
      telegram &&
      css`
        background: #0088cc;
        &:before {
          background: #045d8a;
        }
        &:after {
          background: #046a9c;
        }
      `}
  ${({ linkedin }) =>
      linkedin &&
      css`
        background: #0072b1;
        &:before {
          background: #035380;
        }
        &:after {
          background: #005d90;
        }
      `}
  }
  @media (min-width: 1600px) {
    margin: 0px 50px;
  }
  @media (min-width: 1800px) {
    margin: 0px 75px;
  }
`;

export default SocialButton;
