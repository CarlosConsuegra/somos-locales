import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 4px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 12px;
  border: 1px solid #d5d7da;
  border-radius: 4px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  width: 100%;
  height: 48px;
  
  &:focus {
    outline: none;
    border-color: #FFD600;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

const Input = ({ label, error, style, ...props }) => {
  return (
    <InputContainer style={style}>
      {label && <Label>{label}</Label>}
      <StyledInput {...props} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;
