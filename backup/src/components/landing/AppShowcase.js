import React from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../../styles/tokens.js';

const ShowcaseContainer = styled.section`
  padding: 80px 24px;
  background-color: ${colors.primary};
`;

const ShowcaseContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ShowcaseText = styled.div`
  flex: 1;
  padding-right: 48px;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 32px;
    text-align: center;
  }
`;

const ShowcaseTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #262623;
`;

const ShowcaseDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #262623;
`;

const AppStoreButtons = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const AppStoreButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #262623;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  
  &:hover {
    opacity: 0.9;
  }
`;

const ShowcaseImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AppShowcase = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseContent>
        <ShowcaseText>
          <ShowcaseTitle>Conoce la plataforma</ShowcaseTitle>
          <ShowcaseDescription>
            Lleva la experiencia de Somos Locales siempre contigo. Nuestra plataforma está disponible en la web y en aplicaciones móviles para que puedas disfrutar en cualquier momento y lugar.
          </ShowcaseDescription>
          <AppStoreButtons>
            <AppStoreButton href="#" target="_blank" rel="noopener noreferrer">
              <span>App Store</span>
            </AppStoreButton>
            <AppStoreButton href="#" target="_blank" rel="noopener noreferrer">
              <span>Google Play</span>
            </AppStoreButton>
          </AppStoreButtons>
        </ShowcaseText>
        <ShowcaseImage>
          <img src="/assets/iniciar_sesion_bg_right.png" alt="Mobile App" />
        </ShowcaseImage>
      </ShowcaseContent>
    </ShowcaseContainer>
  );
};

export default AppShowcase;
