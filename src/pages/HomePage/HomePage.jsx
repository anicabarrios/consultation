import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Reviews from '../../components/Reviews/Reviews';
import Contact from '../../components/Contact/Contact';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import './HomePage.css';

export default function HomePage({ language }) {
  return (
    <>
      <Hero language={language} />
  
      <About language={language} />      
      
      <Services language={language} />
      
      {/* Reviews - Fade in animation  */}
      <AnimatedSection 
        animation="fade-in" 
        threshold={0.15}
        rootMargin="0px 0px -60px 0px"
        duration="slow"
      >
        <Reviews language={language} />
      </AnimatedSection>
      
      {/* Contact - Fade up animation */}
      <AnimatedSection 
        animation="fade-up" 
        threshold={0.1}
        rootMargin="0px 0px -80px 0px"
        duration="normal"
      >
        <Contact language={language} />
      </AnimatedSection>
    </>
  );
}