import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input.js';
import Button from '../../common/Button.js';
import { colors, typography, spacing } from '../../../styles/tokens.js';
import { Link } from 'react-router-dom';

const Title = styled.h2`
  margin-bottom: 8px;
  color: ${colors.black};
  font-weight: 600;
  font-size: 24px;
  text-align: center;
`;

const Subtitle = styled.p`
  color: ${colors.black};
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: normal;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ProgressContainer = styled.div`
  margin-bottom: 24px;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  position: relative;
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
  margin: 8px 0 0 0;
`;

const ButtonContainer = styled.div`
  margin-top: 24px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  
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

const GoogleButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #333;
  
  &:hover {
    background-color: #f8f8f8;
  }
`;

const GoogleIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;

const LoginContainer = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 14px;
`;

const LoginLink = styled(Link)`
  color: #ec4899;
  text-decoration: none;
  margin-left: 5px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Step1 = ({ formData, updateFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Nombre es requerido';
    if (!formData.email) {
      newErrors.email = 'Correo electrónico es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Correo electrónico no es válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };
  
  return (
    <>
      <Title>Regístrate</Title>
      <Subtitle>¡Sé parte de SomosLocales!</Subtitle>
      
      <ProgressContainer>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <StepText>Paso 1/3</StepText>
      </ProgressContainer>
      
      <Form onSubmit={handleSubmit}>
        <Input
          label="Nombre completo"
          name="name"
          type="text"
          placeholder="Escribe tu nombre completo"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        
        <Input
          label="Correo electrónico"
          name="email"
          type="email"
          placeholder="Escribe tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        
        <ButtonContainer>
          <Button type="submit" fullWidth>
            Siguiente
          </Button>
        </ButtonContainer>
      </Form>
      
      <Divider>
        <span>o</span>
      </Divider>
      
      <GoogleButton type="button">
        <GoogleIcon src="/assets/social-icon.svg" alt="Google" />
        Continuar con Google
      </GoogleButton>
      
      <LoginContainer>
        ¿Ya tienes una cuenta? <LoginLink to="/login">Inicia sesión</LoginLink>
      </LoginContainer>
    </>
  );
};

export default Step1;
