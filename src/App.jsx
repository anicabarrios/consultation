 import Header from './components/Header';
 import React, { useState } from 'react';
 import Hero from './components/Hero';
 export default function App() {
  const [language, setLanguage] = useState('sr');

  return (
    <div className="min-vh-100" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Header language={language} setLanguage={setLanguage} />
      <Hero language={language} />
    </div>
  );
}
