import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors, typography, spacing } from '../../styles/tokens.js';

const FooterContainer = styled.footer`
  background-color: #262623;
  color: white;
  padding: 64px 24px 32px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 48px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.div`
  margin-bottom: 16px;
  
  img {
    height: 40px;
  }
`;

const FooterDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  
  &:hover {
    color: ${colors.primary};
  }
`;

const FooterColumnTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FooterLink = styled(Link)`
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 48px auto 0;
  padding-top: 24px;
  border-top: 1px solid #444444;
  text-align: center;
  font-size: 14px;
  color: #cccccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            <img src="/assets/recurso-6-3-x-1@3x.png" alt="Somos Locales" />
          </FooterLogo>
          <FooterDescription>
            La plataforma l√≠der para los amantes del deporte. Participa en quinielas, compite con tus amigos y demuestra tus conocimientos.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <span>Ì≥±</span>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <span>Ì≥ò</span>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <span>Ì≥∑</span>
            </SocialLink>
            <SocialLink href="#" target="_blank" rel="noopener noreferrer">
              <span>Ì∞¶</span>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterColumnTitle>Plataforma</FooterColumnTitle>
          <FooterLinks>
            <FooterLink to="/features">Caracter√≠sticas</FooterLink>
            <FooterLink to="/pricing">Precios</FooterLink>
            <FooterLink to="/testimonials">Testimonios</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterColumnTitle>Empresa</FooterColumnTitle>
          <FooterLinks>
            <FooterLink to="/about">Sobre nosotros</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Empleo</FooterLink>
            <FooterLink to="/contact">Contacto</FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterColumnTitle>Legal</FooterColumnTitle>
          <FooterLinks>
            <FooterLink to="/terms">T√©rminos de uso</FooterLink>
            <FooterLink to="/privacy">Pol√≠tica de privacidad</FooterLink>
            <FooterLink to="/cookies">Pol√≠tica de cookies</FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        ¬© {new Date().getFullYear()} Somos Locales. Todos los derechos reservados.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
