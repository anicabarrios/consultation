import React from 'react';
import { Scale } from 'lucide-react';
import { colors, gradients } from '../../utils/colors';
import Button from '../Button';
import './Hero.css';

export default function Hero({ language }) {
  const content = {
    sr: {
      hero: {
        title: 'Advokatska kancelarija Ilić Lj. Suzana',
        subtitle: 'Pružamo profesionalne pravne usluge i zastupanje u svim oblastima prava',
        description: 'Naša kancelarija pruža klijentima sve vrste pravnih usluga i pravne pomoći. Uspešno zastupamo klijente u krivičnim, parničnim, vanparničnim, prekršajnim i izvršnim postupcima.',
        cta: 'Zakažite konsultacije',
        contact: 'Kontakt'
      }
    },
    en: {
      hero: {
        title: 'Ilić Lj. Suzana Law Office',
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
        id="home"
        className="hero-section"
        style={{
          background: gradients.primary,
          color: colors.textLight,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Pattern */}
        <div
          className="hero-pattern"
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
        <div className="container position-relative hero-container" style={{ 
          zIndex: 2, 
          width: '100%'
        }}>
          <div className="row align-items-center justify-content-center hero-row">
            <div className="col-12 col-lg-7 hero-content">
              <div className="hero-text-wrapper">
                <h1 className="hero-title">
                  {t.hero.title}
                </h1>
                <p className="hero-subtitle">
                  {t.hero.subtitle}
                </p>
              </div>
              <p className="hero-description">
                {t.hero.description}
              </p>
              <div className="hero-buttons d-flex flex-column flex-sm-row gap-3">
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
            <div className="col-12 col-lg-5 d-none d-lg-flex justify-content-center align-items-center hero-icon">
              <div className="hero-scale-wrapper">
                <Scale 
                  className="hero-scale-icon"
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

        {/* Thunder/Lightning Style Divider  */}
        <div className="hero-divider">
          <svg
            viewBox="0 0 1200 150"
            preserveAspectRatio="none"
            className="hero-svg"
          >
            {/* Deep background accent layer  */}
            <polygon
              points="-10,160 -10,120 300,30 700,100 1210,40 1210,160"
              style={{
                fill: colors.accent,
                opacity: 0.15
              }}
            />
            {/* Middle dramatic layer  */}
            <polygon
              points="-10,160 -10,130 350,50 750,115 1210,55 1210,160"
              style={{
                fill: colors.accent,
                opacity: 0.25
              }}
            />
            {/* Main sharp thunder shape  */}
            <polygon
              points="-10,160 -10,140 400,70 800,130 1210,70 1210,160"
              style={{
                fill: '#f8f9fa',
                opacity: 1
              }}
            />
            {/* Bold accent line  */}
            <polyline
              points="-10,140 400,70 800,130 1210,70"
              style={{
                fill: 'none',
                stroke: colors.accent,
                strokeWidth: '3',
                opacity: 0.6,
                strokeLinecap: 'round',
                strokeLinejoin: 'bevel'
              }}
            />
            {/* Additional highlight line  */}
            <polyline
              points="-10,143 400,73 800,133 1210,73"
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
      </section>
    </>
  );
}