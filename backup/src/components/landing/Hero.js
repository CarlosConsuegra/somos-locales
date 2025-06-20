import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, typography, spacing } from '../../styles/tokens.js';

const HeroContainer = styled.section`
  background-color: #262623;
  color: white;
  padding: 120px 24px 80px;
  display: flex;
  position: relative;
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 1.2;
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  margin-bottom: 32px;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const PrimaryButton = styled(Link)`
  background-color: ${colors.primary};
  color: #262623;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 4px;
  
  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryButton = styled(Link)`
  border: 2px solid white;
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Pasión por el Juego</HeroTitle>
        <HeroSubtitle>
          Forma parte de la comunidad de apasionados por el deporte. Participa en quinielas, 
          compite con tus amigos y demuestra tus conocimientos deportivos.
        </HeroSubtitle>
        <ButtonContainer>
          <PrimaryButton to="/register">Comenzar</PrimaryButton>
          <SecondaryButton to="/about">Conocer más</SecondaryButton>
        </ButtonContainer>
      </HeroContent>
      <HeroImage>
        <img src="/assets/iniciar_sesion_bg_right.png" alt="Football" />
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;
