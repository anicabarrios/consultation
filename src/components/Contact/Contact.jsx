import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  ChevronDown
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import Button from '../Button';
import Card from '../Card';
import './Contact.css';

export default function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    legalArea: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const content = {
    sr: {
      section: {
        subtitle: 'KONTAKT',
        title: 'Stupite u kontakt sa nama',
        description: 'Spremni smo da odgovorimo na sva vaša pitanja i pružimo profesionalnu pravnu pomoć.'
      },
      info: {
        contact: {
          title: 'Kontakt informacije',
          address: 'Sokolska 1/21, Niš',
          phone: '+381 63 108 9990',
          email: 'suzana.ilic@legal.rs'
        },
        hours: {
          title: 'Radno vreme',
          weekdays: 'Pon - Pet: 09:00 - 17:00',
          saturday: 'Subota: 10:00 - 14:00',
          sunday: 'Nedelja: Zatvoreno',
          note: 'Hitni slučajevi po dogovoru'
        }
      },
      form: {
        title: 'Pošaljite nam poruku',
        subtitle: 'Besplatna konsultacija',
        description: 'Popunite formu ispod i kontaktiraćemo vas u najkraćem roku.',
        fields: {
          name: { label: 'Ime i prezime', placeholder: 'Vaše puno ime' },
          email: { label: 'Email adresa', placeholder: 'vasa.email@adresa.com' },
          phone: { label: 'Broj telefona', placeholder: '+381 60 123 4567' },
          subject: { label: 'Predmet', placeholder: 'Ukratko opišite razlog kontakta' },
          legalArea: {
            label: 'Oblast prava',
            placeholder: 'Izaberite oblast prava',
            options: [
              'Porodično pravo', 'Krivično pravo', 'Korporativno pravo',
              'Radno pravo', 'Nasledno pravo', 'Prekršajno pravo',
              'Ugovorno pravo', 'Naknada štete', 'Nekretnine', 'Ostalo'
            ]
          },
          message: { 
            label: 'Detaljno objašnjenje', 
            placeholder: 'Opišite vašu situaciju što detaljnije...' 
          }
        },
        submit: 'Pošaljite poruku',
        submitting: 'Šaljemo...',
        success: 'Vaša poruka je uspešno poslata!',
        error: 'Došlo je do greške. Pokušajte ponovo.'
      }
    },
    en: {
      section: {
        subtitle: 'CONTACT',
        title: 'Get in touch with us',
        description: 'We are ready to answer all your questions and provide professional legal assistance.'
      },
      info: {
        contact: {
          title: 'Contact Information',
          address: 'Sokolska 1/21, Niš',
          phone: '+381 63 108 9990',
          email: 'suzana.ilic@legal.rs'
        },
        hours: {
          title: 'Working Hours',
          weekdays: 'Mon - Fri: 09:00 - 17:00',
          saturday: 'Saturday: 10:00 - 14:00',
          sunday: 'Sunday: Closed',
          note: 'Emergency cases by appointment'
        }
      },
      form: {
        title: 'Send us a message',
        subtitle: 'Free Consultation',
        description: 'Fill out the form below and we will contact you as soon as possible.',
        fields: {
          name: { label: 'Full Name', placeholder: 'Your full name' },
          email: { label: 'Email Address', placeholder: 'your.email@address.com' },
          phone: { label: 'Phone Number', placeholder: '+381 60 123 4567' },
          subject: { label: 'Subject', placeholder: 'Briefly describe the reason for contact' },
          legalArea: {
            label: 'Area of Law',
            placeholder: 'Select area of law',
            options: [
              'Family Law', 'Criminal Law', 'Corporate Law',
              'Labor Law', 'Inheritance Law', 'Misdemeanor Law',
              'Contract Law', 'Damage Compensation', 'Real Estate', 'Other'
            ]
          },
          message: { 
            label: 'Detailed Explanation', 
            placeholder: 'Describe your situation in as much detail as possible...' 
          }
        },
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred. Please try again.'
      }
    }
  };

  const t = content[language];

  // CSS Custom Properties for the Contact section
  const dynamicStyles = {
    section: {
      '--light-bg': colors.lightBg,
      '--accent': colors.accent,
      '--accent-hover': colors.accentHover,
      '--accent-muted': colors.accentMuted || '#b8ad8d',
      '--text-primary': colors.textPrimary,
      '--text-secondary': colors.textSecondary,
      '--text-light': colors.textLight,
      '--border-dark': colors.borderDark,
      '--shadow-medium': colors.shadowMedium,
      '--shadow-light': colors.shadowLight,
      '--pattern-accent': colors.patternAccent,
      '--pattern-muted': colors.patternMuted || 'rgba(184,173,141,0.08)'
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectOption = (option) => {
    setFormData(prev => ({ ...prev, legalArea: option }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFormStatus('success');
      setFormData({
        name: '', email: '', phone: '', subject: '', message: '', legalArea: ''
      });
    } catch (error) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = () => {
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  return (
    <section 
      id="contact" 
      className="contact-section"
      style={dynamicStyles.section}
    >
      <div className="container contact-container">
        {/* Section Header */}
        <div className="row justify-content-center mb-3">
          <div className="col-12 col-lg-10 text-center contact-header">
            <div className="contact-subtitle-wrapper">
              <div className="contact-accent-line" />
              <p className="contact-subtitle">
                {t.section.subtitle}
              </p>
              <div className="contact-accent-line" />
            </div>
            
            <h2 className="contact-title">
              {t.section.title}
            </h2>
            
            <div className="contact-title-underline" />

            <p className="contact-description">
              {t.section.description}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Info Column */}
          <div className="col-12 col-lg-4">
            <div className="contact-info-cards">
              {/* Contact Information Card */}
              <Card 
                variant="elevated" 
                padding="large" 
                className="contact-info-card"
              >
                <h3 className="info-card-title">{t.info.contact.title}</h3>
                
                <div className="contact-items-grid">
                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="contact-item-content">
                      <span className="contact-item-text">{t.info.contact.address}</span>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <Phone size={20} />
                    </div>
                    <div className="contact-item-content">
                      <a href={`tel:${t.info.contact.phone}`} className="contact-link">
                        {t.info.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-item-icon">
                      <Mail size={20} />
                    </div>
                    <div className="contact-item-content">
                      <a href={`mailto:${t.info.contact.email}`} className="contact-link">
                        {t.info.contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Working Hours Card */}
              <Card 
                variant="elevated" 
                padding="large" 
                className="contact-hours-card"
              >
                <h3 className="info-card-title">{t.info.hours.title}</h3>
                
                <div className="hours-item">
                  <div className="hours-icon">
                    <Clock size={20} />
                  </div>
                  <div className="hours-content">
                    <div className="hours-day">{t.info.hours.weekdays}</div>
                    <div className="hours-day">{t.info.hours.saturday}</div>
                    <div className="hours-day">{t.info.hours.sunday}</div>
                    <div className="hours-note">{t.info.hours.note}</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-12 col-lg-8">
            <Card 
              variant="elevated" 
              padding="large" 
              className="contact-form-card"
            >
              <div className="form-header">
                <div className="form-badge">
                  <MessageSquare size={14} />
                  <span>{t.form.subtitle}</span>
                </div>
                <h3 className="form-title">{t.form.title}</h3>
                <p className="form-description">{t.form.description}</p>
              </div>

              {/* Status Message */}
              {formStatus && (
                <div className={`status-message ${formStatus === 'success' ? 'success' : 'error'}`}>
                  {formStatus === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{formStatus === 'success' ? t.form.success : t.form.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  {/* Name & Email */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{t.form.fields.name.label} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t.form.fields.name.placeholder}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{t.form.fields.email.label} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t.form.fields.email.placeholder}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Legal Area */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{t.form.fields.phone.label}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t.form.fields.phone.placeholder}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>{t.form.fields.legalArea.label}</label>
                      
                      {/* Custom Dropdown */}
                      <div className="custom-select-container" onClick={(e) => e.stopPropagation()}>
                        <div 
                          className={`custom-select ${isDropdownOpen ? 'open' : ''}`}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setIsDropdownOpen(!isDropdownOpen);
                            }
                          }}
                        >
                          <span className={`select-value ${!formData.legalArea ? 'placeholder' : ''}`}>
                            {formData.legalArea || t.form.fields.legalArea.placeholder}
                          </span>
                          <ChevronDown className={`select-arrow ${isDropdownOpen ? 'rotated' : ''}`} size={20} />
                        </div>
                        
                        {isDropdownOpen && (
                          <div className="custom-select-dropdown">
                            {t.form.fields.legalArea.options.map((option, index) => (
                              <div
                                key={index}
                                className={`select-option ${formData.legalArea === option ? 'selected' : ''}`}
                                onClick={() => handleSelectOption(option)}
                                role="option"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleSelectOption(option);
                                  }
                                }}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Hidden input for form submission */}
                      <input
                        type="hidden"
                        name="legalArea"
                        value={formData.legalArea}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="col-12">
                    <div className="form-group">
                      <label>{t.form.fields.subject.label}</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder={t.form.fields.subject.placeholder}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="col-12">
                    <div className="form-group">
                      <label>{t.form.fields.message.label} *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t.form.fields.message.placeholder}
                        rows="4"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12" style={{ marginTop: '28px' }}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      disabled={isSubmitting}
                      icon={!isSubmitting && <Send size={18} />}
                      fullWidth={true}
                    >
                      {isSubmitting ? t.form.submitting : t.form.submit}
                    </Button>
                  </div>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}