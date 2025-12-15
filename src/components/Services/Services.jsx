import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, Building, Briefcase, Scale, FileSignature, 
  Calculator, Clipboard, Gavel, Landmark,
  CreditCard, FileText, ShieldCheck
} from 'lucide-react';
import { colors } from '../../utils/colors';
import { useScrollAnimation } from '../../utils/Usescrollanimation';
import './Services.css';

// Individual Service Card Component with scroll animation
function ServiceCard({ service, index, language, onServiceClick, onServiceHover }) {
  const IconComponent = service.icon;
  
  // Add scroll animation with staggered delay
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px',
    triggerOnce: true
  });

  // Calculate staggered delay (100ms per card)
  const animationDelay = `${index * 100}ms`;
  
  // Base animation styles
  const cardAnimationStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${animationDelay}`,
  };

  return (
    <div 
      ref={ref}
      className="col-12 col-sm-6 col-lg-3" 
      style={{ padding: '0', ...cardAnimationStyle }}
    >
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
        onMouseEnter={(e) => onServiceHover(e, true)}
        onMouseLeave={(e) => onServiceHover(e, false)}
        onClick={() => onServiceClick(service.name)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onServiceClick(service.name);
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
}

export default function Services({ language }) {
  const navigate = useNavigate();

  const serviceUrlMap = {
    // Serbian URLs
    'Krivično pravo': 'krivicno-pravo',
    'Korporativno pravo': 'korporativno-pravo',
    'Radno pravo': 'radno-pravo',
    'Naknada štete': 'naknada-stete',
    'Upravni postupak': 'upravni-postupak',
    'Upravni spor': 'upravni-spor',
    'Građansko i obligaciono pravo': 'gradjansko-obligaciono-pravo',
    'Privredno pravo': 'privredno-pravo',
    'Bankarsko i finansijsko pravo': 'bankarsko-finansijsko-pravo',
    'Izvršni postupci': 'izvrsni-postupci',
    'Ugovorno pravo': 'ugovorno-pravo',
    'Usklađenost poslovanja': 'uskladjenost-poslovanja',
    // English URLs
    'Criminal Law': 'criminal-law',
    'Corporate Law': 'corporate-law',
    'Labor Law': 'labor-law',
    'Damage Compensation': 'damage-compensation',
    'Administrative Procedure': 'administrative-procedure',
    'Administrative Dispute': 'administrative-dispute',
    'Civil and Obligation Law': 'civil-obligation-law',
    'Commercial Law': 'commercial-law',
    'Banking and Financial Law': 'banking-financial-law',
    'Enforcement Proceedings': 'enforcement-proceedings',
    'Contract Law': 'contract-law',
    'Business Compliance': 'business-compliance'
  };

  const content = {
    sr: {
      subtitle: 'NAŠE USLUGE',
      services: [
        { name: 'Građansko i obligaciono pravo', icon: Scale },
        { name: 'Krivično pravo', icon: Shield },
        { name: 'Privredno pravo', icon: Landmark },
        { name: 'Korporativno pravo', icon: Building },
        { name: 'Radno pravo', icon: Briefcase },
        { name: 'Bankarsko i finansijsko pravo', icon: CreditCard },
        { name: 'Izvršni postupci', icon: FileText },
        { name: 'Ugovorno pravo', icon: FileSignature },
        { name: 'Naknada štete', icon: Calculator },
        { name: 'Upravni postupak', icon: Clipboard },
        { name: 'Upravni spor', icon: Gavel },
        { name: 'Usklađenost poslovanja', icon: ShieldCheck }
      ]
    },
    en: {
      subtitle: 'OUR SERVICES',
      services: [
        { name: 'Civil and Obligation Law', icon: Scale },
        { name: 'Criminal Law', icon: Shield },
        { name: 'Commercial Law', icon: Landmark },
        { name: 'Corporate Law', icon: Building },
        { name: 'Labor Law', icon: Briefcase },
        { name: 'Banking and Financial Law', icon: CreditCard },
        { name: 'Enforcement Proceedings', icon: FileText },
        { name: 'Contract Law', icon: FileSignature },
        { name: 'Damage Compensation', icon: Calculator },
        { name: 'Administrative Procedure', icon: Clipboard },
        { name: 'Administrative Dispute', icon: Gavel },
        { name: 'Business Compliance', icon: ShieldCheck }
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

        {/* Services Grid with Staggered Card Animations */}
        <div className="row services-grid">
          {t.services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              language={language}
              onServiceClick={handleServiceClick}
              onServiceHover={handleServiceHover}
            />
          ))}
        </div>
      </div>
    </section>
  );
}