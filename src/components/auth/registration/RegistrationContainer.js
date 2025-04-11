import React, { useState } from 'react';
import styled from 'styled-components';
import Step1 from './Step1.js';
import Step2 from './Step2.js';
import Step3 from './Step3.js';
import Success from './Success.js';
import { colors, spacing } from '../../../styles/tokens.js';

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  padding: ${spacing.xl};
  background-color: white;
`;

const RegistrationContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 data
    name: '',
    email: '',
    
    // Step 2 data
    password: '',
    confirmPassword: '',
    
    // Step 3 data
    gender: 'Femenino',
    birthdate: '',
    phone: ''
  });
  
  const updateFormData = (newData) => {
    setFormData({...formData, ...newData});
  };
  
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <Step1 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <Step2 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 3:
        return (
          <Step3 
            formData={formData} 
            updateFormData={updateFormData} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 4:
        return <Success formData={formData} />;
      default:
        return <Step1 formData={formData} updateFormData={updateFormData} nextStep={nextStep} />;
    }
  };
  
  return (
    <Container>
      {renderStep()}
    </Container>
  );
};

export default RegistrationContainer;
