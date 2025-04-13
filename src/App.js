import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import AboutUsPage from './pages/AboutUs.js';

// Get the base URL from the homepage in package.json or default to '/'
const basename = process.env.NODE_ENV === 'production' 
  ? (window.location.pathname.match(/^\/[\w-]+/) || ['/'])[0]
  : '/';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
