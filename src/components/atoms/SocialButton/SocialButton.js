import styled, { css } from 'styled-components';

const SocialButton = styled.button`
  color: ${({ theme }) => theme.gray40};
  position: relative;
  display: block;
  padding: 0;
  width: 75px;
  height: 75px;
  margin: 0 50px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.dirtyWhite};
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
    background: #b1b1b1;
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
    background: #b1b1b1;
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
        background: #db4437;
        &:before {
          background: #e8483a;
        }
        &:after {
          background: #f54c3d;
        }
      `}

    ${({ github }) =>
      github &&
      css`
        background: #000;
        &:before {
          background: #191919;
        }
        &:after {
          background: #2f2f2f;
        }
      `}

  ${({ telegram }) =>
      telegram &&
      css`
        background: #0088cc;
        &:before {
          background: #009be8;
        }
        &:after {
          background: #00a5f7;
        }
      `}

  ${({ linkedin }) =>
      linkedin &&
      css`
        background: #007bb5;
        &:before {
          background: #0186c5;
        }
        &:after {
          background: #038fd2;
        }
      `}
  }

  @media (min-width: 1200px) {
    margin: 30px 50px;
  }
  @media (min-width: 1800px) {
    margin: 0px 50px;
  }
  @media (min-width: 2200px) {
    margin: 0px 75px;
  }
`;

export default SocialButton;
