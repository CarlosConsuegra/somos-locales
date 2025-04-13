import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for the About Us page
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #262623;
  color: white;
`;

// Header/Navigation - Matching Landing page header exactly
const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 36px 120px;
  box-sizing: border-box;
  max-width: 1366px;
  margin: 0 auto;
`;

const LogoLink = styled.div`
  color: #FFD600;
  font-weight: bold;
  font-size: 50px;
  font-family: 'Poppins', sans-serif;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 32px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled(Link)`
  background-color: #FFD600;
  color: #262623;
  padding: 10px 16px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  display: inline-block;
`;

// Hero Section
const HeroSection = styled.section`
  background-color: #262623;
  padding: 120px 0 60px;
  max-width: 1366px;
  margin: 0 auto;
`;

const HeroContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #FFD600;
`;

const MissionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

const Logo = styled.img`
  height: 60px;
`;

// Decalogue Section
const DecalogueSection = styled.section`
  padding: 60px 0;
  max-width: 1366px;
  margin: 0 auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const DecalogueContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-right: 16px;
`;

const SectionSubtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #FFD600;
  text-transform: uppercase;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const DecalogueItem = styled.div`
  margin-bottom: 32px;
`;

const ItemNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #FFD600;
  margin-bottom: 16px;
`;

const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ItemText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
`;

// Know Us More Section
const KnowMoreSection = styled.section`
  padding: 60px 0;
  max-width: 1366px;
  margin: 0 auto;
`;

const KnowMoreContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

const IllustrationContainer = styled.div`
  margin-top: 40px;
  position: relative;
  height: 400px;
`;

const HandDrawnImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

// Team Section
const TeamSection = styled.section`
  padding: 60px 0;
  background-color: #FFD600;
  max-width: 1366px;
  margin: 0 auto;
  border-radius: 60px 60px 0 0;
`;

const TeamContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TeamMemberPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 24px;
`;

const TeamMemberName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #262623;
`;

const TeamMemberRole = styled.p`
  font-size: 16px;
  color: #262623;
  margin-bottom: 16px;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;

const SocialIcon = styled.a`
  color: #262623;
  text-decoration: none;
  font-size: 18px;
  
  &:hover {
    opacity: 0.8;
  }
`;

// Family Section
const FamilySection = styled.section`
  padding: 60px 0;
  background-color: #FFD600;
  max-width: 1366px;
  margin: 0 auto;
`;

const FamilyContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

const TestimonialsContainer = styled.div`
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 60px 0;
  border-radius: 16px;
  overflow: hidden;
`;

const TestimonialSlider = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: center;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  width: 340px;
  margin: 0 16px;
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TestimonialAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #333;
`;

const TestimonialAuthor = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #262623;
`;

const TestimonialContent = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: #333;
`;

const NavArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #262623;
  cursor: pointer;
  z-index: 2;
  
  &.prev {
    left: 40px;
  }
  
  &.next {
    right: 40px;
  }
`;

// Footer
const Footer = styled.footer`
  background-color: #262623;
  padding: 60px 0 24px;
  max-width: 1366px;
  margin: 0 auto;
`;

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.img`
  height: 50px;
  margin-bottom: 24px;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const FooterSocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const FooterTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: #FFD600;
  margin-bottom: 24px;
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 14px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

