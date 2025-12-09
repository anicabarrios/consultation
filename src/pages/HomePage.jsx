import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Reviews from '../components/Reviews/Reviews';
import Contact from '../components/Contact/Contact';

export default function HomePage({ language }) {
  return (
    <>

      <Hero language={language} />
      
      <About language={language} />
      
      <Services language={language} />
      
      <Reviews language={language} />
      
      <Contact language={language} />
    </>
  );
}