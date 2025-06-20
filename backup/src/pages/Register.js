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
  text-align: center;
`;

const Subtitle = styled.p`
  color: #262623;
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
`;

// Progress bar components
const ProgressContainer = styled.div`
  margin-bottom: 24px;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  position: relative;
  margin-bottom: 8px;
`;

const ProgressFill = styled.div`
  position: absolute;
  height: 100%;
  width: ${props => `${(props.step / 3) * 100}%`};
  background-color: #ec4899;
  border-radius: 2px;
`;

const StepText = styled.p`
  color: #ec4899;
  font-size: 14px;
  margin: 0;
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

const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: #FFD600;
  color: #262623;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
  
  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: #a8a29e;
  border: none;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  
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

const LoginContainer = styled.div`
  text-align: center;
  font-size: 14px;
`;

const LoginLink = styled(Link)`
  color: #262623;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

// Radio button components for step 3
const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;
`;

const RadioOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

// Phone input group
const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CountrySelect = styled.div`
  position: relative;
  width: 80px;
`;

const CountrySelectButton = styled.button`
  width: 100%;
  height: 48px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #d5d7da;
  border-radius: 4px;
  cursor: pointer;
`;

// Success screen components
const SuccessContainer = styled.div`
  text-align: center;
`;

const SuccessImage = styled.img`
  width: 100px;
  margin-bottom: 24px;
`;

function RegisterPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: 'Femenino',
    birthdate: '',
    phoneCountry: 'MEX',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep(prev => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  const renderStep1 = () => (
    <>
      <Title>Regístrate</Title>
      <Subtitle>¡Sé parte de SomosLocales!</Subtitle>
      
      <ProgressContainer>
        <ProgressBar>
          <ProgressFill step={1} />
        </ProgressBar>
        <StepText>Paso 1/3</StepText>
      </ProgressContainer>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Nombre completo</Label>
          <Input 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe tu nombre completo"
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>Correo electrónico</Label>
          <Input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Escribe tu correo electrónico"
            required
          />
        </InputGroup>
        
        <Button type="submit">Siguiente</Button>
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

  const renderStep2 = () => (
    <>
      <Title>¡Crea una contraseña segura!</Title>
      <Subtitle>Usa al menos 8 caracteres, combinando letras, números y símbolos.</Subtitle>
      
      <ProgressContainer>
        <ProgressBar>
          <ProgressFill step={2} />
        </ProgressBar>
        <StepText>Paso 2/3</StepText>
      </ProgressContainer>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Contraseña</Label>
          <Input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Escribe una contraseña"
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>Confirmar contraseña</Label>
          <Input 
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirma la contraseña"
            required
          />
        </InputGroup>
        
        <Button type="submit">Siguiente</Button>
      </Form>
    </>
  );

  const renderStep3 = () => (
    <>
      <Title>Queremos conocerte</Title>
      <Subtitle>Ayúdanos a saber más de ti</Subtitle>
      
      <ProgressContainer>
        <ProgressBar>
          <ProgressFill step={3} />
        </ProgressBar>
        <StepText>Paso 3/3</StepText>
      </ProgressContainer>
      
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label>Sexo</Label>
          <RadioGroup>
            <RadioOption>
              <RadioInput 
                type="radio"
                name="gender"
                value="Femenino"
                checked={formData.gender === 'Femenino'}
                onChange={handleChange}
              />
              Femenino
            </RadioOption>
            <RadioOption>
              <RadioInput 
                type="radio"
                name="gender"
                value="Masculino"
                checked={formData.gender === 'Masculino'}
                onChange={handleChange}
              />
              Masculino
            </RadioOption>
            <RadioOption>
              <RadioInput 
                type="radio"
                name="gender"
                value="No binario"
                checked={formData.gender === 'No binario'}
                onChange={handleChange}
              />
              No binario
            </RadioOption>
          </RadioGroup>
        </InputGroup>
        
        <InputGroup>
          <Label>Fecha de nacimiento</Label>
          <Input 
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            placeholder="DD-MM-AA"
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label>Número celular</Label>
          <PhoneInputContainer>
            <CountrySelect>
              <CountrySelectButton type="button">
                MEX <span>▼</span>
              </CountrySelectButton>
            </CountrySelect>
            <Input 
              style={{ flex: 1 }}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(+52) 55-33-23-45-34"
              required
            />
          </PhoneInputContainer>
        </InputGroup>
        
        <Button type="submit">Siguiente</Button>
      </Form>
    </>
  );

  const renderStep4 = () => (
    <SuccessContainer>
      <SuccessImage src="/assets/woman_registration.svg" alt="Success" />
      <Title>¡Excelente!</Title>
      <Subtitle style={{ marginBottom: '8px' }}>Ya eres parte de Somos Locales</Subtitle>
      <p style={{ marginBottom: '32px' }}>Te gustaría recibir notificaciones?</p>
      
      <Button type="button">Permitir</Button>
      <SecondaryButton type="button">Tal vez después</SecondaryButton>
    </SuccessContainer>
  );

  return (
    <PageContainer>
      <FormColumn>
        <FormContainer>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
          {step === 4 && renderStep4()}
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

export default RegisterPage;
