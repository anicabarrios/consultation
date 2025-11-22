import React from 'react';
import { 
  Scale, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import BackToTop from '../Backtotop/Backtotop.jsx';
import './Footer.css';

export default function Footer({ language }) {
  const currentYear = new Date().getFullYear();

  const content = {
    sr: {
      brand: {
        name: 'Ilić Lj. Suzana',
        title: 'Advokat',
        description: 'Profesionalne pravne usluge sa dugogodišnjim iskustvom i posvećenošću svakom klijentu.'
      },
      quickLinks: {
        title: 'Brzi linkovi',
        links: [
          { text: 'Početna', href: '#home' },
          { text: 'O nama', href: '#about' },
          { text: 'Usluge', href: '#services' },
          { text: 'Kontakt', href: '#contact' }
        ]
      },
      contact: {
        title: 'Kontakt informacije',
        address: 'Sokolska 1/21, Niš',
        phone: '++381 63 108 9990',
        email: 'suzana.ilic@legal.rs'
      },
      bottom: {
        copyright: `© ${currentYear} Advokatska kancelarija Ilić Lj. Suzana. Sva prava zadržana.`
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
          { text: 'Home', href: '#home' },
          { text: 'About', href: '#about' },
          { text: 'Services', href: '#services' },
          { text: 'Contact', href: '#contact' }
        ]
      },
      contact: {
        title: 'Contact Information',
        address: 'Sokolska 1/21, Niš',
        phone: '+381 63 108 9990',
        email: 'suzana.ilic@legal.rs'
      },
      bottom: {
        copyright: `© ${currentYear} Ilić Lj. Suzana Law Office. All rights reserved.`
      }
    }
  };

  const t = content[language];

  // Dynamic styles using colors.js
  const footerStyles = {
    '--footer-primary-bg': colors.primaryBg,
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
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSmoothScroll = (href, e) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    scrollToTop();
  };

  return (
    <>
      <footer 
        className="footer-component footer-section"
        style={footerStyles}
      >
        <div className="container footer-container">
          <div className="row footer-content g-4 g-lg-5">
            {/* Brand Section */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="footer-brand">
                <div 
                  className="footer-logo"
                  onClick={handleLogoClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLogoClick(e);
                    }
                  }}
                  aria-label={language === 'sr' ? 'Idi na početak stranice' : 'Go to top of page'}
                >
                  <Scale className="footer-logo-icon" />
                  <div className="footer-brand-text">
                    <h3>{t.brand.name}</h3>
                    <p>{t.brand.title}</p>
                  </div>
                </div>
                
                <p className="footer-brand-description">
                  {t.brand.description}
                </p>
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
                          onClick={(e) => handleSmoothScroll(link.href, e)}
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
                    <div className="footer-contact-content">
                      <span className="footer-contact-text">{t.contact.address}</span>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <Phone size={16} />
                    </div>
                    <div className="footer-contact-content">
                      <a 
                        href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                        className="footer-contact-link"
                        aria-label={`${language === 'sr' ? 'Pozovi' : 'Call'} ${t.contact.phone}`}
                      >
                        {t.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <Mail size={16} />
                    </div>
                    <div className="footer-contact-content">
                      <a 
                        href={`mailto:${t.contact.email}`}
                        className="footer-contact-link"
                        aria-label={`${language === 'sr' ? 'Pošalji email na' : 'Send email to'} ${t.contact.email}`}
                      >
                        {t.contact.email}
                      </a>
                    </div>
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
              <p className="footer-copyright">
                {t.bottom.copyright}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTop language={language} />
    </>
  );
}