import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/Backtotop/Backtotop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import ServicePage from './pages/ServicePage/ServicePage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [language, setLanguage] = useState('sr');

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        
        <Header 
          language={language} 
          setLanguage={setLanguage}
        />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage language={language} />} 
            />
            
            <Route 
              path="/services" 
              element={<ServicesPage language={language} />} 
            />
            
            <Route 
              path="/services/:serviceSlug" 
              element={<ServicePage language={language} />} 
            />
            
            <Route 
              path="*" 
              element={<HomePage language={language} />} 
            />
          </Routes>
        </main>

        <Footer language={language} />
        <BackToTop language={language} />

      </div>
    </Router>
  );
}