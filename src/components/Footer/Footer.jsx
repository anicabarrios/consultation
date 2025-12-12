import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { colors } from '../../utils/colors.js';
import BackToTop from '../Backtotop/Backtotop.jsx';
import './Footer.css';

export default function Footer({ language = 'sr' }) {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const content = {
    sr: {
      brand: {
        name: 'Ilić Lj. Suzana',
        title: 'Advokatska kancelarija',
        description: 'Pružamo pouzdane pravne usluge zasnovane na dugogodišnjoj stručnosti, poverenju i potpunoj posvećenosti zaštiti interesa naših klijenata.'
      },
      quickLinks: {
        title: 'Brzi linkovi',
        links: [
          { text: 'Početna', href: '/' },
          { text: 'O nama', href: '/about' },
          { text: 'Usluge', href: '/services' },
          { text: 'Pitajte Advokata', href: '/qa' },
          { text: 'Kontakt', href: '/contact' }
        ]
      },
      contact: {
        title: 'Kontakt informacije',
        address: 'Sokolska 1/21, Niš',
        phone: '+381 63 108 9990',
        email: 'suzana.ilic@legal.rs'
      },
      copyright: `© ${currentYear} Advokatska kancelarija Ilić Lj. Suzana. Sva prava zadržana.`,
      aria: {
        goToTop: 'Idi na početak stranice',
        call: 'Pozovi',
        email: 'Pošalji email na'
      }
    },
    en: {
      brand: {
        name: 'Ilić Lj. Suzana',
        title: 'Attorney at Law',
        description: 'We provide reliable legal services based on years of expertise, trust, and complete dedication to protecting our clients\' interests.'
      },
      quickLinks: {
        title: 'Quick Links',
        links: [
          { text: 'Home', href: '/' },
          { text: 'About', href: '/about' },
          { text: 'Services', href: '/services' },
          { text: 'Q&A', href: '/qa' },
          { text: 'Contact', href: '/contact' }
        ]
      },
      contact: {
        title: 'Contact Information',
        address: 'Sokolska 1/21, Niš',
        phone: '+381 63 108 9990',
        email: 'suzana.ilic@legal.rs'
      },
      copyright: `© ${currentYear} Ilić Lj. Suzana Law Office. All rights reserved.`,
      aria: {
        goToTop: 'Go to top of page',
        call: 'Call',
        email: 'Send email to'
      }
    }
  };

  const t = content[language] || content.sr;

  // CSS Custom Properties from colors.js
  const footerStyles = {
    '--footer-primary-bg': colors.primaryBg || colors.primary,
    '--footer-accent': colors.accent,
    '--footer-accent-hover': colors.accentHover,
    '--footer-accent-muted': colors.accentMuted,
    '--footer-text-light': colors.textLight,
    '--footer-text-muted': colors.textMuted,
    '--footer-pattern-accent': colors.patternAccent,
    '--footer-border': colors.border,
    '--footer-shadow-light': colors.shadowLight
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isHomePage = () => {
    return location.pathname === '/' || location.pathname === '/index.html' || location.pathname === '';
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHomePage()) {
      scrollToTop();
    } else {
      navigate('/');
    }
  };

  const handleKeyDown = (e, callback) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      callback(e);
    }
  };

  return (
    <>
      <footer className="footer-component footer-section" style={footerStyles}>
        <div className="container footer-container">
          <div className="row footer-content g-4 g-lg-5">
            {/* Brand Section */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="footer-brand">
                <div 
                  className="footer-logo"
                  onClick={handleLogoClick}
                  onKeyDown={(e) => handleKeyDown(e, handleLogoClick)}
                  role="button"
                  tabIndex={0}
                  aria-label={t.aria.goToTop}
                >
                  <Scale className="footer-logo-icon" />
                  <div className="footer-brand-text">
                    <h3>{t.brand.name}</h3>
                    <p>{t.brand.title}</p>
                  </div>
                </div>
                <p className="footer-brand-description">{t.brand.description}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-12 col-md-6 col-lg-3">
              <div className="footer-links">
                <h4 className="footer-section-title">{t.quickLinks.title}</h4>
                <nav className="footer-navigation" role="navigation" aria-label={t.quickLinks.title}>
                  <ul className="footer-links-list">
                    {t.quickLinks.links.map((link, index) => (
                      <li key={index}>
                        <Link 
                          to={link.href}
                          className="footer-link"
                        >
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-12 col-lg-4">
              <div className="footer-contact">
                <h4 className="footer-section-title">{t.contact.title}</h4>
                <div className="footer-contact-items">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <MapPin size={16} />
                    </div>
                    <span className="footer-contact-text">{t.contact.address}</span>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <Phone size={16} />
                    </div>
                    <a 
                      href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                      className="footer-contact-link"
                      aria-label={`${t.aria.call} ${t.contact.phone}`}
                    >
                      {t.contact.phone}
                    </a>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <Mail size={16} />
                    </div>
                    <a 
                      href={`mailto:${t.contact.email}`}
                      className="footer-contact-link"
                      aria-label={`${t.aria.email} ${t.contact.email}`}
                    >
                      {t.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="footer-copyright-section">
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright">{t.copyright}</p>
            </div>
          </div>
        </div>
      </div>

      <BackToTop language={language} />
    </>
  );
}