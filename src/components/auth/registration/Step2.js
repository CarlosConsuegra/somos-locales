import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../../common/Input.js';
import Button from '../../common/Button.js';
import { colors, typography, spacing } from '../../../styles/tokens.js';

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
  width: 66.66%;
  background-color: #ec4899;
  border-radius: 2px;
`;

const StepText = styled.p`
  color: #ec4899;
  font-size: 14px;
  margin: 8px 0 0 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
`;

const Step2 = ({ formData, updateFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.password) {
      newErrors.password = 'Contraseña es requerida';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Contraseña debe tener al menos 8 caracteres';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmar contraseña es requerido';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
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
      <Title>¡Crea una contraseña segura!</Title>
      <Subtitle>Usa al menos 8 caracteres, combinando letras, números y símbolos.</Subtitle>
      
      <ProgressContainer>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <StepText>Paso 2/3</StepText>
      </ProgressContainer>
      
      <Form onSubmit={handleSubmit}>
        <Input
          label="Contraseña"
          name="password"
          type="password"
          placeholder="Escribe una contraseña"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        
        <Input
          label="Confirmar contraseña"
          name="confirmPassword"
          type="password"
          placeholder="Confirma la contraseña"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
        />
        
        <ButtonContainer>
          <Button type="submit" fullWidth>
            Siguiente
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Step2;
