import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Phone, Mail, MapPin, Clock, Send, MessageSquare,
  CheckCircle, AlertCircle, ChevronDown, Info, Calendar, AlertTriangle
} from 'lucide-react';
import { colors } from '../../utils/colors.js';
import Button from '../Button';
import Card from '../Card';
import './Contact.css';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_dagvr7d',
  templateId: 'template_1j64ohx',
  publicKey: '5a09SWQB44olMaPmX'
};

export default function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', legalArea: ''
  });
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const content = {
    sr: {
      section: { subtitle: 'KONTAKTIRAJTE NAS' },
      info: {
        contact: {
          title: 'Kontakt informacije',
          items: [
            { type: 'address', value: 'Sokolska 1/21, Niš', icon: MapPin },
            { type: 'phone', value: '+381 63 108 9990', icon: Phone },
            { type: 'email', value: 'advsuzanailic@gmail.com', icon: Mail }
          ]
        },
        hours: {
          title: 'Radno vreme',
          items: [
            { label: 'Ponedeljak - Petak', value: '09:00 - 17:00' },
            { label: 'Subota', value: '10:00 - 14:00' },
            { label: 'Nedelja', value: 'Zatvoreno' }
          ],
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
          message: { label: 'Detaljno objašnjenje', placeholder: 'Opišite Vašu situaciju što detaljnije...' }
        },
        submit: 'Pošaljite poruku',
        submitting: 'Šaljemo...',
        success: 'Vaša poruka je uspešno poslata!',
        error: 'Došlo je do greške. Pokušajte ponovo.'
      }
    },
    en: {
      section: { subtitle: 'CONTACT US' },
      info: {
        contact: {
          title: 'Contact Information',
          items: [
            { type: 'address', value: 'Sokolska 1/21, Niš', icon: MapPin },
            { type: 'phone', value: '+381 63 108 9990', icon: Phone },
            { type: 'email', value: 'advsuzanailic@gmail.com', icon: Mail }
          ]
        },
        hours: {
          title: 'Working Hours',
          items: [
            { label: 'Monday - Friday', value: '09:00 - 17:00' },
            { label: 'Saturday', value: '10:00 - 14:00' },
            { label: 'Sunday', value: 'Closed' }
          ],
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
          message: { label: 'Detailed Explanation', placeholder: 'Describe your situation in as much detail as possible...' }
        },
        submit: 'Send Message',
        submitting: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred. Please try again.'
      }
    }
  };

  const t = content[language];

  const cssVars = {
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
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Nije navedeno',
        subject: formData.subject || 'Bez predmeta',
        legal_area: formData.legalArea || 'Nije izabrano',
        message: formData.message,
        // Additional fields that might be useful in your template
        to_name: 'Advokatska kancelarija Ilić',
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '', legalArea: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  useEffect(() => {
    const handleClickOutside = () => isDropdownOpen && setIsDropdownOpen(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  const renderContactItem = (item, index) => {
    const IconComponent = item.icon;
    const isLink = item.type === 'phone' || item.type === 'email';
    const href = item.type === 'phone' ? `tel:${item.value}` : item.type === 'email' ? `mailto:${item.value}` : null;

    return (
      <div key={index} className="contact-item">
        <div className="contact-item-icon">
          <IconComponent size={20} />
        </div>
        <div className="contact-item-content">
          {isLink ? (
            <a href={href} className="contact-link">{item.value}</a>
          ) : (
            <span className="contact-item-text">{item.value}</span>
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="contact" className="contact-section" style={cssVars}>
      <div className="container contact-container">
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-10 text-center">
            <div className="contact-subtitle-wrapper d-inline-flex">
              <span className="contact-accent-line"></span>
              <span className="contact-subtitle">{t.section.subtitle}</span>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Contact Info Column */}
          <div className="col-12 col-lg-4">
            <div className="contact-info-cards">
              {/* Contact Information Card */}
              <Card variant="elevated" padding="large" className="contact-info-card">
                <div className="sidebar-card-header">
                  <div className="sidebar-card-icon">
                    <Info size={18} color={colors.textLight} strokeWidth={2} />
                  </div>
                  <h3 className="sidebar-card-title">{t.info.contact.title}</h3>
                </div>
                <div className="contact-items-grid">
                  {t.info.contact.items.map(renderContactItem)}
                </div>
              </Card>

              {/* Working Hours Card */}
              <Card variant="elevated" padding="large" className="contact-hours-card">
                <div className="sidebar-card-header">
                  <div className="sidebar-card-icon">
                    <Calendar size={18} color={colors.textLight} strokeWidth={2} />
                  </div>
                  <h3 className="sidebar-card-title">{t.info.hours.title}</h3>
                </div>
                <div className="hours-items-grid">
                  {t.info.hours.items.map((item, index) => (
                    <div key={index} className="hours-item">
                      <div className="hours-item-icon">
                        <Clock size={18} />
                      </div>
                      <div className="hours-item-content">
                        <span className="hours-label">{item.label}</span>
                        <span className="hours-value">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="hours-note">
                  <AlertTriangle size={14} />
                  <span>{t.info.hours.note}</span>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="col-12 col-lg-8">
            <Card variant="elevated" padding="large" className="contact-form-card">
              <div className="form-header">
                <div className="form-badge">
                  <MessageSquare size={14} />
                  <span>{t.form.subtitle}</span>
                </div>
                <h3 className="form-title">{t.form.title}</h3>
                <p className="form-description">{t.form.description}</p>
              </div>

              {formStatus && (
                <div className={`status-message ${formStatus}`}>
                  {formStatus === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                  <span>{formStatus === 'success' ? t.form.success : t.form.error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="row g-3">
                  {/* Name & Email */}
                  {[
                    { name: 'name', type: 'text', required: true },
                    { name: 'email', type: 'email', required: true }
                  ].map(field => (
                    <div key={field.name} className="col-md-6">
                      <div className="form-group">
                        <label>{t.form.fields[field.name].label}{field.required && ' *'}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={t.form.fields[field.name].placeholder}
                          required={field.required}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Phone */}
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
                      <div className="custom-select-container" onClick={e => e.stopPropagation()}>
                        <div
                          className={`custom-select ${isDropdownOpen ? 'open' : ''}`}
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setIsDropdownOpen(!isDropdownOpen))}
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
                                onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), handleSelectOption(option))}
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <input type="hidden" name="legalArea" value={formData.legalArea} />
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

                  {/* Submit */}
                  <div className="col-12" style={{ marginTop: '28px' }}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="large"
                      disabled={isSubmitting}
                      icon={!isSubmitting && <Send size={18} />}
                      fullWidth
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