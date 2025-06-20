import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../common/Input.js';
import Button from '../common/Button.js';
import { colors, typography, spacing, borderRadius } from '../../styles/tokens.js';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  padding: ${spacing.xl};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 8px;
  color: ${colors.black};
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${colors.black};
  margin-bottom: 32px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;

const RememberForgotRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 8px;
`;

const RememberMeLabel = styled.label`
  font-size: 14px;
  color: ${colors.black};
`;

const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: ${colors.black};
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${colors.gray};
  }
  
  span {
    padding: 0 10px;
    color: ${colors.gray};
    font-size: 14px;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #EFEFEF;
  color: #333;
  position: relative;
`;

const GoogleIcon = styled.img`
  position: absolute;
  left: 16px;
  width: 18px;
  height: 18px;
`;

const RegisterContainer = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: 14px;
`;

const RegisterLink = styled(Link)`
  color: ${colors.secondary};
  font-weight: 500;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted', { email, password, rememberMe });
  };
  
  return (
    <FormContainer>
      <Title>¡Bienvenido de vuelta!</Title>
      <Subtitle>Inicia sesión para seguir disfrutando de la mejor experiencia.</Subtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input 
          label="Correo electrónico" 
          type="email" 
          placeholder="Escribe tu correo electrónico" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Input 
          label="Contraseña" 
          type="password" 
          placeholder="Escribe tu contraseña" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <RememberForgotRow>
          <RememberMeContainer>
            <RememberMeCheckbox 
              type="checkbox" 
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <RememberMeLabel htmlFor="rememberMe">Recuérdame</RememberMeLabel>
          </RememberMeContainer>
          <ForgotPasswordLink href="#">Olvidaste tu contraseña</ForgotPasswordLink>
        </RememberForgotRow>
        
        <Button type="submit" fullWidth>
          Iniciar sesión
        </Button>
      </Form>
      
      <Divider>
        <span>o</span>
      </Divider>
      
      <GoogleButton secondary fullWidth>
        <GoogleIcon src="/assets/social-icon.svg" alt="Google" />
        Continuar con Google
      </GoogleButton>
      
      <RegisterContainer>
        ¿Aún no tienes una cuenta? <RegisterLink to="/register">Regístrate aquí</RegisterLink>
      </RegisterContainer>
    </FormContainer>
  );
};

export default LoginForm;
