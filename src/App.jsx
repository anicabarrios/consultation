import Header from './components/Header/Header';
import React, { useState } from 'react';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services
 from './components/Services/Services';
export default function App() {
  const [language, setLanguage] = useState('sr');

  return (
    <div className="min-vh-100" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Services language={language}/>
    </div>
  );
}