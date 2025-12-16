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
        description: 'Advokat Suzana Ilić je osnivač Advokatske kancelarije Ilić Lj. Suzana. Profesionalnu karijeru gradila je više od tri decenije u bankarskom sektoru, gde je obavljala rukovodeće funkcije u oblasti pravnih poslova i usklađenosti poslovanja (Compliance).',
        description2: 'Stečeno iskustvo obuhvata širok spektar pravnih oblasti: bankarsko i finansijsko pravo, korporativno pravo, ugovorno pravo, parnične i izvršne postupke, regulatornu usklađenost i sprečavanje pranja novca. U svom radu posebno ceni profesionalnu etiku, poverljivost i individualan pristup svakom klijentu.',
        qualifications: 'Kvalifikacije',
        qualificationsList: [
          'Diplomirani pravnik',
          'Položen pravosudni ispit',
          'Član Advokatske komore Niš',
          'Preko 30 godina pravnog iskustva'
        ],
        expertise: 'Oblasti rada',
        expertiseList: [
          'Korporativno pravo',
          'Usklađenost poslovanja (Compliance)',
          'Bankarsko i finansijsko pravo',
          'Ugovorno pravo',
          'Parnični i izvršni postupci',
          'Sprečavanje pranja novca (AML)'
        ]
      },
      values: {
        badge: 'NAŠE VREDNOSTI',
        title: 'Principi koji nas vode',
        description: 'Gradimo dugoročne odnose sa klijentima zasnovane na poverenju, profesionalizmu i posvećenosti njihovim interesima.',
        items: [
          { icon: Shield, title: 'Profesionalnost', description: 'Posvećeni smo najvišim standardima pravne struke i kontinuiranom stručnom usavršavanju.' },
          { icon: Heart, title: 'Posvećenost', description: 'Svakom klijentu pristupamo individualno, sa punom pažnjom i angažovanjem na njegovom predmetu.' },
          { icon: Target, title: 'Efikasnost', description: 'Težimo optimalnim rešenjima koja štite interese klijenata uz racionalno upravljanje resursima.' },
          { icon: CheckCircle, title: 'Integritet', description: 'Poslujemo transparentno i etično, gradeći odnose zasnovane na uzajamnom poverenju.' }
        ]
      },
      promise: {
        badge: 'NAŠE OBEĆANJE',
        title: 'Šta možete očekivati',
        description: 'Pružamo pravne usluge visokog kvaliteta, prilagođene specifičnim potrebama svakog klijenta.',
        points: [
          'Inicijalne konsultacije bez naknade',
          'Transparentno formiranje cena usluga',
          'Redovno izveštavanje o toku predmeta',
          'Dostupnost i pravovremena komunikacija',
          'Stroga zaštita poverljivih podataka',
          'Potpuna posvećenost vašim interesima'
        ]
      }
    },
    en: {
      hero: { title: 'About Us' },
      lawyer: {
        badge: 'FOUNDER & ATTORNEY',
        name: 'Suzana Ilić',
        title: 'Attorney at Law',
        description: 'Attorney Suzana Ilić is the founder of Ilić Lj. Suzana Law Office. She built her professional career over three decades in the banking sector, holding executive positions in legal affairs and regulatory compliance.',
        description2: 'Her experience encompasses a wide range of legal areas, including banking and financial law, corporate law, contract law, litigation and enforcement proceedings, as well as regulatory compliance and anti-money laundering. Her legal practice is characterized by dedication to providing expert legal support while consistently upholding standards of professional ethics, confidentiality, and accountability.',
        qualifications: 'Qualifications',
        qualificationsList: [
          'Law Degree',
          'Bar Examination',
          'Member of Niš Bar Association',
          'Over 30 years of legal experience'
        ],
        expertise: 'Practice Areas',
        expertiseList: [
          'Corporate Law',
          'Regulatory Compliance',
          'Banking & Financial Law',
          'Contract Law',
          'Litigation & Enforcement',
          'Anti-Money Laundering (AML)'
        ]
      },
      values: {
        badge: 'OUR VALUES',
        title: 'Principles that guide us',
        description: 'We build long-term relationships with clients based on trust, professionalism, and dedication to their interests.',
        items: [
          { icon: Shield, title: 'Professionalism', description: 'We are committed to the highest standards of legal practice and continuous professional development.' },
          { icon: Heart, title: 'Dedication', description: 'We approach each client individually, with full attention and commitment to their case.' },
          { icon: Target, title: 'Efficiency', description: 'We strive for optimal solutions that protect client interests while managing resources effectively.' },
          { icon: CheckCircle, title: 'Integrity', description: 'We operate transparently and ethically, building relationships based on mutual trust.' }
        ]
      },
      promise: {
        badge: 'OUR PROMISE',
        title: 'What you can expect',
        description: 'We provide high-quality legal services tailored to the specific needs of each client.',
        points: [
          'Complimentary initial consultations',
          'Transparent fee structure',
          'Regular case progress updates',
          'Accessibility and timely communication',
          'Strict confidentiality protection',
          'Complete dedication to your interests'
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
                    <img 
                      src="/images/profile.webp" 
                      alt={language === 'sr' ? 'Advokat Suzana Ilić' : 'Attorney Suzana Ilić'}
                      className="about-photo-image"
                    />
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
                <p className="about-lawyer-description" style={{ marginBottom: '12px' }}>{t.lawyer.description}</p>
                <p className="about-lawyer-description">{t.lawyer.description2}</p>

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