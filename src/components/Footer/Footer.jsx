import React from 'react';
import { Scale, Phone, Mail, MapPin } from 'lucide-react';
import { colors } from '../../utils/colors.js';
import BackToTop from '../Backtotop/Backtotop.jsx';
import './Footer.css';

export default function Footer({ language = 'sr' }) {
  const currentYear = new Date().getFullYear();

  const content = {
    sr: {
      brand: {
        name: 'Ilić Lj. Suzana',
        title: 'Advokatska kancelarija',
        description: 'Profesionalne pravne usluge sa dugogodišnjim iskustvom i posvećenošću svakom klijentu.'
      },
      quickLinks: {
        title: 'Brzi linkovi',
        links: [
          { text: 'Početna', href: '/', type: 'home' },
          { text: 'O nama', href: '#about', type: 'anchor' },
          { text: 'Usluge', href: '/services', type: 'page' },
          { text: 'Kontakt', href: '#contact', type: 'anchor' }
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
        description: 'Professional legal services with years of experience and dedication to each client.'
      },
      quickLinks: {
        title: 'Quick Links',
        links: [
          { text: 'Home', href: '/', type: 'home' },
          { text: 'About', href: '#about', type: 'anchor' },
          { text: 'Services', href: '/services', type: 'page' },
          { text: 'Contact', href: '#contact', type: 'anchor' }
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
    const path = window.location.pathname;
    return path === '/' || path === '/index.html' || path === '';
  };

  const handleLinkClick = (link, e) => {
    const { href, type } = link;

    // Handle home link
    if (type === 'home') {
      e.preventDefault();
      if (isHomePage()) {
        // On home page - scroll to top
        scrollToTop();
      } else {
        // On another page - navigate to home
        window.location.href = '/';
      }
      return;
    }

    // Handle page navigation (like /services)
    if (type === 'page') {
      // Let the browser handle normal navigation
      // No need to prevent default
      return;
    }

    // Handle anchor links (#about, #contact, etc.)
    if (type === 'anchor' && href.startsWith('#')) {
      e.preventDefault();
      
      if (isHomePage()) {
        // On home page - smooth scroll to section
        const targetElement = document.getElementById(href.substring(1));
        if (targetElement) {
          const headerHeight = 80;
          const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      } else {
        // On another page - navigate to home with hash
        window.location.href = '/' + href;
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHomePage()) {
      scrollToTop();
    } else {
      window.location.href = '/';
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
                        <a 
                          href={link.href}
                          className="footer-link"
                          onClick={(e) => handleLinkClick(link, e)}
                        >
                          {link.text}
                        </a>
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