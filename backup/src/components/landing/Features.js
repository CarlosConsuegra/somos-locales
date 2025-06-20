import React from 'react';
import styled from 'styled-components';
import { colors, typography, spacing } from '../../styles/tokens.js';

const FeaturesContainer = styled.section`
  padding: 80px 24px;
  background-color: white;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const Features = () => {
  const features = [
    {
      title: "Crea tu Quiniela",
      description: "Predice los resultados de los partidos y compite contra otros usuarios para demostrar tus conocimientos deportivos.",
      icon: "�"
    },
    {
      title: "Ranking Global",
      description: "Consulta las clasificaciones y compara tu rendimiento con el resto de la comunidad.",
      icon: "�"
    },
    {
      title: "Estadísticas Detalladas",
      description: "Accede a estadísticas detalladas para tomar mejores decisiones en tus predicciones.",
      icon: "�"
    },
    {
      title: "Comunidad Activa",
      description: "Forma parte de una comunidad apasionada por el deporte y comparte tu experiencia.",
      icon: "�"
    },
    {
      title: "Torneos Regulares",
      description: "Participa en torneos regulares y gana premios exclusivos.",
      icon: "�"
    },
    {
      title: "Soporte Multiplataforma",
      description: "Accede desde cualquier dispositivo, en cualquier momento y lugar.",
      icon: "�"
    }
  ];

  return (
    <FeaturesContainer>
      <SectionTitle>Decálogo de La Mejor Plataforma</SectionTitle>
      <SectionSubtitle>
        Descubre todas las características que hacen de Somos Locales la mejor plataforma para los amantes del deporte
      </SectionSubtitle>
      
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features;
