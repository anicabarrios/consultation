import React from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, CheckCircle, Scale, ArrowLeft,
  BookOpen, Briefcase, ListChecks, MessageSquare, Layers
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import { getServiceBySlug, getAllServices } from '../../utils/serviceData.js';
import Button from '../../components/Button.jsx';
import Card from '../../components/Card.jsx';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import './ServicePage.css';

export default function ServicePage({ language }) {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const serviceData = getServiceBySlug(serviceSlug, language);
  const allServices = getAllServices(language);

  if (!serviceData) {
    return <Navigate to="/" replace />;
  }

  const { content, icon: IconComponent } = serviceData;
  const otherServices = allServices.filter(s => s.slug !== serviceData.id);

  const cssVars = {
    '--primary-color': colors.primary,
    '--accent-color': colors.accent,
    '--accent-hover': colors.accentHover,
    '--accent-muted': colors.accentMuted || '#b8ad8d',
    '--text-primary': colors.textPrimary,
    '--text-secondary': colors.textSecondary,
    '--text-light': colors.textLight,
    '--text-muted': colors.textMuted,
    '--light-bg': colors.lightBg,
    '--border-dark': colors.borderDark,
    '--shadow-light': colors.shadowLight,
    '--shadow-medium': colors.shadowMedium
  };

  const labels = {
    sr: {
      overview: 'Pregled oblasti',
      services: 'Naše usluge u ovoj oblasti',
      contact: 'Brzi kontakt',
      otherServices: 'Druge oblasti rada',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adresa',
      consultation: 'Zakažite konsultacije',
      backToServices: 'Nazad na usluge',
      ourRepresentation: 'Naše zastupanje',
      practiceArea: 'Oblast rada'
    },
    en: {
      overview: 'Area Overview',
      services: 'Our Services in This Area',
      contact: 'Quick Contact',
      otherServices: 'Other Practice Areas',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      consultation: 'Schedule Consultation',
      backToServices: 'Back to Services',
      ourRepresentation: 'Our Representation',
      practiceArea: 'Practice Area'
    }
  };

  const t = labels[language];
  const contactInfo = {
    phone: '+381 63 108 9990',
    email: 'suzana.ilic@legal.rs',
    address: 'Sokolska 1/21, Niš'
  };

  const navigateToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  return (
    <div className="service-page-wrapper" style={cssVars}>
      <main className="service-page-main">
        {/* Hero Section - Scale in animation */}
        <AnimatedSection 
          animation="scale-in" 
          threshold={0.1}
          rootMargin="0px 0px -50px 0px"
          duration="normal"
        >
          <section className="service-hero-section">
            <div className="service-hero-pattern" />
            <div className="container service-hero-container">
              <button 
                className="service-back-button"
                onClick={() => navigate('/services')}
                aria-label={t.backToServices}
              >
                <span className="back-button-icon">
                  <ArrowLeft size={16} strokeWidth={2.5} />
                </span>
                <span className="back-button-text">{t.backToServices}</span>
              </button>

              <div className="row align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="service-category-label">
                    <div className="service-category-line" />
                    <span className="service-category-text">{t.practiceArea}</span>
                  </div>
                  <h1 className="service-hero-title">{content.name}</h1>
                  <p className="service-hero-subtitle">{content.subtitle}</p>
                  <p className="service-hero-description">{content.description}</p>
                </div>

                <div className="col-12 col-lg-4 d-none d-lg-block">
                  <div className="service-hero-icon-wrapper">
                    <div className="service-hero-icon-circle">
                      <IconComponent size={80} color={colors.accent} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Content Section */}
        <section className="service-content-section">
          <div className="container">
            <div className="row g-4 g-lg-5">
              {/* Main Content - Fade from left */}
              <AnimatedSection 
                animation="fade-left" 
                threshold={0.1}
                rootMargin="0px 0px -80px 0px"
                duration="normal"
                className="col-12 col-lg-8 order-1"
              >
                <Card variant="elevated" padding="large" className="service-overview-card">
                  <div className="service-overview-header">
                    <div className="service-overview-icon">
                      <BookOpen size={24} color={colors.textLight} strokeWidth={2} />
                    </div>
                    <h2 className="service-section-title">{t.overview}</h2>
                  </div>
                  
                  <div className="service-overview-content">
                    <p className="service-text-lead">{content.overview}</p>
                    <p className="service-text-secondary">{content.details}</p>
                    
                    {content.approach && (
                      <div className="service-approach-section">
                        <div className="approach-header-row">
                          <div className="approach-icon-badge">
                            <Briefcase size={18} color={colors.textLight} strokeWidth={2} />
                          </div>
                          <h3 className="approach-label">{t.ourRepresentation}</h3>
                        </div>
                        <p className="approach-text">{content.approach}</p>
                      </div>
                    )}
                  </div>
                </Card>

                <Card variant="elevated" padding="large" className="service-list-card">
                  <div className="service-list-header">
                    <div className="service-list-icon">
                      <ListChecks size={20} color={colors.accent} strokeWidth={2} />
                    </div>
                    <h2 className="service-section-title">{t.services}</h2>
                  </div>

                  <div className="service-items-grid">
                    {content.services.map((service, index) => (
                      <div key={index} className="service-item">
                        <div className="service-item-icon">
                          <CheckCircle size={16} color={colors.accent} />
                        </div>
                        <span className="service-item-text">{service}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </AnimatedSection>

              {/* Sidebar - Fade from right */}
              <AnimatedSection 
                animation="fade-right" 
                threshold={0.1}
                rootMargin="0px 0px -80px 0px"
                duration="normal"
                className="col-12 col-lg-4 order-2"
              >
                <div className="service-sidebar">
                  <Card variant="elevated" padding="large" className="service-contact-card">
                    <div className="sidebar-card-header">
                      <div className="sidebar-card-icon">
                        <MessageSquare size={18} color={colors.textLight} strokeWidth={2} />
                      </div>
                      <h3 className="sidebar-card-title">{t.contact}</h3>
                    </div>

                    <div className="contact-items-wrapper">
                      {[
                        { icon: Phone, label: t.phone, value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
                        { icon: Mail, label: t.email, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
                        { icon: MapPin, label: t.address, value: contactInfo.address, isAddress: true }
                      ].map(({ icon: Icon, label, value, href, isAddress }, idx) => (
                        <div key={idx} className="contact-item">
                          <div className="contact-icon-wrapper">
                            <Icon size={18} />
                          </div>
                          <div className="contact-item-content">
                            <p className="contact-label">{label}</p>
                            {href ? (
                              <a href={href} className="contact-value">{value}</a>
                            ) : (
                              <span className={`contact-value ${isAddress ? 'contact-address' : ''}`}>{value}</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="primary"
                      size="medium"
                      fullWidth
                      onClick={() => navigateToSection('contact')}
                    >
                      {t.consultation}
                    </Button>
                  </Card>

                  <Card variant="elevated" padding="large" className="service-other-card">
                    <div className="sidebar-card-header">
                      <div className="sidebar-card-icon">
                        <Layers size={18} color={colors.textLight} strokeWidth={2} />
                      </div>
                      <h3 className="sidebar-card-title">{t.otherServices}</h3>
                    </div>

                    <div className="other-services-list">
                      {otherServices.slice(0, 8).map((service, index) => (
                        <div 
                          key={index}
                          className="other-service-item"
                          onClick={() => navigate(`/services/${service.slug}`)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && navigate(`/services/${service.slug}`)}
                        >
                          <div className="other-service-icon">
                            <Scale size={14} color={colors.accent} />
                          </div>
                          <span className="other-service-name">{service.name}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}