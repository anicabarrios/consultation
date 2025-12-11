import React, { useEffect, useRef } from 'react';
import { colors } from '../../utils/colors.js';
import Card from '../Card.jsx';

export default function About({ language }) {

  const content = {
    sr: {
      section: {
        subtitle: 'O NAMA',
        title: 'Advokatska kancelarija Ilić Lj. Suzana',
        mainHeading: 'Poverenje je temelj naših odnosa sa klijentima',
        description: 'Težimo da svaki naš rezultat bude bolji od prethodnog. Najbolja preporuka za našu advokatsku kancelariju su naši zadovoljni klijenti u Beogradu i Srbiji. Istrajni smo u pronalaženju novih rešenja, koja su efikasna i po najvišim merilima advokarske prakse.',
        additionalText: 'Gradimo odnose sa klijentima zasnovane na poverenju i iskrenoj pažnji, uvek štiteći njihov interes i reputaciju.',
        promise: 'Naša advokatska kancelarija će vam pružiti brz, kvalitetan i profesionalan rad u rešavanju vaših pravnih problema.',
        legalText: 'Advokatska kancelarija Ilić Lj. Suzana pruža klijentima sve vrste pravnih usluga i pravne pomoći naročito iz oblasti: Korporativnog prava, Ugovornog prava, Naknade štete, Prekršajnog prava…',
        specializationText: 'Kancelarija je specijalizovana za zastupanje klijenata pravnih lica u parničnim, izvršnim i drugim postupcima kao i sačinjavanje svih vrsta ugovora za potrebe poslovanja klijenata pravnih lica kao i klijenata fizičkih lica (ugovor o poklonu, zakupu, doživotnom izdržavanju, ugovor o prometu nepokretnosti...)'
      }
    },
    en: {
      section: {
        subtitle: 'ABOUT US',
        title: 'Ilić Lj. Suzana Law Office',
        mainHeading: 'Trust is the foundation of our client relationships',
        description: 'We strive to make each of our results better than the previous one. The best recommendation for our law office are our satisfied clients in Belgrade and Serbia. We are persistent in finding new solutions that are effective and meet the highest standards of legal practice.',
        additionalText: 'We build relationships with clients based on trust and sincere attention, always protecting their interests and reputation.',
        promise: 'Our law office will provide you with fast, quality and professional work in solving your legal problems.',
        legalText: 'Ilić Lj. Suzana Law Office provides clients with all types of legal services and legal assistance, particularly in the areas of: Corporate law, Contract law, Damage compensation, Misdemeanor law…',
        specializationText: 'The office specializes in representing legal entities in litigation, enforcement and other proceedings, as well as drafting all types of contracts for the business needs of legal entity clients and individual clients (gift contracts, lease agreements, life support contracts, real estate transaction contracts...)'
      }
    }
  };

  const t = content[language];

  // Animation refs for entrance effects
  const mainSectionRef = useRef(null);
  const quoteSectionRef = useRef(null);
  const trustSectionRef = useRef(null);

  // Animation logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections when they mount
    const sections = [mainSectionRef.current, quoteSectionRef.current, trustSectionRef.current];
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);
  const styles = {
    getCSSVars: () => ({
      '--section-padding': 'clamp(80px, 12vw, 120px)',
      '--container-padding': 'clamp(40px, 6vw, 60px)',
      '--text-spacing': 'clamp(24px, 4vw, 36px)',
      '--card-padding': 'clamp(20px, 3vw, 35px)',
      '--image-height': 'clamp(450px, 55vw, 700px)',
      '--quote-height': 'clamp(280px, 35vw, 420px)',
      '--main-title-size': 'clamp(26px, 4.5vw, 48px)',
      '--subtitle-size': 'clamp(11px, 1.5vw, 13px)',
      '--body-text-size': 'clamp(14px, 2vw, 18px)',
      '--benefit-text-size': 'clamp(15px, 2vw, 17px)',
    }),

    // Main sections
    mainSection: {
      background: `linear-gradient(180deg, ${colors.lightBg} 0%, #ffffff 100%)`,
      padding: 'var(--section-padding) 0',
      position: 'relative',
      overflow: 'hidden'
    },

    bgGradient: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${colors.accent}02 0%, transparent 50%, ${colors.primary}02 100%)`,
      zIndex: 1
    },

    container: {
      position: 'relative',
      zIndex: 2
    },

    textContent: {
      paddingRight: 'var(--container-padding)',
      animation: 'slideInLeft 0.8s ease-out forwards'
    },

    subtitleWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'clamp(12px, 2vw, 16px)',
      marginBottom: 'var(--text-spacing)'
    },

    accentLine: {
      width: '4px',
      height: 'clamp(20px, 3vw, 24px)',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '2px'
    },

    subtitle: {
      color: colors.accent,
      fontSize: 'var(--subtitle-size)',
      fontWeight: '700',
      letterSpacing: 'clamp(2px, 0.5vw, 4px)',
      margin: '0',
      textTransform: 'uppercase'
    },

    mainTitle: {
      fontSize: 'var(--main-title-size)',
      fontWeight: '800',
      color: colors.primary,
      marginBottom: 'var(--text-spacing)',
      lineHeight: '1.15',
      fontFamily: "'Inter', -apple-system, sans-serif",
      letterSpacing: '-0.025em'
    },

    titleUnderline: {
      width: 'clamp(80px, 12vw, 100px)',
      height: '3px',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '2px',
      marginBottom: 'var(--text-spacing)'
    },

    legalText: {
      fontSize: 'var(--body-text-size)',
      color: colors.textSecondary,
      lineHeight: '1.7',
      marginBottom: 'var(--text-spacing)',
      fontWeight: '400'
    },

    specializationCard: {
      position: 'relative',
      overflow: 'hidden'
    },

    cardAccent: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '5px',
      height: '100%',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '0 3px 3px 0'
    },

    cardBgAccent: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `
        radial-gradient(circle at 85% 20%, ${colors.accent}06 0%, transparent 50%),
        radial-gradient(circle at 15% 80%, ${colors.primary}04 0%, transparent 50%)
      `,
      zIndex: 1
    },

    cardContent: {
      position: 'relative',
      zIndex: 2
    },

    specializationText: {
      fontSize: 'var(--body-text-size)',
      color: colors.textSecondary,
      lineHeight: '1.75',
      margin: '0',
      fontWeight: '500',
      textAlign: 'justify'
    },

    // Image Containers and Images
    mainImageContainer: {
      width: '100%',
      height: 'var(--image-height)',
      borderRadius: 'clamp(16px, 3vw, 24px)',
      border: `1px solid ${colors.borderDark}`,
      boxShadow: `
        0 25px 50px ${colors.shadowMedium},
        0 10px 25px ${colors.shadowLight}
      `,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: 'slideInRight 0.8s ease-out 0.2s forwards'
    },

    mainImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block'
    },

    // Quote Section
    quoteSection: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, #0f1419 100%)`,
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden'
    },

    quoteBgTexture: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(45deg, ${colors.primary}40 25%, transparent 25%), 
        linear-gradient(-45deg, ${colors.primary}40 25%, transparent 25%), 
        linear-gradient(45deg, transparent 75%, ${colors.primary}40 75%), 
        linear-gradient(-45deg, transparent 75%, ${colors.primary}40 75%)
      `,
      backgroundSize: '60px 60px',
      backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
      opacity: 0.03,
      zIndex: 1
    },

    quoteCard: {
      background: 'rgba(255,255,255,0.06)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255,255,255,0.08)',
      color: colors.textLight,
      padding: 'var(--card-padding)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'var(--quote-height)',
      borderRadius: '20px 0 0 20px',
      position: 'relative',
      overflow: 'hidden'
    },

    quoteMark: {
      position: 'absolute',
      top: '25px',
      left: '25px',
      fontSize: '80px',
      color: colors.accent,
      opacity: 0.15,
      fontFamily: 'Georgia, serif',
      lineHeight: '0.8',
      fontWeight: '400'
    },

    quoteContent: {
      position: 'relative',
      zIndex: 2
    },

    latinQuote: {
      fontSize: 'clamp(18px, 3.2vw, 30px)',
      fontWeight: '300',
      marginBottom: '28px',
      fontFamily: "'Georgia', serif",
      fontStyle: 'italic',
      lineHeight: '1.3',
      color: colors.textLight
    },

    quoteUnderline: {
      width: '80px',
      height: '2px',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      marginBottom: '24px'
    },

    quoteTranslation: {
      fontSize: 'clamp(16px, 2.2vw, 18px)',
      opacity: 0.9,
      lineHeight: '1.6',
      margin: '0',
      fontWeight: '400'
    },

    // Promise Section
    promiseContainer: {
      background: `linear-gradient(135deg, ${colors.textLight} 0%, #f8f9fa 100%)`,
      padding: 'var(--card-padding)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: 'var(--quote-height)',
      position: 'relative',
      borderRadius: '0 20px 20px 0',
      overflow: 'hidden'
    },

    promiseBgAccent: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(135deg, ${colors.accent}04 0%, transparent 50%, ${colors.primary}02 100%)`,
      zIndex: 1
    },

    promiseContent: {
      position: 'relative',
      zIndex: 2
    },

    promiseBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '36px',
      padding: '16px 28px',
      background: `${colors.accent}12`,
      borderRadius: '30px',
      border: `1px solid ${colors.accent}20`
    },

    promiseDot: {
      width: '8px',
      height: '8px',
      backgroundColor: colors.accent,
      borderRadius: '50%'
    },

    promiseBadgeText: {
      color: colors.accent,
      fontSize: '13px',
      fontWeight: '700',
      letterSpacing: '3px',
      textTransform: 'uppercase'
    },

    promiseTitle: {
      fontSize: 'clamp(22px, 4.2vw, 34px)',
      fontWeight: '800',
      color: colors.primary,
      marginBottom: '38px',
      lineHeight: '1.2',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.02em'
    },

    benefitsList: {
      marginBottom: '32px'
    },

    benefitItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '6px',
      gap: '16px',
      padding: '6px 0',
      transition: 'all 0.3s ease'
    },

    benefitDot: {
      width: '12px',
      height: '12px',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '50%',
      flexShrink: 0,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },

    benefitText: {
      fontSize: 'var(--benefit-text-size)',
      color: colors.textSecondary,
      lineHeight: '1.5',
      fontWeight: '500'
    },

    ctaButton: {
      background: `linear-gradient(135deg, ${colors.primary} 0%, #0f1419 100%)`,
      color: colors.textLight,
      border: 'none',
      padding: '20px 40px',
      fontSize: '16px',
      fontWeight: '700',
      borderRadius: '12px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      boxShadow: `0 8px 30px ${colors.primary}30`,
      position: 'relative',
      overflow: 'hidden'
    },

    // Trust Section
    trustSection: {
      background: `linear-gradient(180deg, #ffffff 0%, ${colors.lightBg} 100%)`,
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    },

    trustImageContainer: {
      width: '100%',
      height: 'var(--image-height)',
      borderRadius: 'clamp(16px, 3vw, 24px)',
      border: `1px solid ${colors.borderDark}`,
      boxShadow: `
        0 25px 50px ${colors.shadowMedium},
        0 10px 25px ${colors.shadowLight}
      `,
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      animation: 'slideInLeft 0.8s ease-out 0.3s forwards'
    },

    trustImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
      display: 'block'
    },

    trustContent: {
      paddingLeft: 'var(--container-padding)',
      animation: 'slideInRight 0.8s ease-out 0.4s forwards'
    },

    trustBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '36px',
      padding: '16px 28px',
      background: `${colors.primary}08`,
      borderRadius: '30px',
      border: `1px solid ${colors.primary}15`
    },

    trustDot: {
      width: '8px',
      height: '8px',
      background: `linear-gradient(135deg, ${colors.primary} 0%, #0f1419 100%)`,
      borderRadius: '50%'
    },

    trustBadgeText: {
      color: colors.primary,
      fontSize: '13px',
      fontWeight: '700',
      letterSpacing: '3px',
      textTransform: 'uppercase'
    },

    trustTitle: {
      fontSize: 'clamp(28px, 4.8vw, 44px)',
      fontWeight: '800',
      color: colors.primary,
      marginBottom: '36px',
      lineHeight: '1.2',
      fontFamily: "'Inter', sans-serif",
      letterSpacing: '-0.025em'
    },

    trustUnderline: {
      width: '100px',
      height: '3px',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '2px',
      marginBottom: '36px'
    },

    trustDescription: {
      fontSize: 'clamp(16px, 2.2vw, 18px)',
      color: colors.textSecondary,
      lineHeight: '1.7',
      marginBottom: '28px',
      fontWeight: '400'
    },

    trustCard: {
      background: `${colors.accent}06`,
      border: `1px solid ${colors.accent}15`,
      borderRadius: '16px',
      marginBottom: '0',
      position: 'relative',
      overflow: 'hidden'
    },

    trustCardAccent: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '4px',
      height: '100%',
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
      borderRadius: '0 2px 2px 0'
    },

    trustAdditionalText: {
      fontSize: 'clamp(16px, 2.2vw, 18px)',
      color: colors.textSecondary,
      lineHeight: '1.7',
      margin: '0',
      fontWeight: '500',
      fontStyle: 'italic'
    }
  };

  // Event handlers for hover effects
  const handleImageHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = `
        0 35px 70px ${colors.shadowMedium},
        0 15px 35px ${colors.shadowLight}
      `;
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `
        0 25px 50px ${colors.shadowMedium},
        0 10px 25px ${colors.shadowLight}
      `;
    }
  };

  const handleBenefitHover = (e, isHover) => {
    const item = e.currentTarget;
    const dot = item.querySelector('.benefit-dot');
    
    if (isHover) {
      item.style.transform = 'translateX(8px)';
      if (dot) dot.style.transform = 'scale(1.3)';
    } else {
      item.style.transform = 'translateX(0)';
      if (dot) dot.style.transform = 'scale(1)';
    }
  };

  const handleButtonHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = `0 12px 40px ${colors.primary}50`;
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = `0 8px 30px ${colors.primary}30`;
    }
  };

  return (
    <>
      <style>{`
        .about-component {
          ${Object.entries(styles.getCSSVars()).map(([key, value]) => `${key}: ${value};`).join('\n          ')}
        }

        /* Animations */
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }


        /* Entrance Animations */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Section Animation Classes */
        .about-component section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .about-component section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Staggered animation delays for child elements */
        .about-component section.animate-in .col-12:first-child {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .about-component section.animate-in .col-12:last-child {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .about-component section,
          .about-component section.animate-in,
          .about-component section.animate-in .col-12:first-child,
          .about-component section.animate-in .col-12:last-child {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        /* Responsive Breakpoints */
        @media (max-width: 1199px) and (min-width: 768px) {
          .about-component {
            --image-height: clamp(620px, 62vw, 720px);
            --quote-height: clamp(320px, 40vw, 380px);
            --card-padding: clamp(35px, 5vw, 50px);
            --container-padding: 0;
          }
        }

        @media (max-width: 767px) {
          .about-component {
            --section-padding: clamp(60px, 10vw, 80px);
            --container-padding: 0;
            --image-height: clamp(350px, 50vw, 450px);
            --quote-height: clamp(260px, 35vw, 320px);
            --card-padding: clamp(30px, 5vw, 40px);
            --main-title-size: clamp(22px, 4vw, 28px);
            --benefit-text-size: clamp(14px, 2vw, 16px);
          }

          .quote-card-mobile { border-radius: 20px 20px 0 0; }
          .promise-container-mobile { border-radius: 0 0 20px 20px; }
        }

        @media (max-width: 575px) {
          .about-component {
            --section-padding: clamp(40px, 8vw, 60px);
            --image-height: clamp(300px, 45vw, 350px);
            --quote-height: clamp(220px, 32vw, 280px);
            --card-padding: clamp(25px, 4vw, 35px);
            --main-title-size: clamp(20px, 3.5vw, 24px);
            --benefit-text-size: 14px;
          }

          .quote-mark-mobile { font-size: 80px; top: 20px; left: 20px; }
        }

        @media (max-width: 1024px) and (min-width: 768px) and (orientation: landscape) {
          .about-component {
            --quote-height: clamp(340px, 42vw, 380px);
            --image-height: clamp(580px, 60vw, 680px);
          }
        }

        @media (max-width: 1024px) and (min-width: 768px) and (orientation: portrait) {
          .about-component {
            --quote-height: clamp(380px, 45vw, 420px);
            --image-height: clamp(680px, 70vw, 780px);
          }
        }

        /* Global transitions */
        .about-component * {
          transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
        }
      `}</style>

      <div className="about-component">
        {/* Main About Section */}
        <section id="about" ref={mainSectionRef} style={styles.mainSection}>
          <div style={styles.bgGradient} />
          
          <div className="container" style={styles.container}>
            <div className="row align-items-center g-4 g-lg-5">
              {/* Text Column */}
              <div className="col-12 col-lg-6">
                <div style={styles.textContent}>
                  <div style={styles.subtitleWrapper}>
                    <div style={styles.accentLine} />
                    <p style={styles.subtitle}>
                      {t.section.subtitle}
                    </p>
                  </div>
                  
                  <h2 style={styles.mainTitle}>
                    {t.section.title}
                  </h2>
                  
                  <div style={styles.titleUnderline} />

                  <p style={styles.legalText}>
                    {t.section.legalText}
                  </p>

                  {/* Specialization Section */}
                  <Card 
                    variant="elevated"
                    padding="medium"
                    style={styles.specializationCard}
                  >
                    <div style={styles.cardAccent} />
                    <div style={styles.cardBgAccent} />
                    
                    <div style={styles.cardContent}>
                      <p style={styles.specializationText}>
                        {t.section.specializationText}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Image Column */}
              <div className="col-12 col-lg-6">
                <div 
                  style={styles.mainImageContainer}
                  onMouseEnter={(e) => handleImageHover(e, true)}
                  onMouseLeave={(e) => handleImageHover(e, false)}
                >
                  <img
                    src="./images/about-2.webp"
                    alt={language === 'sr' ? 'Advokatska kancelarija' : 'Law Office'}
                    style={styles.mainImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section ref={quoteSectionRef} style={styles.quoteSection}>
          <div style={styles.quoteBgTexture} />
          
          <div className="container">
            <div className="row align-items-stretch g-0">
              {/* Quote Column */}
              <div className="col-12 col-lg-6">
                <Card
                  variant="glass"
                  padding="none"
                  className={window.innerWidth <= 767 ? 'quote-card-mobile' : ''}
                  style={styles.quoteCard}
                >
                  <div 
                    style={styles.quoteMark}
                    className={window.innerWidth <= 575 ? 'quote-mark-mobile' : ''}
                  >
                    "
                  </div>
                  
                  <div style={styles.quoteContent}>
                    <h3 style={styles.latinQuote}>
                      "Qui iure suo utitur, neminem laedit"
                    </h3>
                    <div style={styles.quoteUnderline} />
                    <p style={styles.quoteTranslation}>
                      {language === 'sr' 
                        ? 'Ko se služi svojim pravom, nikoga ne vredja.'
                        : 'He who exercises his right does no wrong to anyone.'
                      }
                    </p>
                  </div>
                </Card>
              </div>

              {/* Promise Column */}
              <div className="col-12 col-lg-6">
                <div 
                  style={styles.promiseContainer}
                  className={window.innerWidth <= 767 ? 'promise-container-mobile' : ''}
                >
                  <div style={styles.promiseBgAccent} />
                  
                  <div style={styles.promiseContent}>
                    <div style={styles.promiseBadge}>
                      <div style={styles.promiseDot} />
                      <span style={styles.promiseBadgeText}>
                        {language === 'sr' ? 'NAŠE OBEĆANJE' : 'OUR PROMISE'}
                      </span>
                    </div>

                    <h3 style={styles.promiseTitle}>
                      {t.section.promise}
                    </h3>

                    {/* Key benefits */}
                    <div style={styles.benefitsList}>
                      {[
                        { 
                          sr: 'Brza reakcija na vaše potrebe', 
                          en: 'Quick response to your needs' 
                        },
                        { 
                          sr: 'Kvalitetno i profesionalno rešavanje', 
                          en: 'Quality and professional solutions' 
                        },
                        { 
                          sr: 'Potpuna podrška kroz ceo proces', 
                          en: 'Complete support throughout the process' 
                        }
                      ].map((benefit, index) => (
                        <div 
                          key={index} 
                          style={styles.benefitItem}
                          onMouseEnter={(e) => handleBenefitHover(e, true)}
                          onMouseLeave={(e) => handleBenefitHover(e, false)}
                        >
                          <div 
                            className="benefit-dot"
                            style={styles.benefitDot}
                          />
                          <span style={styles.benefitText}>
                            {language === 'sr' ? benefit.sr : benefit.en}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      style={styles.ctaButton}
                      onMouseEnter={(e) => handleButtonHover(e, true)}
                      onMouseLeave={(e) => handleButtonHover(e, false)}
                      onClick={() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {language === 'sr' ? 'KONTAKTIRAJTE NAS' : 'CONTACT US'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section ref={trustSectionRef} style={styles.trustSection}>
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Image Column */}
              <div className="col-12 col-lg-6">
                <div 
                  style={styles.trustImageContainer}
                  onMouseEnter={(e) => handleImageHover(e, true)}
                  onMouseLeave={(e) => handleImageHover(e, false)}
                >
                  <img
                    src="./images/about-1.webp"
                    alt={language === 'sr' ? 'Profesionalno savetovanje' : 'Professional Consultation'}
                    style={styles.trustImage}
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="col-12 col-lg-6">
                <div style={styles.trustContent}>
                  <div style={styles.trustBadge}>
                    <div style={styles.trustDot} />
                    <span style={styles.trustBadgeText}>
                      {language === 'sr' ? 'NAŠA VREDNOST' : 'OUR VALUES'}
                    </span>
                  </div>
                  
                  <h2 style={styles.trustTitle}>
                    {t.section.mainHeading}
                  </h2>
                  
                  <div style={styles.trustUnderline} />

                  <p style={styles.trustDescription}>
                    {t.section.description}
                  </p>

                  <Card
                    variant="elevated"
                    padding="large"
                    style={styles.trustCard}
                  >
                    <div style={styles.trustCardAccent} />
                    <p style={styles.trustAdditionalText}>
                      {t.section.additionalText}
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}