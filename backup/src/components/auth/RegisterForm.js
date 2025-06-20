import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../styles/tokens.js';

const FormContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 4px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-bottom: 16px;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  position: relative;
  margin-bottom: 8px;
`;

const Progress = styled.div`
  position: absolute;
  height: 100%;
  width: 33.33%;
  background-color: #ec4899;
  border-radius: 2px;
`;

const StepText = styled.p`
  color: #ec4899;
  font-size: 14px;
  margin: 0 0 16px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const Button = styled.button`
  background-color: ${colors.primary};
  color: #333;
  border: none;
  border-radius: 4px;
  height: 40px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  
  &:hover {
    opacity: 0.9;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  span {
    padding: 0 10px;
    color: #999;
    font-size: 12px;
  }
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  
  img {
    width: 18px;
    height: 18px;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const LoginPrompt = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 16px;
`;

const LoginLink = styled(Link)`
  color: #ec4899;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const RegisterForm = ({ isEmbedded = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Redirect to full registration page
    window.location.href = '/register';
  };
  
  return (
    <FormContainer>
      <Title>Regístrate</Title>
      <Subtitle>¡Sé parte de SomosLocales!</Subtitle>
      
      <ProgressBar>
        <Progress />
      </ProgressBar>
      <StepText>Paso 1/3</StepText>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Nombre completo</Label>
          <Input 
            id="name"
            name="name"
            type="text"
            placeholder="Escribe tu nombre completo"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="email">Correo electrónico</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            placeholder="Escribe tu correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </InputGroup>
        
        <Button type="submit">Siguiente</Button>
      </Form>
      
      <Divider>
        <span>o</span>
      </Divider>
      
      <GoogleButton type="button">
        <img src="/assets/social-icon.png" alt="Google" />
        Continuar con Google
      </GoogleButton>
      
      <LoginPrompt>
        ¿Ya tienes una cuenta? <LoginLink to="/login">Inicia sesión</LoginLink>
      </LoginPrompt>
    </FormContainer>
  );
};

export default RegisterForm;
