import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import AboutUsPage from './pages/AboutUs.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
