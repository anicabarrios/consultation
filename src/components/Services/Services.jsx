import React from 'react';
import { 
  Users, 
  Shield, 
  Building, 
  Handshake, 
  Home, 
  Scale, 
  FileSignature, 
  Calculator, 
  Clipboard, 
  Gavel, 
  Building2, 
  MessageCircle 
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import './Services.css';

export default function Services({ language }) {
  const content = {
    sr: {
      section: {
        subtitle: 'NAŠE USLUGE',
        title: 'Oblasti rada',
        description: 'Pružamo profesionalne pravne usluge i zastupanje u svim oblastima prava sa dugogodišnjim iskustvom i posvećenosti svakom klijentu.'
      },
      services: [
        { name: 'Porodično pravo', icon: Users },
        { name: 'Krivično pravo', icon: Shield }, 
        { name: 'Korporativno pravo', icon: Building },
        { name: 'Radno pravo', icon: Handshake },
        { name: 'Nasledno pravo', icon: Home },
        { name: 'Prekršajno pravo', icon: Scale },
        { name: 'Ugovori', icon: FileSignature },
        { name: 'Naknada štete', icon: Calculator },
        { name: 'Upravni postupak', icon: Clipboard },
        { name: 'Upravni spor', icon: Gavel },
        { name: 'Nekretnine', icon: Building2 },
        { name: 'Medijacija', icon: MessageCircle }
      ]
    },
    en: {
      section: {
        subtitle: 'OUR SERVICES',
        title: 'Law Office Practice Areas',
        description: 'We provide professional legal services and representation in all areas of law with years of experience and dedication to each client.'
      },
      services: [
        { name: 'Family Law', icon: Users },
        { name: 'Criminal Law', icon: Shield },
        { name: 'Corporate Law', icon: Building }, 
        { name: 'Labor Law', icon: Handshake },
        { name: 'Inheritance Law', icon: Home },
        { name: 'Misdemeanor Law', icon: Scale },
        { name: 'Contracts', icon: FileSignature },
        { name: 'Damage Compensation', icon: Calculator },
        { name: 'Administrative Procedure', icon: Clipboard },
        { name: 'Administrative Dispute', icon: Gavel },
        { name: 'Real Estate', icon: Building2 },
        { name: 'Mediation', icon: MessageCircle }
      ]
    }
  };

  const t = content[language];

  const dynamicStyles = {
    section: {
      background: `linear-gradient(180deg, ${colors.lightBg} 0%, #ffffff 50%, ${colors.lightBg} 100%)`
    },
    backgroundPattern: {
      background: `
        radial-gradient(circle at 20% 30%, ${colors.accent}04 0%, transparent 50%),
        radial-gradient(circle at 80% 70%, ${colors.primary}03 0%, transparent 50%)
      `
    },
    accentLine: {
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`
    },
    subtitle: {
      color: colors.accent
    },
    title: {
      color: colors.primary
    },
    titleUnderline: {
      background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`
    },
    description: {
      color: colors.textSecondary
    },
    serviceButton: {
      backgroundColor: colors.textLight,
      boxShadow: `0 2px 8px ${colors.shadowLight}`
    },
    iconContainer: {
      background: `linear-gradient(135deg, ${colors.accent}15 0%, ${colors.accent}08 100%)`,
      border: `1px solid ${colors.accent}15`,
      boxShadow: `0 4px 12px ${colors.accent}10`
    },
    serviceIcon: {
      color: colors.accent
    },
    serviceTitle: {
      color: colors.primary
    }
  };

  // Event handlers for hover effects
  const handleServiceHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.boxShadow = `
        0 20px 60px rgba(0, 0, 0, 0.12), 
        0 8px 25px rgba(0, 0, 0, 0.08)
      `;
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.zIndex = '10';
      
      const container = e.currentTarget.querySelector('.icon-container');
      if (container) {
        container.style.transform = 'scale(1.05)';
        container.style.boxShadow = `0 8px 20px rgba(0, 0, 0, 0.1)`;
      }
    } else {
      e.currentTarget.style.boxShadow = `0 2px 8px ${colors.shadowLight}`;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.zIndex = '1';
      
      const container = e.currentTarget.querySelector('.icon-container');
      if (container) {
        container.style.transform = 'scale(1)';
        container.style.boxShadow = `0 4px 12px ${colors.accent}10`;
      }
    }
  };

  return (
    <>
      {/* Services Section */}
      <section 
        id="services"
        style={dynamicStyles.section}
      >
        {/* Background Pattern */}
        <div 
          className="services-background-pattern"
          style={dynamicStyles.backgroundPattern}
        />
        
        <div className="container services-container">
          {/* Section Header */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 col-lg-8 text-center">
              <div className="services-header-accent">
                <div 
                  className="services-accent-line"
                  style={dynamicStyles.accentLine}
                />
                <p 
                  className="services-subtitle"
                  style={dynamicStyles.subtitle}
                >
                  {t.section.subtitle}
                </p>
                <div 
                  className="services-accent-line"
                  style={dynamicStyles.accentLine}
                />
              </div>
              
              <h2 
                className="services-title"
                style={dynamicStyles.title}
              >
                {t.section.title}
              </h2>
              
              <div 
                className="services-title-underline"
                style={dynamicStyles.titleUnderline}
              />

              <p 
                className="services-description"
                style={dynamicStyles.description}
              >
                {t.section.description}
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row mb-5 services-grid">
            {t.services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div key={index} className="col-12 col-sm-6 col-lg-3" style={{ padding: '0' }}>
                  <div
                    className="service-button"
                    style={{
                      ...dynamicStyles.serviceButton,
                      border: `1px solid rgba(224, 224, 224, 0.4)`,
                      borderRadius: '0',
                      padding: '80px 40px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '280px',
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 1,
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => handleServiceHover(e, true)}
                    onMouseLeave={(e) => handleServiceHover(e, false)}
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {/*Icon Container */}
                    <div 
                      className="icon-container"
                      style={{
                        ...dynamicStyles.iconContainer,
                        width: '72px',
                        height: '72px',
                        borderRadius: '18px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '28px',
                        position: 'relative'
                      }}
                    >
                      <IconComponent 
                        className="service-icon"
                        size={28}
                        style={{ 
                          ...dynamicStyles.serviceIcon,
                          strokeWidth: 2
                        }} 
                      />
                    </div>

                    {/*Service Title */}
                    <h3 
                      className="service-title" 
                      style={{
                        ...dynamicStyles.serviceTitle,
                        fontSize: '22px',
                        fontWeight: '700',
                        margin: '0',
                        lineHeight: '1.3',
                        textAlign: 'center',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {service.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}