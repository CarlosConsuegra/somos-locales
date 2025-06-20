import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import AboutUsPage from './pages/AboutUs.js';

function App() {
  // Using HashRouter instead of BrowserRouter for GitHub Pages
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/nosotros" element={<AboutUsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
