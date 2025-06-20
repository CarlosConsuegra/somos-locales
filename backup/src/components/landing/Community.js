import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/tokens.js';

const CommunityContainer = styled.section`
  padding: 60px 24px;
  background-color: #262623;
  background-image: url('/assets/frame-42731898.png');
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const CommunityContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoContainer = styled.div``;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${colors.primary};
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const FormContainer = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    border-color: ${colors.primary};
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${colors.primary};
  color: #262623;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    opacity: 0.9;
  }
`;

const TermsText = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
`;

const Community = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Community form submitted:', email);
    // Handle form submission
    setEmail('');
  };
  
  return (
    <CommunityContainer>
      <CommunityContent>
        <InfoContainer>
          <Title>Únete a la comunidad</Title>
          <Description>
            Interactúa con otros aficionados, comparte tus experiencias en las tribunas, y únete a conversaciones emocionantes sobre el deporte que amamos.
          </Description>
        </InfoContainer>
        
        <FormContainer>
          <Form onSubmit={handleSubmit}>
            <Input 
              type="email" 
              placeholder="Escribe tu correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">Regístrame</Button>
          </Form>
          <TermsText>
            Al hacer clic en "Registrame", estoy de acuerdo con los Términos y condiciones.
          </TermsText>
        </FormContainer>
      </CommunityContent>
    </CommunityContainer>
  );
};

export default Community;
