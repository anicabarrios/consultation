import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/Backtotop/Backtotop';
import HomePage from './pages/HomePage/HomePage';
import './App.css';

const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const ServicePage = lazy(() => import('./pages/ServicePage/ServicePage'));
const QAPage = lazy(() => import('./pages/QAPage/QAPage'));
const AdminPage = lazy(() => import('./pages/AdminPage/AdminPage'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Reads the initial language from the URL (?lang=en),
// so hreflang alternate URLs from the sitemap actually render English content
function getInitialLanguage() {
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    if (params.get('lang') === 'en') return 'en';
  }
  return 'sr';
}

function PageLoader() {
  return <div style={{ minHeight: '60vh' }} aria-hidden="true" />;
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper">
        
        <Header 
          language={language} 
          setLanguage={setLanguage}
        />
        
        <main className="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route 
                path="/" 
                element={<HomePage language={language} />} 
              />
              
              <Route 
                path="/about" 
                element={<AboutPage language={language} />} 
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
                path="/contact" 
                element={<ContactPage language={language} />} 
              />
              
              <Route 
                path="/qa" 
                element={<QAPage language={language} />} 
              />
              <Route path="/admin" element={<AdminPage language={language} />} />
              
              <Route 
                path="*" 
                element={<HomePage language={language} />} 
              />
            </Routes>
          </Suspense>
        </main>

        <Footer language={language} />
        <BackToTop language={language} />

      </div>
    </Router>
  );
}