import React from 'react';
import styled from 'styled-components';
import Button from '../../common/Button.js';
import { colors, typography, spacing } from '../../../styles/tokens.js';

const Container = styled.div`
  text-align: center;
  padding: ${spacing.xl} 0;
`;

const Title = styled.h2`
  margin-bottom: 24px;
  color: ${colors.black};
  font-weight: 600;
  font-size: 24px;
`;

const IllustrationContainer = styled.div`
  margin-bottom: 24px;
  
  img {
    width: 120px;
    height: auto;
  }
`;

const Message = styled.p`
  color: ${colors.black};
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: ${colors.black};
  margin-bottom: 32px;
  font-size: 16px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 16px;
`;

const SecondaryButton = styled.button`
  background: none;
  border: none;
  color: ${colors.gray};
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  padding: 12px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Success = ({ formData }) => {
  return (
    <Container>
      <Title>¡Excelente!</Title>
      
      <IllustrationContainer>
        <img src="/assets/woman_registration.svg" alt="Celebration" />
      </IllustrationContainer>
      
      <Message>
        Ya eres parte de Somos Locales
      </Message>
      
      <Subtitle>
        Te gustaría recibir notificaciones?
      </Subtitle>
      
      <ButtonContainer>
        <Button fullWidth>
          Permitir
        </Button>
      </ButtonContainer>
      
      <SecondaryButton>
        Tal vez después
      </SecondaryButton>
    </Container>
  );
};

export default Success;
