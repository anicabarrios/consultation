import React, { useState } from 'react';
import { Scale, Phone, Mail, Globe, Menu, X } from 'lucide-react';
import { colors, commonStyles } from '../../utils/colors';
import Button from '../Button';
import './Header.css';

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
      <div 
        className="header-top-bar"
        style={{ 
          backgroundColor: colors.primary, 
          color: colors.textLight, 
          padding: '8px 0', 
          fontSize: '14px',
          minHeight: '40px',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center header-top-content">
            <div className="d-flex align-items-center header-contact-info">
              <div className="d-flex align-items-center contact-item">
                <Phone className="contact-icon" />
                <span className="contact-text">+381 11 234 5678</span>
              </div>
              <div className="d-flex align-items-center contact-item contact-email">
                <Mail className="contact-icon" />
                <span className="contact-text">suzana.ilic@legal.rs</span>
              </div>
            </div>
            <div className="d-flex align-items-center language-selector">
              <Globe className="globe-icon" />
              <div className="language-options">
                <span
                  className={`language-option ${language === 'sr' ? 'active' : ''}`}
                  onClick={() => setLanguage('sr')}
                >
                  SR
                </span>
                <span className="language-divider">|</span>
                <span
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => setLanguage('en')}
                >
                  EN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className="main-header"
        style={{ 
          backgroundColor: colors.textLight, 
          ...commonStyles.headerShadow, 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000 
        }}
      >
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center header-nav">
            <div className="d-flex align-items-center header-logo">
              <Scale className="logo-icon" style={{ color: colors.accent }} />
              <div className="logo-text">
                <h1 className="lawyer-name">
                  Ilić Lj. Suzana
                </h1>
                <p className="lawyer-title">
                  {t.lawyer}
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-4 align-items-center desktop-menu">
              <a 
                href="#home" 
                className="nav-link"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.home}
              </a>
              <a 
                href="#services" 
                className="nav-link"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.services}
              </a>
              <a 
                href="#about" 
                className="nav-link"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.about}
              </a>
              <a 
                href="#contact" 
                className="nav-link"
                style={{ ...commonStyles.navLink, fontSize: '16px' }}
                onMouseOver={(e) => e.target.style.color = colors.accent}
                onMouseOut={(e) => e.target.style.color = colors.textPrimary}
              >
                {t.nav.contact}
              </a>
              <Button
                variant="primary"
                size="medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.cta}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="small"
              className="d-lg-none mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              icon={mobileMenuOpen ? 
                <X className="menu-icon" color={colors.primary} /> : 
                <Menu className="menu-icon" color={colors.primary} />
              }
            />
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="d-lg-none mobile-menu">
              <div className="mobile-menu-container">
                <div className="d-flex flex-column mobile-menu-items">
                  <a 
                    href="#home" 
                    className="mobile-nav-link"
                    style={{ ...commonStyles.navLink }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.home}
                  </a>
                  <a 
                    href="#services" 
                    className="mobile-nav-link"
                    style={{ ...commonStyles.navLink }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.services}
                  </a>
                  <a 
                    href="#about" 
                    className="mobile-nav-link"
                    style={{ ...commonStyles.navLink }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.about}
                  </a>
                  <a 
                    href="#contact" 
                    className="mobile-nav-link"
                    style={{ ...commonStyles.navLink }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav.contact}
                  </a>
                  <div className="mobile-cta-container">
                    <Button
                      variant="primary"
                      size="medium"
                      fullWidth={true}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      {t.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}    
        </div>
      </header>
    </>
  );
}