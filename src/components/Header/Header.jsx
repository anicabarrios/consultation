import React, { useState, useEffect } from 'react';
import { Scale, Phone, Mail, Globe, Menu, X } from 'lucide-react';
import { colors, commonStyles } from '../../utils/colors';
import Button from '../Button';
import './Header.css';

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection with smooth progression
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollProgress = Math.min(scrollTop / 150, 1); 
      setIsScrolled(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  
  const headerStyles = {
    topBar: {
      backgroundColor: colors.primary,
      color: colors.textLight,
      padding: '8px 0',
      fontSize: '14px',
      minHeight: '40px',
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1001,
      transform: `translateY(-${isScrolled * 100}%)`,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    mainHeader: {
      backgroundColor: `rgba(255, 255, 255, ${isScrolled * 0.95})`,
      boxShadow: isScrolled > 0.3 ? `0 8px 32px rgba(0, 0, 0, ${isScrolled * 0.1})` : 'none',
      position: 'fixed',
      top: `${40 - (isScrolled * 40)}px`,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      borderBottom: isScrolled > 0.5 ? `1px solid rgba(224, 224, 224, ${isScrolled * 0.6})` : 'none'
    },
    logoText: {
      color: isScrolled > 0.5 ? 
        colors.textPrimary : 
        colors.accent, 
      transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    lawyerTitle: {
      color: isScrolled > 0.5 ? 
        colors.textSecondary : 
        'rgba(194, 157, 89, 0.8)', 
      transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    navLink: {
      ...commonStyles.navLink,
      fontSize: '16px',
      color: `rgb(${26 + (255 - 26) * (1 - isScrolled)}, ${26 + (255 - 26) * (1 - isScrolled)}, ${46 + (255 - 46) * (1 - isScrolled)})`,
      fontWeight: '500',
      transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  };

  const handleNavLinkHover = (e, isHover) => {
    if (isHover) {
      e.target.style.color = '#b8ad8d';
    } else {
      e.target.style.color = `rgb(${26 + (255 - 26) * (1 - isScrolled)}, ${26 + (255 - 26) * (1 - isScrolled)}, ${46 + (255 - 46) * (1 - isScrolled)})`;
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="header-top-bar" style={headerStyles.topBar}>
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
      <header className={`main-header ${isScrolled > 0.5 ? 'scrolled' : 'transparent'}`} style={headerStyles.mainHeader}>
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center header-nav">
            <div className="d-flex align-items-center header-logo">
              <Scale 
                className="logo-icon" 
                style={{ 
                  color: colors.accent, 
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }} 
              />
              <div className="logo-text">
                <h1 className="lawyer-name" style={headerStyles.logoText}>
                  Ilić Lj. Suzana
                </h1>
                <p className="lawyer-title" style={headerStyles.lawyerTitle}>
                  {t.lawyer}
                </p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="d-none d-lg-flex gap-4 align-items-center desktop-menu">
              <a 
                href="#home" 
                className="nav-link"
                style={headerStyles.navLink}
                onMouseOver={(e) => handleNavLinkHover(e, true)}
                onMouseOut={(e) => handleNavLinkHover(e, false)}
              >
                {t.nav.home}
              </a>
              <a 
                href="#services" 
                className="nav-link"
                style={headerStyles.navLink}
                onMouseOver={(e) => handleNavLinkHover(e, true)}
                onMouseOut={(e) => handleNavLinkHover(e, false)}
              >
                {t.nav.services}
              </a>
              <a 
                href="#about" 
                className="nav-link"
                style={headerStyles.navLink}
                onMouseOver={(e) => handleNavLinkHover(e, true)}
                onMouseOut={(e) => handleNavLinkHover(e, false)}
              >
                {t.nav.about}
              </a>
              <a 
                href="#contact" 
                className="nav-link"
                style={headerStyles.navLink}
                onMouseOver={(e) => handleNavLinkHover(e, true)}
                onMouseOut={(e) => handleNavLinkHover(e, false)}
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
                <X className="menu-icon" color={isScrolled > 0.5 ? colors.primary : colors.textLight} style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} /> : 
                <Menu className="menu-icon" color={isScrolled > 0.5 ? colors.primary : colors.textLight} style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
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