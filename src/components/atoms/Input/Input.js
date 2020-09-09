import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 12px;
  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ theme }) => theme.gray20};
  border: 0px;
  color: ${({ theme }) => theme.white};
  outline: none;
  &:focus {
    box-shadow: 0 0 0px 3px ${({ theme }) => theme.blue};
  }
`;

const InputLabel = styled.label`
  top: 11px;
  left: 15px;
  padding: 0 1px 0 1px;
  position: absolute;
  background-color: ${({ theme }) => theme.gray20};
  color: ${({ theme }) => theme.gray50};
  font-size: ${({ theme }) => theme.fontSize.s};
  pointer-events: none;
  transition: 0.2s ease all;
  ${StyledInput}:focus ~ & {
    top: -11px;
    left: 10px;
    background-color: ${({ theme }) => theme.gray20};
    color: ${({ theme }) => theme.lightBlue};
  }
  ${StyledInput}:valid~ & {
    top: -11px;
    left: 10px;
    background-color: ${({ theme }) => theme.gray20};
  }
`;

const ErrorLabel = styled.span`
  position: absolute;
  top: 55px;
  left: 20px;
  color: ${({ theme }) => theme.red};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const Input = ({ children, errorLabelName, ...props }) => {
  return (
    <StyledInputWrapper>
      <StyledInput {...props} required />
      {StyledInput.value === '' ? (
        <InputLabel>{children}</InputLabel>
      ) : (
        <InputLabel active>{children}</InputLabel>
      )}
      {errorLabelName ? (
        <ErrorLabel>
          <p>error</p>
        </ErrorLabel>
      ) : null}
    </StyledInputWrapper>
  );
};

Input.propTypes = {
  children: PropTypes.string,
  errorLabelName: PropTypes.string,
};

Input.defaultProps = {
  children: null,
  errorLabelName: null,
};

export default Input;
