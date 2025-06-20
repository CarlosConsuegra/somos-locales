import React from 'react';
import styled from 'styled-components';
import { colors, typography, borderRadius, spacing } from '../../styles/tokens.js';

const StyledButton = styled.button`
  background-color: ${props => props.secondary ? '#EFEFEF' : colors.primary};
  color: ${props => props.secondary ? '#333333' : '#000000'};
  border: none;
  border-radius: ${borderRadius.small};
  padding: 12px ${spacing.md};
  font-size: ${typography.button.fontSize};
  font-weight: ${typography.button.fontWeight};
  font-family: ${typography.button.fontFamily};
  cursor: pointer;
  width: ${props => props.fullWidth ? '100%' : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.sm};
  height: 48px;
  position: relative;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
