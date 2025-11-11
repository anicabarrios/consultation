import React, { useState, useEffect, useMemo } from 'react';
import { colors } from '../../utils/colors.js';
import './Reviews.css';

export default function Reviews({ language }) {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const content = {
    sr: {
      section: {
        subtitle: 'ŠTA KAŽU NAŠI KLIJENTI',
        title: 'Recenzije klijenata'
      },
      reviews: [
        {
          text: 'Advokatska kancelarija Ilić Lj. Suzana mi je uspešno rešila složen nasledni spor. Profesionalnost i pažnja prema detaljima su bili izvanredni.',
          author: 'MILOŠ ĐORĐEVIĆ',
          caseType: 'Nasledno pravo'
        },
        {
          text: 'Suzana je veoma stručno vodila naš prekršajni postupak. Zahvaljujući njenoj ekspertizi, dobili smo najbolji mogući ishod.',
          author: 'JELENA NIKOLIĆ',
          caseType: 'Prekršajno pravo'
        },
        {
          text: 'Odlično zastupanje u slučaju naknade štete nakon saobraćajne nesreće. Postupak je bio brz i efikasan, rezultat iznad očekivanja.',
          author: 'VLADIMIR STANKOVIĆ',
          caseType: 'Naknada štete'
        },
        {
          text: 'Kancelarija Ilić mi je pomogla pri kupovini nekretnine. Svi ugovori su detaljno objašnjeni, postupak je prošao bez problema.',
          author: 'TAMARA JOVANOVIĆ',
          caseType: 'Nekretnine'
        },
        {
          text: 'Profesionalna pomoć u korporativnim pitanjima našeg preduzeća. Suzana je pokazala duboko razumevanje poslovnog prava.',
          author: 'DEJAN MITROVIĆ',
          caseType: 'Korporativno pravo'
        }
      ]
    },
    en: {
      section: {
        subtitle: 'WHAT OUR CLIENTS SAY',
        title: 'Client Reviews'
      },
      reviews: [
        {
          text: 'Ilić Lj. Suzana Law Office successfully resolved my complex inheritance dispute. The professionalism and attention to detail were extraordinary.',
          author: 'MILOŠ ĐORĐEVIĆ',
          caseType: 'Inheritance Law'
        },
        {
          text: 'Suzana expertly handled our misdemeanor case. Thanks to her expertise, we got the best possible outcome.',
          author: 'JELENA NIKOLIĆ',
          caseType: 'Misdemeanor Law'
        },
        {
          text: 'Excellent representation in a damage compensation case after a traffic accident. The process was fast and efficient, results exceeded expectations.',
          author: 'VLADIMIR STANKOVIĆ',
          caseType: 'Damage Compensation'
        },
        {
          text: 'Ilić Law Office helped me with a real estate purchase. All contracts were explained in detail, the process went smoothly.',
          author: 'TAMARA JOVANOVIĆ',
          caseType: 'Real Estate'
        },
        {
          text: 'Professional assistance with our company\'s corporate matters. Suzana showed deep understanding of business law.',
          author: 'DEJAN MITROVIĆ',
          caseType: 'Corporate Law'
        }
      ]
    }
  };

  const t = content[language];

  const hexToRgba = (hex, alpha = 1) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const dynamicStyles = useMemo(() => ({
    componentStyles: {
      '--primary-color': colors.primary,
      '--secondary-color': colors.secondary,
      '--accent-color': colors.accent,
      '--accent-hover': colors.accentHover,
      '--accent-light': colors.accentLight,
      '--accent-lighter': colors.accentLighter,
      '--text-light': colors.textLight,
    },

    // Individual section styles
    contentSideStyle: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, #16213e 50%, ${colors.primary} 100%)`
    },

    imageSideStyle: {
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`
    },

    subtitleStyle: {
      color: 'rgba(255, 255, 255, 0.95)'
    },

    titleStyle: {
      color: colors.accent
    },

    quoteStyle: {
      color: 'rgba(255, 255, 255, 0.95)'
    },

    authorStyle: {
      color: colors.textLight
    },

    imageOverlayStyle: {
      background: `linear-gradient(45deg, 
        ${hexToRgba(colors.accent, 0.3)} 0%, 
        ${hexToRgba(colors.accentHover, 0.2)} 50%, 
        ${hexToRgba(colors.accent, 0.3)} 100%)`
    }
  }), [colors]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReview]);

  const handleReviewChange = (index) => {
    if (index !== currentReview && !isTransitioning) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentReview(index);
        setIsTransitioning(false);
      }, 250);
    }
  };

  const handleNextReview = () => {
    const nextIndex = (currentReview + 1) % t.reviews.length;
    handleReviewChange(nextIndex);
  };

  // Handle navigation dot hover effects
  const handleDotMouseEnter = (e, index) => {
    if (index !== currentReview) {
      e.target.style.backgroundColor = hexToRgba(colors.accent, 0.7);
    }
  };

  const handleDotMouseLeave = (e, index) => {
    if (index !== currentReview) {
      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    }
  };

  const currentReviewData = t.reviews[currentReview];

  return (
    <section 
      id="reviews" 
      className="reviews-component"
      style={dynamicStyles.componentStyles}
    >
      <div className="reviews-split-container">
        {/* Left Side - Content */}
        <div 
          className="reviews-content-side"
          style={dynamicStyles.contentSideStyle}
        >
          <div className="reviews-content-wrapper">
            {/* Subtitle */}
            <p 
              className="reviews-subtitle"
              style={dynamicStyles.subtitleStyle}
            >
              {t.section.subtitle}
            </p>

            {/* Title */}
            <h2 
              className="reviews-title"
              style={dynamicStyles.titleStyle}
            >
              {t.section.title}
            </h2>

            {/* Review Display */}
            <div className="review-display">
              <div className={`review-content-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                {/* Quote */}
                <p 
                  className="review-quote"
                  style={dynamicStyles.quoteStyle}
                >
                  {currentReviewData.text}
                </p>

                {/* Author */}
                <div 
                  className="review-author-info"
                  style={dynamicStyles.authorStyle}
                >
                  <h3 className="review-client-name">
                    {currentReviewData.author}
                  </h3>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="reviews-navigation">
              {t.reviews.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentReview ? 'active' : ''}`}
                  onClick={() => handleReviewChange(index)}
                  style={{
                    backgroundColor: index === currentReview 
                      ? colors.accent 
                      : 'rgba(255, 255, 255, 0.3)'
                  }}
                  onMouseEnter={(e) => handleDotMouseEnter(e, index)}
                  onMouseLeave={(e) => handleDotMouseLeave(e, index)}
                  aria-label={`${language === 'sr' ? 'Idi na recenziju' : 'Go to review'} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div 
          className="reviews-image-side"
          style={dynamicStyles.imageSideStyle}
        >
          <div className="reviews-image-container">
            <div 
              className="reviews-image-overlay" 
              style={dynamicStyles.imageOverlayStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}