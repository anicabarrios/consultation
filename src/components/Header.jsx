import React, { useState } from 'react';
import { Scale, Phone, Mail, Globe, Menu, X } from 'lucide-react';
import { colors, commonStyles } from '../utils/colors';
import Button from '../components/Button';

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const content = {
    sr: {
      nav: {
        home: 'Početna',
        services: 'Usluge',
        about: 'O nama',
        contact: 'Kontakt'
      },
      cta: 'Zakažite konsultacije',
      lawyer: 'Advokat'
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      cta: 'Schedule Consultation',
      lawyer: 'Attorney at Law'
    }
  };

  const t = content[language];

  return (
    <>
      {/* Top Bar */}
      <div style={{
        backgroundColor: colors.primary,
        color: colors.textLight,
        padding: '10px 0',
        fontSize: '14px'
      }}>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="d-flex flex-wrap gap-3">
              <div className="d-flex align-items-center gap-2">
                <Phone size={16} />
                <span>+381 11 234 5678</span>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Mail size={16} />
                <span>suzana.ilic@legal.rs</span>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Globe size={16} />
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span
                  onClick={() => setLanguage('sr')}
                  style={{
                    cursor: 'pointer',
                    fontWeight: language === 'sr' ? '700' : '400',
                    color: language === 'sr' ? colors.textLight : 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                    textDecoration: language === 'sr' ? 'underline' : 'none',
                  }}
                  onMouseOver={(e) => {
                    if (language !== 'sr') e.target.style.color = colors.textLight;
                  }}
                  onMouseOut={(e) => {
                    if (language !== 'sr') e.target.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  SR
                </span>
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>|</span>
                <span
                  onClick={() => setLanguage('en')}
                  style={{
                    cursor: 'pointer',
                    fontWeight: language === 'en' ? '700' : '400',
                    color: language === 'en' ? colors.textLight : 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s',
                    textDecoration: language === 'en' ? 'underline' : 'none',
                  }}
                  onMouseOver={(e) => {
                    if (language !== 'en') e.target.style.color = colors.textLight;
                  }}
                  onMouseOut={(e) => {
                    if (language !== 'en') e.target.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header style={{
        backgroundColor: colors.textLight,
        ...commonStyles.headerShadow,
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center py-3">
            <div className="d-flex align-items-center gap-3">
              <Scale size={40} style={{ color: colors.accent }} />
              <div>
                <h1 style={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: '700',
                  color: colors.primary
                }}>
                  Suzana Ilić
                </h1>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  color: colors.textSecondary
                }}>
                  {t.lawyer}
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-4 align-items-center">
              <a href="#home"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.home}
              </a>
              <a href="#services"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.services}
              </a>
              <a href="#about"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.about}
              </a>
              <a href="#contact"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.contact}
              </a>
              <Button
                variant="primary"
                size="medium"
                onClick={() => window.location.href = '#contact'}
              >
                {t.cta}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="small"
              className="d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              icon={mobileMenuOpen ?
                <X size={30} color={colors.primary} /> :
                <Menu size={30} color={colors.primary} />
              }
            />
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="d-lg-none pb-3">
              <div className="d-flex flex-column gap-3">
                <a href="#home"
                  style={{ ...commonStyles.navLink, fontSize: '16px', paddingLeft: '60px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.home}
                </a>
                <a href="#services"
                  style={{ ...commonStyles.navLink, fontSize: '16px', paddingLeft: '60px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.services}
                </a>
                <a href="#about"
                  style={{ ...commonStyles.navLink, fontSize: '16px', paddingLeft: '60px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.about}
                </a>
                <a href="#contact"
                  style={{ ...commonStyles.navLink, fontSize: '16px', paddingLeft: '60px' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
                <Button
                  variant="primary"
                  size="medium"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.href = '#contact';
                  }}
                >
                  {t.cta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}