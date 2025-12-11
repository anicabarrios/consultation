import React from 'react';
import { 
  User, Award, Scale, Briefcase, GraduationCap,
  Star, Shield, Target, Heart, CheckCircle
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import HeroPages from '../../components/HeroPages/HeroPages';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import './AboutPage.css';

export default function AboutPage({ language }) {
  const content = {
    sr: {
      hero: { title: 'O nama' },
      lawyer: {
        badge: 'OSNIVAČ I ADVOKAT',
        name: 'Suzana Ilić',
        title: 'Advokat',
        description: 'Suzana Ilić je osnivač Advokatske kancelarije Ilić Lj. Suzana sa dugogodišnjim iskustvom u pravnoj praksi. Posvećena je pružanju visokokvalitetnih pravnih usluga i zaštiti interesa svojih klijenata.',
        qualifications: 'Kvalifikacije',
        qualificationsList: [
          'Diplomirani pravnik',
          'Položen pravosudni ispit',
          'Član Advokatske komore Niš',
          'Dugogodišnje iskustvo u pravnoj praksi'
        ],
        expertise: 'Specijalizacije',
        expertiseList: [
          'Korporativno pravo',
          'Ugovorno pravo',
          'Naknada štete',
          'Prekršajno pravo',
          'Porodično pravo',
          'Nasledno pravo'
        ]
      },
      values: {
        badge: 'NAŠE VREDNOSTI',
        title: 'Principi koji nas vode',
        description: 'Gradimo odnose sa klijentima zasnovane na poverenju i iskrenoj pažnji, uvek štiteći njihov interes i reputaciju.',
        items: [
          { icon: Shield, title: 'Profesionalnost', description: 'Posvećeni smo najvišim standardima pravne prakse i kontinuiranom usavršavanju.' },
          { icon: Heart, title: 'Posvećenost', description: 'Svaki klijent dobija našu punu pažnju i individualni pristup njegovom slučaju.' },
          { icon: Target, title: 'Efikasnost', description: 'Težimo brzom i kvalitetnom rešavanju pravnih problema sa najboljim ishodom.' },
          { icon: CheckCircle, title: 'Integritet', description: 'Gradimo odnose zasnovane na poverenju, transparentnosti i etičkom postupanju.' }
        ]
      },
      promise: {
        badge: 'NAŠE OBEĆANJE',
        title: 'Šta možete očekivati',
        description: 'Naša advokatska kancelarija će vam pružiti brz, kvalitetan i profesionalan rad u rešavanju vaših pravnih problema.',
        points: [
          'Besplatne inicijalne konsultacije',
          'Transparentno formiranje cena',
          'Redovno izveštavanje o toku predmeta',
          'Dostupnost i brza komunikacija',
          'Zaštita poverljivosti podataka',
          'Posvećenost vašim interesima'
        ]
      }
    },
    en: {
      hero: { title: 'About Us' },
      lawyer: {
        badge: 'FOUNDER & ATTORNEY',
        name: 'Suzana Ilić',
        title: 'Attorney at Law',
        description: 'Suzana Ilić is the founder of Ilić Lj. Suzana Law Office with many years of experience in legal practice. She is dedicated to providing high-quality legal services and protecting the interests of her clients.',
        qualifications: 'Qualifications',
        qualificationsList: [
          'Law degree graduate',
          'Passed bar exam',
          'Member of Niš Bar Association',
          'Years of experience in legal practice'
        ],
        expertise: 'Specializations',
        expertiseList: [
          'Corporate Law',
          'Contract Law',
          'Damage Compensation',
          'Misdemeanor Law',
          'Family Law',
          'Inheritance Law'
        ]
      },
      values: {
        badge: 'OUR VALUES',
        title: 'Principles that guide us',
        description: 'We build relationships with clients based on trust and sincere attention, always protecting their interests and reputation.',
        items: [
          { icon: Shield, title: 'Professionalism', description: 'We are committed to the highest standards of legal practice and continuous improvement.' },
          { icon: Heart, title: 'Dedication', description: 'Every client receives our full attention and individual approach to their case.' },
          { icon: Target, title: 'Efficiency', description: 'We strive for fast and quality resolution of legal issues with the best outcome.' },
          { icon: CheckCircle, title: 'Integrity', description: 'We build relationships based on trust, transparency and ethical conduct.' }
        ]
      },
      promise: {
        badge: 'OUR PROMISE',
        title: 'What you can expect',
        description: 'Our law office will provide you with fast, quality and professional work in solving your legal problems.',
        points: [
          'Free initial consultations',
          'Transparent pricing',
          'Regular case progress reports',
          'Availability and quick communication',
          'Data confidentiality protection',
          'Dedication to your interests'
        ]
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
    '--text-primary': colors.textPrimary,
    '--light-bg': colors.lightBg,
    '--border-dark': colors.borderDark,
    '--shadow-light': colors.shadowLight,
    '--shadow-medium': colors.shadowMedium
  };

  return (
    <div className="about-page" style={cssVars}>
      <HeroPages
        icon={User}
        title={t.hero.title}
        language={language}
        iconSize={48}
      />

      {/* Lawyer Profile Section - Fade up animation */}
      <AnimatedSection 
        animation="fade-up" 
        threshold={0.1}
        rootMargin="0px 0px -80px 0px"
        duration="normal"
      >
        <section className="about-lawyer-section">
          <div className="about-lawyer-pattern" aria-hidden="true" />
          <div className="container">
            <div className="about-lawyer-wrapper">
              <div className="about-lawyer-visual">
                <div className="about-lawyer-frame">
                  <div className="about-lawyer-photo">
                    <User className="about-photo-icon" color={colors.accent} strokeWidth={0.5} />
                    <span className="about-photo-text">
                      {language === 'sr' ? 'Fotografija' : 'Photo'}
                    </span>
                  </div>
                  <div className="about-lawyer-frame-badge">
                    <Scale size={16} color={colors.textLight} strokeWidth={2} />
                  </div>
                </div>
              </div>

              <div className="about-lawyer-content">
                <div className="about-lawyer-badge">
                  <Award size={14} color={colors.accent} strokeWidth={2} />
                  <span>{t.lawyer.badge}</span>
                </div>

                <h2 className="about-lawyer-name">{t.lawyer.name}</h2>
                <p className="about-lawyer-title">{t.lawyer.title}</p>
                <p className="about-lawyer-description">{t.lawyer.description}</p>

                <div className="about-credentials">
                  <div className="about-credential-group">
                    <div className="about-credential-header">
                      <GraduationCap size={18} color={colors.accent} strokeWidth={2} />
                      <h4>{t.lawyer.qualifications}</h4>
                    </div>
                    <div className="about-credential-tags">
                      {t.lawyer.qualificationsList.map((item, idx) => (
                        <span key={idx} className="about-credential-tag">
                          <CheckCircle size={12} color={colors.accent} strokeWidth={2} />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="about-credential-group">
                    <div className="about-credential-header">
                      <Briefcase size={18} color={colors.accent} strokeWidth={2} />
                      <h4>{t.lawyer.expertise}</h4>
                    </div>
                    <div className="about-credential-tags about-credential-tags--accent">
                      {t.lawyer.expertiseList.map((item, idx) => (
                        <span key={idx} className="about-credential-tag about-credential-tag--accent">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Values Section - Fade in animation */}
      <AnimatedSection 
        animation="fade-in" 
        threshold={0.15}
        rootMargin="0px 0px -60px 0px"
        duration="slow"
      >
        <section className="about-values-section">
          <div className="about-values-pattern" aria-hidden="true" />
          <div className="container">
            <div className="row justify-content-center mb-5">
              <div className="col-12 col-lg-8 text-center">
                <div className="about-values-badge">
                  <Star size={14} color={colors.accent} strokeWidth={2} />
                  <span>{t.values.badge}</span>
                </div>
                <h2 className="about-values-title">{t.values.title}</h2>
                <p className="about-values-description">{t.values.description}</p>
              </div>
            </div>

            <div className="row g-4">
              {t.values.items.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="col-12 col-sm-6 col-lg-3">
                    <div className="about-value-card">
                      <div className="about-value-icon">
                        <IconComponent size={28} color={colors.accent} strokeWidth={1.5} />
                      </div>
                      <h3 className="about-value-title">{item.title}</h3>
                      <p className="about-value-description">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Promise Section - Fade up animation */}
      <AnimatedSection 
        animation="fade-up" 
        threshold={0.1}
        rootMargin="0px 0px -80px 0px"
        duration="normal"
      >
        <section className="about-promise-section">
          <div className="about-promise-pattern" aria-hidden="true" />
          <div className="container">
            <div className="row align-items-center g-4 g-lg-5">
              <div className="col-12 col-lg-5">
                <div className="about-promise-content">
                  <div className="about-promise-badge">
                    <Shield size={14} color={colors.accent} strokeWidth={2} />
                    <span>{t.promise.badge}</span>
                  </div>
                  <h2 className="about-promise-title">{t.promise.title}</h2>
                  <p className="about-promise-description">{t.promise.description}</p>
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <div className="about-promise-grid">
                  {t.promise.points.map((point, index) => (
                    <div key={index} className="about-promise-item">
                      <div className="about-promise-number">{index + 1}</div>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}