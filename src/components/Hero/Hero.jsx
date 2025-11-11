import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { colors } from '../../utils/colors';
import Button from '../Button';
import './Hero.css';

export default function Hero({ language }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const content = {
    sr: {
      slides: [
        {
          title: 'Advokatska kancelarija Ilić Lj. Suzana',
          subtitle: 'Profesionalne pravne usluge u Beogradu',
          description: 'Pružamo sve vrste pravnih usluga i pravne pomoći. Uspešno zastupamo klijente u krivičnim, parničnim, vanparničnim, prekršajnim i izvršnim postupcima.',
          cta: 'Zakažite konsultacije',
          contact: 'Kontakt',
          image: '/images/hero-slide-1.webp',
          imageAlt: 'Advokatska kancelarija - profesionalne pravne usluge'
        },
        {
          title: 'Vaš pouzdani pravni partner',
          subtitle: 'Iskustvo i profesionalnost na prvom mestu',
          description: 'Specijalizovani smo za korporativno pravo, porodično pravo, naknadu štete i sve ostale oblasti pravne prakse. Gradimo odnose zasnovane na poverenju.',
          cta: 'Saznajte više',
          contact: 'Pozovite nas',
          image: '/images/hero-slide-2.webp',
          imageAlt: 'Pravni partner - iskustvo i profesionalnost'
        }
      ]
    },
    en: {
      slides: [
        {
          title: 'Ilić Lj. Suzana Law Office',
          subtitle: 'Professional legal services in Belgrade',
          description: 'We provide all types of legal services and legal assistance. We successfully represent clients in criminal, civil, non-litigation, misdemeanor and enforcement proceedings.',
          cta: 'Schedule Consultation',
          contact: 'Contact',
          image: '/images/hero-slide-1.webp',
          imageAlt: 'Law office - professional legal services'
        },
        {
          title: 'Your trusted legal partner',
          subtitle: 'Experience and professionalism come first',
          description: 'We specialize in corporate law, family law, damage compensation and all other areas of legal practice. We build relationships based on trust.',
          cta: 'Learn More',
          contact: 'Call Us',
          image: '/images/hero-slide-2.webp',
          imageAlt: 'Legal partner - experience and professionalism'
        }
      ]
    }
  };

  const slides = content[language].slides;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      id="home"
      className="hero-carousel-section"
      style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      {/* Carousel Slides */}
      <div className="hero-carousel-container" style={{ position: 'relative', width: '100%', height: '100vh' }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: index === 0 
                ? '#1a1a2e' 
                : '#0f1419', 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: index === currentSlide ? 2 : 1
            }}
          >
            {/* Dark Overlay for Text Readability */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.7) 0%, rgba(26, 26, 46, 0.5) 50%, rgba(26, 26, 46, 0.7) 100%)',
                zIndex: 1
              }}
            />

            {/* Slide Content */}
            <div 
              className="container position-relative" 
              style={{ 
                zIndex: 4, 
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <div className="row align-items-center justify-content-center w-100">
                <div className="col-12 col-lg-8 text-center">
                  <div style={{ marginBottom: 'clamp(30px, 5vw, 45px)' }}>
                    <h1 
                      style={{ 
                        fontSize: 'clamp(24px, 6vw, 64px)',
                        fontWeight: '800',
                        marginBottom: 'clamp(15px, 3vw, 30px)',
                        lineHeight: '1.15',
                        letterSpacing: '-0.02em',
                        fontFamily: "'Inter', -apple-system, sans-serif",
                        color: '#ffffff',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                      }}
                    >
                      {slide.title}
                    </h1>
                    <p 
                      style={{ 
                        fontSize: 'clamp(14px, 2.5vw, 26px)',
                        fontWeight: '500',
                        marginBottom: '0',
                        color: colors.accent,
                        lineHeight: '1.45',
                        maxWidth: 'clamp(280px, 80vw, 700px)',
                        margin: '0 auto',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.6)'
                      }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                  <p 
                    style={{ 
                      fontSize: 'clamp(13px, 2vw, 19px)',
                      lineHeight: '1.75',
                      marginBottom: 'clamp(25px, 5vw, 50px)',
                      maxWidth: '800px',
                      margin: '0 auto clamp(25px, 5vw, 50px) auto',
                      color: 'rgba(255,255,255,0.9)',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.7)'
                    }}
                  >
                    {slide.description}
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button
                      variant="primary"
                      size="large"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {slide.cta}
                    </Button>
                    <Button
                      variant="white"
                      size="large"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {slide.contact}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          color: '#ffffff'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 10,
          color: '#ffffff'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.2)';
          e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
          e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div 
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: index === currentSlide 
                ? colors.accent 
                : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
            }}
            onMouseEnter={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.6)';
              }
            }}
            onMouseLeave={(e) => {
              if (index !== currentSlide) {
                e.target.style.background = 'rgba(255, 255, 255, 0.3)';
              }
            }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div 
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '3px',
          background: 'rgba(255, 255, 255, 0.1)',
          zIndex: 10
        }}
      >
        <div 
          style={{
            height: '100%',
            background: colors.accent,
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'heroProgress 5s linear infinite' : 'none',
            transformOrigin: 'left'
          }}
        />
      </div>
    </section>
  );
}