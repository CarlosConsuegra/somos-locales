import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Styled components for the landing page
const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: #262623;
  color: white;
`;

// Header/Navigation
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

// Main Container to control the height and width
const MainContainer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  position: relative;
`;

// Hero Section with fixed height
const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 673px;
  background-image: url('/assets/Principal_Section.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SomosLocalesLogo = styled.div`
  position: absolute;
  top: 158px;
  right: 195px;
  width: 214px;
`;

const LogoImage = styled.img`
  width: 100%;
`;

const HashtagText = styled.div`
  position: absolute;
  bottom: 180px;
  left: 157px;
  font-size: 34px;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
`;

// Registration Section
const RegistrationCard = styled.div`
  position: absolute;
  top: 320px;
  right: 120px;
  width: 350px;
  background-color: white;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const FormHeading = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  text-align: center;
  margin-bottom: 4px;
`;

const FormSubheading = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  margin-bottom: 8px;
  position: relative;
`;

const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 33.33%;
  background-color: #ec4899;
  border-radius: 2px;
`;

const StepText = styled.p`
  color: #ec4899;
  font-size: 12px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &::placeholder {
    color: #999;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #FFD600;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  
  &:before, &:after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
  }
  
  span {
    padding: 0 10px;
    color: #999;
    font-size: 12px;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
`;

const GoogleIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const LoginText = styled.p`
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-top: 16px;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Content Section
const ContentSection = styled.section`
  padding: 60px 120px;
  background-color: #262623;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
  max-width: 600px;
`;

const HighlightText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #FFD600;
  margin-bottom: 40px;
`;

// Features Section
const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 60px;
`;

const FeatureCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;

// Platform Section matching the new screenshot - with width set to match hero section
const PlatformSection = styled.section`
  background-color: #FFD600;
  color: #262623;
  padding: 80px 0;
  border-radius: 60px 60px 0 0;
  max-width: 1366px;
  margin: 0 auto;
`;

const PlatformContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
`;

const PlatformTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 24px;
`;

const PlatformDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
`;

const PhoneShowcase = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const PhoneSlider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`;

const CenterPhone = styled.div`
  z-index: 2;
  position: relative;
  
  img {
    height: 480px;
    display: block;
  }
`;

const SidePhone = styled.div`
  position: absolute;
  z-index: 1;
  
  img {
    height: 400px;
    display: block;
    opacity: 0.8;
  }
  
  &.left {
    left: 80px;
  }
  
  &.right {
    right: 80px;
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: #000;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  cursor: pointer;
  z-index: 3;
  
  &.prev {
    left: 5%;
  }
  
  &.next {
    right: 5%;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const SliderDot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.active ? '#ec4899' : 'rgba(0, 0, 0, 0.2)'};
  border: none;
  padding: 0;
  cursor: pointer;
`;

// Team Section - UPDATED with swapped positions
const TeamSection = styled.div`
  padding: 60px 0;
  background-color: #FFD600;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const TeamContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const TeamInfo = styled.div`
  max-width: 400px;
  text-align: right; /* Right-aligned text */
`;

const TeamTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const TeamSubtitle = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const TeamLink = styled.a`
  display: inline;
  color: #ec4899;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const TeamMembers = styled.div`
  display: flex;
  gap: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberPhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
`;

const MemberName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #262623;
`;

const MemberRole = styled.p`
  font-size: 14px;
  color: #262623;
`;

// Community Section - NEW
const CommunitySection = styled.section`
  background-image: url('/assets/frame-42731898.png');
  background-size: cover;
  background-position: center;
  padding: 80px 0;
  position: relative;
  max-width: 1366px;
  margin: 0 auto;
  
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

const CommunityContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CommunityContent = styled.div`
  color: white;
`;

const CommunityTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
  color: #FFD600;
`;

const CommunityText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  max-width: 450px;
`;

const CommunityForm = styled.div`
  align-self: center;
`;

const CommunityInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 16px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const CommunityButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #FFD600;
  color: #262623;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 8px;
`;

const TermsText = styled.p`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

// Footer Section
const FooterSection = styled.footer`
  background-color: #262623;
  color: white;
  padding: 60px 40px 30px;
  max-width: 1366px;
  margin: 0 auto;
`;

const FooterContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 24px;
  
  img {
    height: 40px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-size: 16px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #FFD600;
  margin-bottom: 24px;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
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
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = '/register';
  };
  
  return (
    <PageContainer>
      <MainContainer>
        {/* Header */}
        <Header>
          <LogoLink>SL</LogoLink>
          <NavContainer>
            <NavLink href="/">Inicio</NavLink>
            <NavLink href="/nosotros">Nosotros</NavLink>
            <LoginButton to="/login">Inicia sesión</LoginButton>
          </NavContainer>
        </Header>
        
        {/* Hero Section */}
        <HeroSection>
          <SomosLocalesLogo>
            <LogoImage src="/assets/recurso-6-3-x-1.png" alt="Somos Locales" />
          </SomosLocalesLogo>
          
          <HashtagText>#TIENESQUEVIVIRLO</HashtagText>
          
          {/* Registration Card - No white "Registrate" title */}
          <RegistrationCard>
            <FormHeading>Regístrate</FormHeading>
            <FormSubheading>¡Sé parte de SomosLocales!</FormSubheading>
            
            <ProgressBar>
              <ProgressFill />
            </ProgressBar>
            <StepText>Paso 1/3</StepText>
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Nombre completo</FormLabel>
                <FormInput 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Escribe tu nombre completo"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Correo electrónico</FormLabel>
                <FormInput 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Escribe tu correo electrónico"
                />
              </FormGroup>
              
              <SubmitButton type="submit">Siguiente</SubmitButton>
            </form>
            
            <Divider>
              <span>o</span>
            </Divider>
            
            <GoogleButton>
              <GoogleIcon src="/assets/social-icon.svg" alt="Google" />
              Continuar con Google
            </GoogleButton>
            
            <LoginText>
              ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
            </LoginText>
          </RegistrationCard>
        </HeroSection>
      </MainContainer>
      
      {/* Content Section */}
      <ContentSection>
        <ContentContainer>
          <ContentTitle>Somos Locales</ContentTitle>
          <ContentText>
            Somos una plataforma deportiva que te ofrece una experiencia única y emocionante. 
            Participa en quinielas, reta a tus amigos y demuestra quién sabe más. 
            Encuentras horarios, boletos y los mejores tips para disfrutar del fútbol femenil o masculino.
          </ContentText>
          <HighlightText>¡Únete y vive la pasión!</HighlightText>
          
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <img src="/assets/layout-241.png" alt="Guías de estadios" />
              </FeatureIcon>
              <FeatureTitle>Guías de estadios</FeatureTitle>
              <FeatureDescription>
                Encuentra información de cada estadio, cómo llegar, donde comer, hospedarte y eventos previos.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <img src="/assets/app-screen-shot.png" alt="Quiniela" />
              </FeatureIcon>
              <FeatureTitle>Quiniela</FeatureTitle>
              <FeatureDescription>
                Reta a tus amigos en la quiniela y demuestra quién es el verdadero experto mientras disfrutas del futbol.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <img src="/assets/property-1-image-background-lummi.png" alt="Gana recompensas" />
              </FeatureIcon>
              <FeatureTitle>Gana recompensas</FeatureTitle>
              <FeatureDescription>
                Suma puntos, sube en el ranking y compite por increíbles premios mientras disfrutas del futbol.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </ContentContainer>
      </ContentSection>
      
      {/* Platform Section - Based on the screenshot */}
      <PlatformSection>
        <PlatformContainer>
          <PlatformTitle>Conoce la plataforma</PlatformTitle>
          <PlatformDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </PlatformDescription>
          
          <PhoneShowcase>
            <SliderArrow className="prev">‹</SliderArrow>
            
            <PhoneSlider>
              <SidePhone className="left">
                <img src="/assets/app-screenshot@2x.png" alt="App Screenshot" />
              </SidePhone>
              
              <CenterPhone>
                <img src="/assets/app-screen-shot.png" alt="App Screenshot" />
              </CenterPhone>
              
              <SidePhone className="right">
                <img src="/assets/app-screenshot@3x.png" alt="App Screenshot" />
              </SidePhone>
            </PhoneSlider>
            
            <SliderArrow className="next">›</SliderArrow>
          </PhoneShowcase>
          
          <SliderDots>
            <SliderDot active />
            <SliderDot />
            <SliderDot />
            <SliderDot />
            <SliderDot />
          </SliderDots>
          
          {/* Team Section - With swapped positions */}
          <TeamSection>
            <TeamContainer>
              <TeamMembers>
                <TeamMember>
                  <MemberPhoto src="/assets/image-lummi-avatar.png" alt="Karla H. Valdez" />
                  <MemberName>Karla H. Valdez</MemberName>
                  <MemberRole>CEO & Fundadora</MemberRole>
                </TeamMember>
                
                <TeamMember>
                  <MemberPhoto src="/assets/image-lummi-avatar-2.png" alt="Ana Paulina Sosa" />
                  <MemberName>Ana Paulina Sosa</MemberName>
                  <MemberRole>CEO & Fundadora</MemberRole>
                </TeamMember>
              </TeamMembers>
              
              <TeamInfo>
                <TeamTitle>El Corazón del Fútbol</TeamTitle>
                <TeamSubtitle>La esencia de las gradas en tu hogar.</TeamSubtitle>
                <TeamLink href="#">Conócenos</TeamLink>
              </TeamInfo>
            </TeamContainer>
          </TeamSection>
        </PlatformContainer>
      </PlatformSection>
      
      {/* Community Section - NEW */}
      <CommunitySection>
        <CommunityContainer>
          <CommunityContent>
            <CommunityTitle>Únete a la comunidad</CommunityTitle>
            <CommunityText>
              Interactúa con otros aficionados, comparte tus experiencias en las tribunas, y únete a conversaciones emocionantes sobre el deporte que amamos.
            </CommunityText>
          </CommunityContent>
          
          <CommunityForm>
            <CommunityInput type="email" placeholder="Escribe tu correo electrónico" />
            <CommunityButton>Regístrame</CommunityButton>
            <TermsText>
              Al hacer clic en "Regístrame", estoy de acuerdo con los Términos y condiciones.
            </TermsText>
          </CommunityForm>
        </CommunityContainer>
      </CommunitySection>
      
      {/* Footer Section */}
      <FooterSection>
        <FooterContainer>
          <div>
            <FooterLogo>
              <img src="/assets/recurso-6-3-x-1.png" alt="Somos Locales" />
            </FooterLogo>
            <SocialLinks>
              <SocialLink href="#">f</SocialLink>
              <SocialLink href="#">t</SocialLink>
              <SocialLink href="#">i</SocialLink>
              <SocialLink href="#">y</SocialLink>
            </SocialLinks>
          </div>
          
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
              <FooterLink><a href="#">Rankings</a></FooterLink>
              <FooterLink><a href="#">Funciones</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterTitle>Redes</FooterTitle>
            <FooterLinks>
              <FooterLink><a href="#">@SomosLocalesMX</a></FooterLink>
              <FooterLink><a href="#">@SomosLocalesMX</a></FooterLink>
            </FooterLinks>
          </FooterColumn>
        </FooterContainer>
        
        <Copyright>
          All rights reserved 2024
        </Copyright>
      </FooterSection>
    </PageContainer>
  );
}

export default HomePage;
