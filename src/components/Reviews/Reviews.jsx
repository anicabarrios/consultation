import React, { useState, useEffect, useCallback } from 'react';
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
          author: 'MILOŠ ĐORĐEVIĆ'
        },
        {
          text: 'Suzana je veoma stručno vodila naš prekršajni postupak. Zahvaljujući njenoj ekspertizi, dobili smo najbolji mogući ishod.',
          author: 'JELENA NIKOLIĆ'
        },
        {
          text: 'Odlično zastupanje u slučaju naknade štete nakon saobraćajne nesreće. Postupak je bio brz i efikasan, rezultat iznad očekivanja.',
          author: 'VLADIMIR STANKOVIĆ'
        },
        {
          text: 'Kancelarija Ilić mi je pomogla pri kupovini nekretnine. Svi ugovori su detaljno objašnjeni, postupak je prošao bez problema.',
          author: 'TAMARA JOVANOVIĆ'
        },
        {
          text: 'Profesionalna pomoć u korporativnim pitanjima našeg preduzeća. Suzana je pokazala duboko razumevanje poslovnog prava.',
          author: 'DEJAN MITROVIĆ'
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
          author: 'MILOŠ ĐORĐEVIĆ'
        },
        {
          text: 'Suzana expertly handled our misdemeanor case. Thanks to her expertise, we got the best possible outcome.',
          author: 'JELENA NIKOLIĆ'
        },
        {
          text: 'Excellent representation in a damage compensation case after a traffic accident. The process was fast and efficient, results exceeded expectations.',
          author: 'VLADIMIR STANKOVIĆ'
        },
        {
          text: 'Ilić Law Office helped me with a real estate purchase. All contracts were explained in detail, the process went smoothly.',
          author: 'TAMARA JOVANOVIĆ'
        },
        {
          text: "Professional assistance with our company's corporate matters. Suzana showed deep understanding of business law.",
          author: 'DEJAN MITROVIĆ'
        }
      ]
    }
  };

  const t = content[language];

  // CSS custom properties for dynamic theming
  const cssVars = {
    '--primary-color': colors.primary,
    '--accent-color': colors.accent,
    '--accent-hover': colors.accentHover,
    '--text-light': colors.textLight
  };

  const handleReviewChange = useCallback((index) => {
    if (index !== currentReview && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReview(index);
        setIsTransitioning(false);
      }, 250);
    }
  }, [currentReview, isTransitioning]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentReview + 1) % t.reviews.length;
      handleReviewChange(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentReview, t.reviews.length, handleReviewChange]);

  const currentReviewData = t.reviews[currentReview];

  return (
    <section id="reviews" className="reviews-component" style={cssVars}>
      <div className="reviews-split-container">
        {/* Left Side - Content */}
        <div 
          className="reviews-content-side"
          style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, #0f1419 100%)` }}
        >
          <div className="reviews-content-wrapper">
            <p className="reviews-subtitle">{t.section.subtitle}</p>
            <h2 className="reviews-title">{t.section.title}</h2>

            <div className="review-display">
              <div className={`review-content-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                <p className="review-quote">{currentReviewData.text}</p>
                <div className="review-author-info">
                  <h3 className="review-client-name">{currentReviewData.author}</h3>
                </div>
              </div>
            </div>

            <div className="reviews-navigation">
              {t.reviews.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentReview ? 'active' : ''}`}
                  onClick={() => handleReviewChange(index)}
                  aria-label={`${language === 'sr' ? 'Idi na recenziju' : 'Go to review'} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div 
          className="reviews-image-side"
          style={{ background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)` }}
        >
          <div className="reviews-image-container">
            <div className="reviews-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}