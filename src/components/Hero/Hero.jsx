import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../utils/colors';
import Button from '../Button';
import './Hero.css';

export default function Hero({ language }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const content = {
    sr: {
      slides: [
        {
          title: 'Advokatska kancelarija Ilić Lj. Suzana',
          subtitle: 'Profesionalne pravne usluge',
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
          subtitle: 'Professional legal services',
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

  // Navigate to contact page
  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="hero-carousel-section">
      <div className="hero-carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              background: index === 0 ? '#1a1a2e' : '#0f1419',
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="hero-overlay" />

            <div className="container position-relative h-100 d-flex align-items-center" style={{ zIndex: 4 }}>
              <div className="row align-items-center justify-content-center w-100">
                <div className="col-12 col-lg-8 text-center">
                  <div className="hero-content-wrapper">
                    <h1 className="hero-title">{slide.title}</h1>
                    <p 
                      className="hero-subtitle"
                      style={{ color: colors.accent, margin: '0 auto' }}
                    >
                      {slide.subtitle}
                    </p>
                  </div>
                  <p className="hero-description">{slide.description}</p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button
                      variant="primary"
                      size="large"
                      onClick={handleContactClick}
                    >
                      {slide.cta}
                    </Button>
                    <Button
                      variant="white"
                      size="large"
                      onClick={handleContactClick}
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

      {/* Navigation Dots */}
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            style={{
              background: index === currentSlide ? colors.accent : 'rgba(255, 255, 255, 0.3)'
            }}
            aria-label={`${language === 'sr' ? 'Idi na slajd' : 'Go to slide'} ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="hero-progress">
        <div 
          className="hero-progress-bar"
          style={{
            background: colors.accent,
            width: isAutoPlaying ? '100%' : '0%',
            animation: isAutoPlaying ? 'heroProgress 5s linear infinite' : 'none'
          }}
        />
      </div>
    </section>
  );
}