import React, { useState, useEffect, useCallback } from 'react';
import { Star } from 'lucide-react';
import { colors } from '../../utils/colors.js';
import './Reviews.css';

export default function Reviews({ language }) {
  const [currentReview, setCurrentReview] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const content = {
    sr: {
      subtitle: 'ŠTA KAŽU NAŠI KLIJENTI',
      title: 'Recenzije klijenata',
      rating: 'Ocena klijenata',
      reviews: [
        { text: 'Advokatska kancelarija Ilić Lj. Suzana mi je pružila izuzetnu podršku u složenom građanskom sporu. Profesionalnost i temeljno poznavanje obligacionog prava su bili ključni za uspešan ishod.', author: 'MILOŠ ĐORĐEVIĆ' },
        { text: 'Suzana je stručno vodila moju krivičnu odbranu. Zahvaljujući njenoj ekspertizi i posvećenosti, postupak je završen sa najboljim mogućim ishodom.', author: 'JELENA NIKOLIĆ' },
        { text: 'Odlično zastupanje u slučaju naknade štete nakon saobraćajne nesreće. Postupak je bio brz i efikasan, a ostvarena naknada je premašila očekivanja.', author: 'VLADIMIR STANKOVIĆ' },
        { text: 'Kancelarija Ilić mi je pomogla u radnom sporu sa poslodavcem. Svi aspekti radnog prava su detaljno objašnjeni, a moja prava su u potpunosti zaštićena.', author: 'TAMARA JOVANOVIĆ' },
        { text: 'Profesionalna pomoć u korporativnim i privrednim pitanjima našeg preduzeća. Suzana je pokazala duboko razumevanje poslovnog prava i usklađenosti poslovanja.', author: 'DEJAN MITROVIĆ' },
        { text: 'Izvrsna usluga prilikom izrade i pregleda ugovora za našu firmu. Svaki detalj je pažljivo analiziran, što nam je uštedelo vreme i potencijalne probleme.', author: 'MARINA PETROVIĆ' },
        { text: 'Suzana nam je pomogla u složenom upravnom sporu protiv državnog organa. Njena upornost i stručnost su doveli do pozitivnog rešenja.', author: 'NIKOLA JOVIĆ' },
        { text: 'Odlična podrška u izvršnom postupku za naplatu potraživanja. Profesionalan pristup i efikasna komunikacija tokom celog procesa.', author: 'ANA SIMIĆ' }
      ]
    },
    en: {
      subtitle: 'WHAT OUR CLIENTS SAY',
      title: 'Client Reviews',
      rating: 'Client Rating',
      reviews: [
        { text: 'Ilić Lj. Suzana Law Office provided exceptional support in a complex civil dispute. The professionalism and thorough knowledge of obligation law were key to a successful outcome.', author: 'MILOŠ ĐORĐEVIĆ' },
        { text: 'Suzana expertly handled my criminal defense. Thanks to her expertise and dedication, the proceedings concluded with the best possible outcome.', author: 'JELENA NIKOLIĆ' },
        { text: 'Excellent representation in a damage compensation case after a traffic accident. The process was fast and efficient, and the compensation exceeded expectations.', author: 'VLADIMIR STANKOVIĆ' },
        { text: 'Ilić Law Office helped me with a labor dispute against my employer. All aspects of labor law were explained in detail, and my rights were fully protected.', author: 'TAMARA JOVANOVIĆ' },
        { text: "Professional assistance with our company's corporate and commercial matters. Suzana demonstrated deep understanding of business law and compliance.", author: 'DEJAN MITROVIĆ' },
        { text: 'Excellent service in drafting and reviewing contracts for our company. Every detail was carefully analyzed, saving us time and potential issues.', author: 'MARINA PETROVIĆ' },
        { text: 'Suzana helped us in a complex administrative dispute against a government authority. Her persistence and expertise led to a positive resolution.', author: 'NIKOLA JOVIĆ' },
        { text: 'Great support in enforcement proceedings for debt collection. Professional approach and efficient communication throughout the entire process.', author: 'ANA SIMIĆ' }
      ]
    }
  };

  const t = content[language];

  const handleReviewChange = useCallback((index) => {
    if (index !== currentReview && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentReview(index);
        setIsTransitioning(false);
      }, 250);
    }
  }, [currentReview, isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleReviewChange((currentReview + 1) % t.reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentReview, t.reviews.length, handleReviewChange]);

  const review = t.reviews[currentReview];

  return (
    <section 
      id="reviews" 
      className="reviews-section" 
      style={{
        '--primary-color': colors.primary,
        '--accent-color': colors.accent
      }}
    >
      <div className="reviews-background">
        <div className="reviews-pattern" />
      </div>
      
      <div className="container">
        <div className="reviews-layout">
          <div className="reviews-content">
            <p className="reviews-subtitle">{t.subtitle}</p>
            <h2 className="reviews-title">{t.title}</h2>

            <div className="reviews-quote-container">
              <div className={`review-content-transition ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                <p className="review-text">{review.text}</p>
                <div className="review-author">
                  <span className="author-line" />
                  <h3 className="author-name">{review.author}</h3>
                </div>
              </div>
            </div>

            <div className="reviews-navigation">
              {t.reviews.map((_, index) => (
                <button
                  key={index}
                  className={`nav-dot ${index === currentReview ? 'active' : ''}`}
                  onClick={() => handleReviewChange(index)}
                  aria-label={`${language === 'sr' ? 'Recenzija' : 'Review'} ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="reviews-stars-side">
            <div className="stars-container">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="review-star" fill={colors.accent} color={colors.accent} />
                ))}
              </div>
              <div className="stars-rating">5.0</div>
              <div className="stars-label">{t.rating}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}