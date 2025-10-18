import React from 'react';
import { Scale } from 'lucide-react';
import { colors, gradients } from '../utils/colors';
import Button from '../components/Button';

export default function Hero({ language }) {
  const content = {
    sr: {
      hero: {
        title: 'Advokatska kancelarija Suzana Ilić',
        subtitle: 'Pružamo profesionalne pravne usluge i zastupanje u svim oblastima prava',
        description: 'Naša kancelarija pruža klijentima sve vrste pravnih usluga i pravne pomoći. Uspešno zastupamo klijente u krivičnim, parničnim, vanparničnim, prekršajnim i izvršnim postupcima.',
        cta: 'Zakažite konsultacije',
        contact: 'Kontakt'
      }
    },
    en: {
      hero: {
        title: 'Suzana Ilić Law Office',
        subtitle: 'Professional legal services and representation in all areas of law',
        description: 'Our office provides clients with all types of legal services and legal assistance. We successfully represent clients in criminal, litigation, non-litigation, misdemeanor and enforcement proceedings.',
        cta: 'Schedule Consultation',
        contact: 'Contact'
      }
    }
  };

  const t = content[language];

  const patternSvg = `data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23c29d59" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: gradients.primary,
          color: colors.textLight,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'flex-start'
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("${patternSvg}")`,
            opacity: 0.4,
            zIndex: 1
          }}
        />

        {/* Main Content */}
        <div className="container position-relative" style={{ 
          zIndex: 2, 
          width: '100%', 
          padding: 'clamp(80px, 10vw, 120px) 15px clamp(100px, 12vw, 160px) 15px'
        }}>
          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-lg-7 mb-5 mb-lg-0">
              <div style={{ 
                marginBottom: 'clamp(30px, 5vw, 45px)',
                animation: 'slideInLeft 0.8s ease-out forwards'
              }}>
                <h1 style={{ 
                  fontSize: 'clamp(32px, 5.5vw, 60px)', 
                  fontWeight: '800', 
                  marginBottom: 'clamp(20px, 3vw, 30px)', 
                  lineHeight: '1.15',
                  letterSpacing: '-0.02em'
                }}>
                  {t.hero.title}
                </h1>
                <p style={{ 
                  fontSize: 'clamp(18px, 2.5vw, 26px)', 
                  fontWeight: '500', 
                  marginBottom: '0', 
                  color: colors.accent,
                  lineHeight: '1.45',
                  maxWidth: '700px'
                }}>
                  {t.hero.subtitle}
                </p>
              </div>
              <p style={{ 
                fontSize: 'clamp(16px, 2vw, 19px)', 
                lineHeight: '1.75', 
                marginBottom: 'clamp(35px, 5vw, 50px)', 
                maxWidth: '650px', 
                opacity: 0.95,
                animation: 'fadeInUp 0.8s ease-out 0.2s forwards'
              }}>
                {t.hero.description}
              </p>
              <div 
                className="d-flex flex-column flex-sm-row gap-3" 
                style={{ 
                  animation: 'fadeInUp 0.8s ease-out 0.4s forwards',
                  opacity: 1
                }}
              >
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => window.location.href = '#contact'}
                >
                  {t.hero.cta}
                </Button>
                <Button
                  variant="white"
                  size="large"
                  onClick={() => window.location.href = '#contact'}
                >
                  {t.hero.contact}
                </Button>
              </div>
            </div>
            <div className="col-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
              <div style={{ 
                textAlign: 'center',
                animation: 'float 6s ease-in-out infinite',
                padding: '20px'
              }}>
                <Scale 
                  size={280} 
                  style={{ 
                    color: colors.accent, 
                    opacity: 0.25,
                    filter: 'drop-shadow(0 10px 30px rgba(194, 157, 89, 0.3))',
                    maxWidth: '100%',
                    height: 'auto'
                  }} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          zIndex: 3
        }}>
          <svg
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
            style={{
              width: '100%',
              height: 'clamp(80px, 12vw, 120px)',
              display: 'block'
            }}
          >
            <polygon
              points="0,150 0,120 300,30 700,100 1200,40 1200,150"
              style={{
                fill: colors.accent,
                opacity: 0.15
              }}
            />
            <polygon
              points="0,150 0,130 350,50 750,115 1200,55 1200,150"
              style={{
                fill: colors.accent,
                opacity: 0.25
              }}
            />
            <polygon
              points="0,150 0,140 400,70 800,130 1200,70 1200,150"
              style={{
                fill: '#f8f9fa',
                opacity: 1
              }}
            />
            <polyline
              points="0,140 400,70 800,130 1200,70"
              style={{
                fill: 'none',
                stroke: colors.accent,
                strokeWidth: '3',
                opacity: 0.6,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel'
              }}
            />
            <polyline
              points="0,143 400,73 800,133 1200,73"
              style={{
                fill: 'none',
                stroke: colors.accent,
                strokeWidth: '1.5',
                opacity: 0.3,
                strokeLinecap: 'round'
              }}
            />
          </svg>
        </div>

        {/* Animations */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @media (max-width: 991px) {
            section {
              min-height: auto !important;
            }
          }
          
          @media (max-width: 576px) {
            section {
              padding-top: 60px !important;
              padding-bottom: 100px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}