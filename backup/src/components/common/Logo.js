import React from 'react';
import styled from 'styled-components';
import { colors, typography } from '../../styles/tokens.js';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

const LogoText = styled.h1`
  font-weight: 700;
  color: var(--somos-locales);
  margin: 0;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoText>SOMOS LOCALES</LogoText>
    </LogoContainer>
  );
};

export default Logo;