function AboutUsPage() {
  const decalogueItems = [
    {
      number: 1,
      title: "Apoyar y alentar",
      text: "Siempre con respeto a los aficionados rivales, a los árbitros, a los niños, los adultos, etc."
    },
    {
      number: 2,
      title: "Respetar",
      text: "a los árbitros, criticas buenas o malas de afición."
    },
    {
      number: 3,
      title: "Respetar",
      text: "siempre a la diversidad y a los grupos vulnerables."
    },
    {
      number: 4,
      title: "Respetar",
      text: "a los estadios y al personal del estadio (vigilantes, intendencia, etc.)."
    },
    {
      number: 5,
      title: "Cuidar",
      text: "Instalaciones Respetar y cuidar los establecimientos del estadio."
    },
    {
      number: 6,
      title: "Recoger",
      text: "basura de mi butaca."
    },
    {
      number: 7,
      title: "Disfrutar",
      text: "siempre de los niños y niñas."
    },
    {
      number: 8,
      title: "El estadio",
      text: "es 100% libre de humo."
    },
    {
      number: 9,
      title: "Actitud al tope",
      text: "Alentar y apoyar en el partido."
    },
    {
      number: 10,
      title: "Controlar la pasión",
      text: "Llevar al deporte a un nivel neutro. Que no sea pretexto para hooligan."
    }
  ];
  
  const teamMembers = [
    {
      name: "Karla H. Valdez",
      role: "CEO & Fundadora",
      photo: "/assets/image-lummi-avatar.png",
      socials: ["fb", "tw", "ig"]
    },
    {
      name: "Ana Paulina Sosa",
      role: "CEO & Fundadora",
      photo: "/assets/image-lummi-avatar-2.png",
      socials: ["fb", "tw", "ig"]
    },
    {
      name: "Mariana Manzo",
      role: "Product Design",
      photo: "/assets/image-lummi-avatar.png", // Using placeholder until real image is available
      socials: ["fb", "tw", "ig"]
    },
    {
      name: "Carlos Consuegra",
      role: "Director de tecnología",
      photo: "/assets/image-lummi-avatar-2.png", // Using placeholder until real image is available
      socials: ["fb", "tw", "ig"]
    }
  ];
  
  const testimonials = [
    {
      initial: "F",
      name: "Francisco G.",
      content: "¡Increíble experiencia con la plataforma! La facilidad para armar mis quinielas es genial, prácticamente se ha convertido en parte esencial de mi jornada futbolera."
    },
    {
      initial: "P",
      name: "Pablo P.",
      content: "Me encanta cómo puedo comparar mis resultados con mis amigos y ver quién tiene el mejor ojo para el fútbol."
    }
  ];
  
  return (
    <PageContainer>
      <Header>
        <LogoLink>SL</LogoLink>
        <NavContainer>
          <NavLink href="/">Inicio</NavLink>
          <NavLink href="/nosotros">Nosotros</NavLink>
          <LoginButton to="/login">Inicia sesión</LoginButton>
        </NavContainer>
      </Header>
      
      <HeroSection>
        <HeroContainer>
          <HeroTitle>Pasión por el Juego</HeroTitle>
          <MissionText>
            Nuestra misión va más allá de simplemente ser espectadores. Nos esforzamos por impulsar y aumentar la asistencia y el apoyo al fútbol femenil en México. Creemos en la importancia de involucrar a las familias y los niños en este deporte, creando una comunidad de aficionados apasionados y comprometidos.
          </MissionText>
          <LogoContainer>
            <Logo src="/assets/logo.svg" alt="Somos Locales" />
          </LogoContainer>
        </HeroContainer>
      </HeroSection>
      
      <DecalogueSection>
        <DecalogueContainer>
          <SectionHeader>
            <SectionTitle>Decálogo</SectionTitle>
            <SectionSubtitle>DE LA MEJOR AFICIÓN</SectionSubtitle>
          </SectionHeader>
          
          <GridContainer>
            {decalogueItems.map(item => (
              <DecalogueItem key={item.number}>
                <ItemNumber>{item.number}</ItemNumber>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemText>{item.text}</ItemText>
              </DecalogueItem>
            ))}
          </GridContainer>
        </DecalogueContainer>
      </DecalogueSection>
      
      <KnowMoreSection>
        <KnowMoreContainer>
          <SectionTitle>Conócenos más...</SectionTitle>
          
          <IllustrationContainer>
            <HandDrawnImage src="/assets/nuestro-logo.svg" alt="Hand drawn notes" />
          </IllustrationContainer>
        </KnowMoreContainer>
      </KnowMoreSection>
      
      <TeamSection>
        <TeamContainer>
          <SectionTitle>Nuestro equipo</SectionTitle>
          <MissionText style={{ color: '#262623' }}>
            La esencia de las gradas en tu hogar.
          </MissionText>
          
          <TeamGrid>
            {teamMembers.map((member, index) => (
              <TeamCard key={index}>
                <TeamMemberPhoto src={member.photo} alt={member.name} />
                <TeamMemberName>{member.name}</TeamMemberName>
                <TeamMemberRole>{member.role}</TeamMemberRole>
                <SocialIconsContainer>
                  {member.socials.map((social, idx) => (
                    <SocialIcon key={idx} href="#" aria-label={social}>
                      {social === 'fb' ? 'f' : social === 'tw' ? 't' : social === 'ig' ? 'i' : ''}
                    </SocialIcon>
                  ))}
                </SocialIconsContainer>
              </TeamCard>
            ))}
          </TeamGrid>
        </TeamContainer>
      </TeamSection>
      
      <FamilySection>
        <FamilyContainer>
          <SectionTitle>Nuestra familia</SectionTitle>
          <MissionText style={{ color: '#262623' }}>
            Conoce qué opinan nuestra comunidad y sé parte de ella.
          </MissionText>
          
          <TestimonialsContainer>
            <NavArrow className="prev">‹</NavArrow>
            
            <TestimonialSlider>
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index}>
                  <TestimonialHeader>
                    <TestimonialAvatar>{testimonial.initial}</TestimonialAvatar>
                    <TestimonialAuthor>{testimonial.name}</TestimonialAuthor>
                  </TestimonialHeader>
                  <TestimonialContent>{testimonial.content}</TestimonialContent>
                </TestimonialCard>
              ))}
            </TestimonialSlider>
            
            <NavArrow className="next">›</NavArrow>
          </TestimonialsContainer>
        </FamilyContainer>
      </FamilySection>
      
      <Footer>
        <FooterContainer>
          <FooterColumn>
            <FooterLogo src="/assets/logo.svg" alt="Somos Locales" />
            <FooterSocial>
              <FooterSocialIcon href="#" aria-label="Facebook">f</FooterSocialIcon>
              <FooterSocialIcon href="#" aria-label="Instagram">i</FooterSocialIcon>
              <FooterSocialIcon href="#" aria-label="Twitter">t</FooterSocialIcon>
              <FooterSocialIcon href="#" aria-label="Youtube">y</FooterSocialIcon>
            </FooterSocial>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>SomosLocales</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Acerca de Nosotros</a></FooterLink>
              <FooterLink><a href="#">Oportunidades</a></FooterLink>
              <FooterLink><a href="#">Noticias</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Contenido</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">Quiniela</a></FooterLink>
              <FooterLink><a href="#">Partidos</a></FooterLink>
            </FooterLinks>
            
            <FooterTitle style={{ marginTop: '24px' }}>Redes</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">@SomosLocalesMX</a></FooterLink>
              <FooterLink><a href="#">@SomosLocalesMX</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContainer>
        
        <Copyright>
          All rights reserved 2024
        </Copyright>
      </Footer>
    </PageContainer>
  );
}

export default AboutUsPage;
