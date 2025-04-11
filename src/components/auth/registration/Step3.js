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
  width: 100%;
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

const Label = styled.label`
  font-size: 14px;
  color: ${colors.black};
  margin-bottom: 8px;
  display: block;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
`;

const CountrySelect = styled.select`
  padding: 12px;
  border: 1px solid var(--input-border);
  border-radius: 4px;
  width: 80px;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
`;

const ButtonContainer = styled.div`
  margin-top: 32px;
`;

const Step3 = ({ formData, updateFormData, nextStep }) => {
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ [name]: value });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.birthdate) newErrors.birthdate = 'Fecha de nacimiento es requerida';
    if (!formData.phone) newErrors.phone = 'Número celular es requerido';
    
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
      <Title>Queremos conocerte</Title>
      <Subtitle>Ayúdanos a saber más de ti</Subtitle>
      
      <ProgressContainer>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <StepText>Paso 3/3</StepText>
      </ProgressContainer>
      
      <Form onSubmit={handleSubmit}>
        <Label>Sexo</Label>
        <RadioGroup>
          <RadioOption>
            <RadioInput 
              type="radio" 
              id="female" 
              name="gender" 
              value="Femenino"
              checked={formData.gender === "Femenino"} 
              onChange={handleChange}
            />
            <label htmlFor="female">Femenino</label>
          </RadioOption>
          
          <RadioOption>
            <RadioInput 
              type="radio" 
              id="male" 
              name="gender" 
              value="Masculino"
              checked={formData.gender === "Masculino"} 
              onChange={handleChange}
            />
            <label htmlFor="male">Masculino</label>
          </RadioOption>
          
          <RadioOption>
            <RadioInput 
              type="radio" 
              id="nonbinary" 
              name="gender" 
              value="No binario"
              checked={formData.gender === "No binario"} 
              onChange={handleChange}
            />
            <label htmlFor="nonbinary">No binario</label>
          </RadioOption>
        </RadioGroup>
        
        <Input
          label="Fecha de nacimiento"
          name="birthdate"
          type="text"
          placeholder="DD-MM-AA"
          value={formData.birthdate}
          onChange={handleChange}
          error={errors.birthdate}
        />
        
        <Label>Número celular</Label>
        <PhoneInputContainer>
          <CountrySelect>
            <option value="MEX">MEX</option>
            <option value="USA">USA</option>
            <option value="ESP">ESP</option>
          </CountrySelect>
          <Input
            name="phone"
            type="tel"
            placeholder="(+52) 55-33-23-45-34"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            style={{ marginBottom: 0, flex: 1 }}
          />
        </PhoneInputContainer>
        
        <ButtonContainer>
          <Button type="submit" fullWidth>
            Siguiente
          </Button>
        </ButtonContainer>
      </Form>
    </>
  );
};

export default Step3;
