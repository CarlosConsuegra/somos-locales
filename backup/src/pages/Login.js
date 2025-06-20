import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const FormColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  min-width: 50%;
`;

const ImageColumn = styled.div`
  flex: 1;
  background-image: url('/assets/iniciar_sesion_bg_right.png');
  background-size: cover;
  background-position: center;
  position: relative;
  min-width: 50%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

const LogoImage = styled.img`
  width: 240px;
  margin-bottom: 20px;
`;

const Hashtag = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const FormContainer = styled.div`
  max-width: 450px;
  width: 100%;
  padding: 0 40px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #262623;
`;

const Subtitle = styled.p`
  color: #262623;
  font-size: 16px;
  margin-bottom: 32px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 24px;
`;

const Label = styled.label`
  display: block;
  font-size: 15px;
  margin-bottom: 8px;
  color: #262623;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #d5d7da;
  border-radius: 4px;
  font-size: 15px;
  
  &:focus {
    outline: none;
    border-color: #FFD600;
  }
  
  &::placeholder {
    color: #a8a29e;
  }
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

const Checkbox = styled.input`
  margin-right: 8px;
  height: 16px;
  width: 16px;
`;

const ForgotPasswordLink = styled.a`
  color: #262623;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: #262623;
  color: #FFD600;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #d5d7da;
  }
  
  span {
    padding: 0 10px;
    color: #a8a29e;
    font-size: 14px;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #d5d7da;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  position: relative;
  margin-bottom: 24px;
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

const GoogleIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const RegisterContainer = styled.div`
  text-align: center;
  font-size: 14px;
`;

const RegisterLink = styled(Link)`
  color: #ec4899;
  text-decoration: none;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
    // Here you would handle the actual login functionality
  };

  return (
    <PageContainer>
      <FormColumn>
        <FormContainer>
          <Title>¡Bienvenido de vuelta!</Title>
          <Subtitle>Inicia sesión para seguir disfrutando de la mejor experiencia.</Subtitle>
          
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label>Correo electrónico</Label>
              <Input 
                type="email" 
                placeholder="Escribe tu correo electrónico" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            
            <InputGroup>
              <Label>Contraseña</Label>
              <Input 
                type="password" 
                placeholder="Escribe tu contraseña" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>
            
            <RememberForgotRow>
              <RememberMeContainer>
                <Checkbox 
                  type="checkbox" 
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Label htmlFor="rememberMe" style={{ margin: 0 }}>Recuérdame</Label>
              </RememberMeContainer>
              <ForgotPasswordLink href="#">Olvidaste tu contraseña</ForgotPasswordLink>
            </RememberForgotRow>
            
            <Button type="submit">Iniciar sesión</Button>
          </Form>
          
          <Divider>
            <span>o</span>
          </Divider>
          
          <GoogleButton type="button">
            <GoogleIcon src="/assets/social-icon.svg" alt="Google" />
            Continuar con Google
          </GoogleButton>
          
          <RegisterContainer>
            ¿Aún no tienes una cuenta? <RegisterLink to="/register">Regístrate aquí</RegisterLink>
          </RegisterContainer>
        </FormContainer>
      </FormColumn>
      
      <ImageColumn>
        <Logo>
          <LogoImage src="/assets/recurso-6-3-x-1@3x.png" alt="Somos Locales" />
          <Hashtag>#TIENESQUEVIVIRLO</Hashtag>
        </Logo>
      </ImageColumn>
    </PageContainer>
  );
}

export default LoginPage;
