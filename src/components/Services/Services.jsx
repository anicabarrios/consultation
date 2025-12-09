import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Shield, Building, Briefcase, Home, Scale, 
  FileSignature, Calculator, Clipboard, Gavel, Building2, MessageCircle 
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import './Services.css';

export default function Services({ language }) {
  const navigate = useNavigate();

  const serviceUrlMap = {
    'Porodično pravo': 'porodicno-pravo',
    'Krivično pravo': 'krivicno-pravo', 
    'Korporativno pravo': 'korporativno-pravo',
    'Radno pravo': 'radno-pravo',
    'Nasledno pravo': 'nasledno-pravo',
    'Prekršajno pravo': 'prekrsajno-pravo',
    'Ugovori': 'ugovori',
    'Naknada štete': 'naknada-stete',
    'Upravni postupak': 'upravni-postupak',
    'Upravni spor': 'upravni-spor',
    'Nekretnine': 'nekretnine',
    'Medijacija': 'medijacija',
    'Family Law': 'family-law',
    'Criminal Law': 'criminal-law',
    'Corporate Law': 'corporate-law',
    'Labor Law': 'labor-law',
    'Inheritance Law': 'inheritance-law',
    'Misdemeanor Law': 'misdemeanor-law',
    'Contract Law': 'contract-law',
    'Damage Compensation': 'damage-compensation',
    'Administrative Procedure': 'administrative-procedure',
    'Administrative Dispute': 'administrative-dispute',
    'Real Estate': 'real-estate',
    'Mediation': 'mediation'
  };

  const content = {
    sr: {
      subtitle: 'NAŠE USLUGE',
      services: [
        { name: 'Porodično pravo', icon: Users },
        { name: 'Krivično pravo', icon: Shield }, 
        { name: 'Korporativno pravo', icon: Building },
        { name: 'Radno pravo', icon: Briefcase },
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
      subtitle: 'OUR SERVICES',
      services: [
        { name: 'Family Law', icon: Users },
        { name: 'Criminal Law', icon: Shield },
        { name: 'Corporate Law', icon: Building }, 
        { name: 'Labor Law', icon: Briefcase },
        { name: 'Inheritance Law', icon: Home },
        { name: 'Misdemeanor Law', icon: Scale },
        { name: 'Contract Law', icon: FileSignature },
        { name: 'Damage Compensation', icon: Calculator },
        { name: 'Administrative Procedure', icon: Clipboard },
        { name: 'Administrative Dispute', icon: Gavel },
        { name: 'Real Estate', icon: Building2 },
        { name: 'Mediation', icon: MessageCircle }
      ]
    }
  };

  const t = content[language];

  // Handle service navigation
  const handleServiceClick = (serviceName) => {
    const serviceSlug = serviceUrlMap[serviceName];
    if (serviceSlug) {
      navigate(`/services/${serviceSlug}`);
    }
  };

  // Handle hover effects
  const handleServiceHover = (e, isHover) => {
    const currentTarget = e.currentTarget;
    const iconContainer = currentTarget.querySelector('.icon-container');
    
    if (isHover) {
      currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.12), 0 8px 25px rgba(0, 0, 0, 0.08)';
      currentTarget.style.transform = 'translateY(-2px)';
      currentTarget.style.zIndex = '10';
      
      if (iconContainer) {
        iconContainer.style.transform = 'scale(1.05)';
        iconContainer.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.1)';
      }
    } else {
      currentTarget.style.boxShadow = `0 2px 8px ${colors.shadowLight}`;
      currentTarget.style.transform = 'translateY(0)';
      currentTarget.style.zIndex = '1';
      
      if (iconContainer) {
        iconContainer.style.transform = 'scale(1)';
        iconContainer.style.boxShadow = `0 4px 12px ${colors.accent}10`;
      }
    }
  };

  return (
    <section 
      id="services"
      style={{
        background: `linear-gradient(180deg, ${colors.lightBg} 0%, #ffffff 50%, ${colors.lightBg} 100%)`,
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Pattern */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 30%, ${colors.accent}04 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${colors.primary}03 0%, transparent 50%)
          `,
          zIndex: 1
        }}
      />
      
      <div className="container services-container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <div className="services-header-accent" style={{ justifyContent: 'center' }}>
              <div 
                style={{
                  width: '4px',
                  height: '24px',
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
                  borderRadius: '2px'
                }}
              />
              <p 
                style={{
                  color: colors.accent,
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '4px',
                  margin: '0',
                  textTransform: 'uppercase'
                }}
              >
                {t.subtitle}
              </p>
              <div 
                style={{
                  width: '4px',
                  height: '24px',
                  background: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
                  borderRadius: '2px'
                }}
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row services-grid">
          {t.services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div key={index} className="col-12 col-sm-6 col-lg-3" style={{ padding: '0' }}>
                <div
                  className="service-button"
                  style={{
                    backgroundColor: colors.textLight,
                    border: '1px solid rgba(224, 224, 224, 0.4)',
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
                    transform: 'translateY(0)',
                    boxShadow: `0 2px 8px ${colors.shadowLight}`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  onMouseEnter={(e) => handleServiceHover(e, true)}
                  onMouseLeave={(e) => handleServiceHover(e, false)}
                  onClick={() => handleServiceClick(service.name)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceClick(service.name);
                    }
                  }}
                  aria-label={`${language === 'sr' ? 'Saznajte više o' : 'Learn more about'} ${service.name}`}
                >
                  {/* Icon Container */}
                  <div 
                    className="icon-container"
                    style={{
                      width: '72px',
                      height: '72px',
                      background: `linear-gradient(135deg, ${colors.accent}15 0%, ${colors.accent}08 100%)`,
                      borderRadius: '18px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '28px',
                      position: 'relative',
                      border: `1px solid ${colors.accent}15`,
                      boxShadow: `0 4px 12px ${colors.accent}10`,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <IconComponent 
                      size={28}
                      style={{ 
                        color: colors.accent,
                        strokeWidth: 2,
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                      }} 
                    />
                  </div>

                  {/* Service Title */}
                  <h3 
                    style={{
                      fontSize: '22px',
                      fontWeight: '700',
                      color: colors.primary,
                      margin: '0',
                      lineHeight: '1.3',
                      textAlign: 'center',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
  );
}