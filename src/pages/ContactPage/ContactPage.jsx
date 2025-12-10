import React from 'react';
import { Mail, MapPin, Navigation, ExternalLink } from 'lucide-react';
import { colors } from '../../utils/colors.js';
import HeroPages from '../../components/HeroPages/HeroPages';
import Contact from '../../components/Contact/Contact';
import './ContactPage.css';

export default function ContactPage({ language }) {
  const content = {
    sr: {
      heroTitle: 'Kontaktirajte nas',
      map: {
        subtitle: 'KAKO DO NAS',
        description: 'Posetite nas u centru Niša. Nalazimo se na pristupačnoj lokaciji sa dobrom povezanošću javnim prevozom.',
        address: 'Sokolska 1/21, Niš, Srbija',
        directionsBtn: 'Otvori mape',
        directionsAria: 'Otvori Google Maps za uputstva',
        mapTitle: 'Lokacija kancelarije na mapi'
      }
    },
    en: {
      heroTitle: 'Contact Us',
      map: {
        subtitle: 'FIND US',
        description: 'Visit us in the center of Niš. We are located in an accessible location with good public transport connections.',
        address: 'Sokolska 1/21, Niš, Serbia',
        directionsBtn: 'Open Maps',
        directionsAria: 'Open Google Maps for directions',
        mapTitle: 'Office location on map'
      }
    }
  };

  const t = content[language];
  
  const cssVars = {
    '--accent-color': colors.accent,
    '--accent-hover': colors.accentHover,
    '--primary-color': colors.primary,
    '--text-light': colors.textLight,
    '--text-secondary': colors.textSecondary,
    '--light-bg': colors.lightBg
  };

  const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Sokolska+1%2C+Niš%2C+Serbia';
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.5!2d21.8958!3d43.3209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0a3c0f67e01%3A0x8f9b8a8a8a8a8a8a!2sSokolska%2C%20Ni%C5%A1%2C%20Serbia!5e0!3m2!1sen!2srs!4v1699999999999!5m2!1sen!2srs';

  return (
    <div className="contact-page" style={cssVars}>
      <HeroPages
        icon={Mail}
        title={t.heroTitle}
        language={language}
        iconSize={48}
      />

      <Contact language={language} />

      <section className="contact-map-section">
        <div className="contact-map-pattern" aria-hidden="true" />
        
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 text-center">
              <div className="contact-map-subtitle-wrapper">
                <div className="contact-map-accent-line" />
                <p className="contact-map-subtitle">{t.map.subtitle}</p>
                <div className="contact-map-accent-line" />
              </div>
              <p className="contact-map-description">{t.map.description}</p>
            </div>
          </div>

          <div className="contact-map-container">
            <iframe
              className="contact-map-iframe"
              src={mapEmbedUrl}
              title={t.map.mapTitle}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            <div className="contact-map-overlay">
              <div className="contact-map-overlay-content">
                <div className="contact-map-address">
                  <div className="contact-map-address-icon">
                    <MapPin size={20} color={colors.textLight} strokeWidth={2} />
                  </div>
                  <span>{t.map.address}</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-directions-btn"
                  aria-label={t.map.directionsAria}
                >
                  <Navigation size={16} strokeWidth={2} />
                  {t.map.directionsBtn}
                  <ExternalLink size={14} strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}