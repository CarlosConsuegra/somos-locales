import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar.js';
import Hero from '../components/landing/Hero.js';
import Features from '../components/landing/Features.js';
import AppShowcase from '../components/landing/AppShowcase.js';
import Footer from '../components/landing/Footer.js';

const LandingContainer = styled.div`
  min-height: 100vh;
`;

const Landing = () => {
  return (
    <LandingContainer>
      <Navbar />
      <Hero />
      <Features />
      <AppShowcase />
      <Footer />
    </LandingContainer>
  );
};

export default Landing;
