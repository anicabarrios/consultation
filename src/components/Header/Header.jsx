import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Scale, Phone, Mail, Globe, Menu, X } from 'lucide-react';
import { colors, commonStyles } from '../../utils/colors';
import Button from '../Button';
import './Header.css';

export default function Header({ language, setLanguage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(0);
  const location = useLocation();

  // Scroll detection with smooth progression
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = Math.min(window.scrollY / 150, 1); 
      setIsScrolled(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const content = {
    sr: {
      nav: {
        home: 'Početna',
        services: 'Usluge',
        about: 'O nama',
        qa: 'Pitajte Advokata',
        contact: 'Kontakt'
      },
      cta: 'Zakažite konsultacije',
      lawyer: 'Advokatska kancelarija'
    },
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        qa: 'Q&A',
        contact: 'Contact'
      },
      cta: 'Schedule Consultation',
      lawyer: 'Law Office'
    }
  };

  const t = content[language];

  const pageRoutes = {
    home: '/',
    services: '/services',
    about: '/about',
    qa: '/qa',
    contact: '/contact'
  };

  const colorScheme = {
    logoTextStyle: {
      color: isScrolled > 0.5 ? colors.accentDark : colors.textLight
    },
    lawyerTitleStyle: {
      color: isScrolled > 0.5 ? colors.textSecondary : colors.accent
    }
  };

  const activeColorScheme = colorScheme; 

  // Dynamic styles based on scroll position
  const topBarStyle = {
    backgroundColor: colors.primary,
    color: colors.textLight,
    padding: '8px 0',
    fontSize: '14px',
    minHeight: '40px',
    display: 'flex',
    alignItems: 'center',
    transform: `translateY(-${isScrolled * 100}%)`
  };

  const mainHeaderStyle = {
    backgroundColor: `rgba(255, 255, 255, ${isScrolled * 0.95})`,
    boxShadow: isScrolled > 0.3 ? `0 8px 32px rgba(0, 0, 0, ${isScrolled * 0.1})` : 'none',
    top: `${40 - (isScrolled * 40)}px`,
    borderBottom: isScrolled > 0.5 ? `1px solid rgba(224, 224, 224, ${isScrolled * 0.6})` : 'none'
  };

  const textColor = `rgb(${26 + (255 - 26) * (1 - isScrolled)}, ${26 + (255 - 26) * (1 - isScrolled)}, ${46 + (255 - 46) * (1 - isScrolled)})`;

  const navLinkStyle = {
    ...commonStyles.navLink,
    fontSize: '16px',
    color: textColor,
    fontWeight: '500',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  // Icon hover handler
  const handleIconHover = (e, isHover) => {
    e.target.style.color = isHover ? colors.accentHover : colors.accent;
    e.target.style.transform = isHover ? 'scale(1.1)' : 'scale(1)';
  };

  // Nav link hover handler
  const handleNavLinkHover = (e, isHover) => {
    e.target.style.color = isHover ? colors.accentHover : textColor;
  };

  const iconColor = isScrolled > 0.5 ? colors.primary : colors.textLight;

  return (
    <>
      {/* Top Bar */}
      <div className="header-top-bar" style={topBarStyle}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center header-top-content">
            <div className="d-flex align-items-center header-contact-info">
              <div className="d-flex align-items-center contact-item">
                <Phone 
                  className="contact-icon"
                  style={{ color: colors.accent }}
                  onMouseEnter={(e) => handleIconHover(e, true)}
                  onMouseLeave={(e) => handleIconHover(e, false)}
                />
                <span className="contact-text">+381 63 108 9990</span>
              </div>
              <div className="d-flex align-items-center contact-item contact-email">
                <Mail 
                  className="contact-icon"
                  style={{ color: colors.accent }}
                  onMouseEnter={(e) => handleIconHover(e, true)}
                  onMouseLeave={(e) => handleIconHover(e, false)}
                />
                <span className="contact-text">advsuzanailic@gmail.com</span>
              </div>
            </div>
            <div className="d-flex align-items-center language-selector">
              <Globe 
                className="globe-icon"
                style={{ color: colors.accent }}
                onMouseEnter={(e) => handleIconHover(e, true)}
                onMouseLeave={(e) => handleIconHover(e, false)}
              />
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
        className={`main-header ${isScrolled > 0.5 ? 'scrolled' : 'transparent'}`} 
        style={mainHeaderStyle}
      >
        <div className="container">
          <nav className="d-flex justify-content-between align-items-center header-nav">
            {/* Logo - Links to home page */}
            <Link 
              to="/" 
              className="d-flex align-items-center header-logo" 
              style={{ textDecoration: 'none' }}
            >
              <Scale 
                className="logo-icon" 
                style={{ color: colors.accent }} 
              />
              <div className="logo-text">
                <h1 className="lawyer-name" style={activeColorScheme.logoTextStyle}>
                  Ilić Lj. Suzana
                </h1>
                <p className="lawyer-title" style={activeColorScheme.lawyerTitleStyle}>
                  {t.lawyer}
                </p>
              </div>
            </Link>

            {/* Desktop Menu  */}
            <div className="d-none d-lg-flex gap-4 align-items-center desktop-menu">
              {Object.entries(t.nav).map(([key, value]) => (
                <Link
                  key={key}
                  to={pageRoutes[key]}
                  className="nav-link"
                  style={navLinkStyle}
                  onMouseOver={(e) => handleNavLinkHover(e, true)}
                  onMouseOut={(e) => handleNavLinkHover(e, false)}
                >
                  {value}
                </Link>
              ))}
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="primary"
                  size="medium"
                >
                  {t.cta}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="d-lg-none mobile-menu-btn"
              style={{
                background: 'transparent',
                border: 'none',
                padding: '8px',
                cursor: 'pointer',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease'
              }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              {mobileMenuOpen ? 
                <X className="menu-icon" color={iconColor} style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} /> : 
                <Menu className="menu-icon" color={iconColor} style={{ transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} />
              }
            </button>
          </nav>

          {/* Mobile Menu  */}
          {mobileMenuOpen && (
            <div className="d-lg-none mobile-menu">
              <div className="mobile-menu-container">
                <div className="d-flex flex-column mobile-menu-items">
                  {Object.entries(t.nav).map(([key, value]) => (
                    <Link 
                      key={key}
                      to={pageRoutes[key]}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {value}
                    </Link>
                  ))}
                  <div className="mobile-cta-container">
                    <Link 
                      to="/contact" 
                      style={{ textDecoration: 'none' }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Button
                        variant="primary"
                        size="medium"
                        fullWidth={true}
                      >
                        {t.cta}
                      </Button>
                    </Link>
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