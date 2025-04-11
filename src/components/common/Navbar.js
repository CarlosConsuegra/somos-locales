import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, typography, spacing } from '../../styles/tokens.js';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #262623;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 40px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const LoginButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const RegisterButton = styled(Link)`
  background-color: ${colors.primary};
  color: #262623;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">
        <img src="/assets/recurso-6-3-x-1@3x.png" alt="Somos Locales" />
      </Logo>
      
      <NavLinks>
        <NavLink to="/features">Características</NavLink>
        <NavLink to="/pricing">Precios</NavLink>
        <NavLink to="/about">Nosotros</NavLink>
      </NavLinks>
      
      <AuthButtons>
        <LoginButton to="/login">Iniciar sesión</LoginButton>
        <RegisterButton to="/register">Registrarse</RegisterButton>
      </AuthButtons>
    </NavbarContainer>
  );
};

export default Navbar;
