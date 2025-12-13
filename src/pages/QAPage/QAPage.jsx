import React, { useState, useEffect, useCallback } from 'react';
import { MessageCircle, Send, User, Calendar, ChevronDown, ChevronUp, HelpCircle, Clock, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import HeroPages from '../../components/HeroPages/HeroPages';
import Button from '../../components/Button';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import { submitQuestion, getQuestions } from '../../services/Qaapi';
import './QAPage.css';

export default function QAPage({ language }) {
  const [expandedQA, setExpandedQA] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  
  // Form states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });
  
  // Data states
  const [questions, setQuestions] = useState({ answered: [], pending: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const content = {
    sr: {
      hero: {
        title: 'Pitajte Advokata',
        subtitle: 'Pronađite odgovore na česta pravna pitanja ili postavite svoje pitanje'
      },
      form: {
        title: 'Postavite Pitanje',
        subtitle: 'Advokat će odgovoriti na Vaše pitanje u najkraćem mogućem roku',
        nameLabel: 'Ime i prezime',
        namePlaceholder: 'Vaše ime',
        emailLabel: 'Email adresa',
        emailPlaceholder: 'Vaš email',
        questionLabel: 'Vaše pitanje',
        questionPlaceholder: 'Opišite svoje pravno pitanje detaljno...',
        submit: 'Pošaljite',
        submitting: 'Slanje...',
        success: 'Hvala! Vaše pitanje je uspešno poslato. Odgovorićemo uskoro.',
        error: 'Došlo je do greške. Molimo pokušajte ponovo.'
      },
      qa: {
        title: 'Česta Pitanja',
        subtitle: 'Odgovori na najčešća pravna pitanja naših klijenata',
        answered: 'Odgovoreno',
        pending: 'Čeka odgovor',
        readMore: 'Pročitaj odgovor',
        readLess: 'Sakrij odgovor',
        noQuestions: 'Trenutno nema dostupnih pitanja i odgovora.',
        loading: 'Učitavanje pitanja...',
        loadError: 'Greška pri učitavanju pitanja.',
        retry: 'Pokušaj ponovo',
        pendingSection: 'Pitanja koja čekaju odgovor',
        answeredSection: 'Odgovorena pitanja'
      }
    },
    en: {
      hero: {
        title: 'Ask the Lawyer',
        subtitle: 'Find answers to common legal questions or ask your own'
      },
      form: {
        title: 'Ask a Question',
        subtitle: 'The Lawyer will respond to your question as soon as possible',
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email address',
        emailPlaceholder: 'Your email',
        questionLabel: 'Your question',
        questionPlaceholder: 'Describe your legal question in detail...',
        submit: 'Submit',
        submitting: 'Submitting...',
        success: 'Thank you! Your question has been successfully submitted. We will respond soon.',
        error: 'An error occurred. Please try again.'
      },
      qa: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to the most common legal questions from our clients',
        answered: 'Answered',
        pending: 'Awaiting response',
        readMore: 'Read answer',
        readLess: 'Hide answer',
        noQuestions: 'No questions and answers available at the moment.',
        loading: 'Loading questions...',
        loadError: 'Error loading questions.',
        retry: 'Try again',
        pendingSection: 'Questions awaiting response',
        answeredSection: 'Answered questions'
      }
    }
  };

  const t = content[language];

  // Fetch questions from backend
  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);
    
    try {
      const response = await getQuestions(language);
      
      if (response.success && response.data) {
        setQuestions({
          answered: response.data.answered || [],
          pending: response.data.pending || [],
          all: response.data.all || []
        });
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoadError(language === 'sr' ? error.message : error.messageEn);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  // Load questions on mount and language change
  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await submitQuestion({
        name: formData.name.trim(),
        email: formData.email.trim(),
        question: formData.question.trim()
      });

      if (response.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: language === 'sr' ? response.message : response.messageEn 
        });
        setFormData({ name: '', email: '', question: '' });
        
        // Refresh questions to show the new pending question
        fetchQuestions();
        
        // Clear success message after 6 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: '' });
        }, 6000);
      }
    } catch (error) {
      console.error('Error submitting question:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: language === 'sr' ? (error.message || t.form.error) : (error.messageEn || t.form.error)
      });
      
      // Clear error after 5 seconds
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleQA = (id) => {
    setExpandedQA(expandedQA === id ? null : id);
  };

  // Render a single Q&A item
  const renderQAItem = (item, isAnswered = true) => (
    <div key={item.id} className={`qa-item ${!isAnswered ? 'qa-item-pending' : ''}`}>
      <div className="qa-header">
        <div className="qa-meta">
          {isAnswered && item.category && (
            <span className="qa-category">{item.category}</span>
          )}
          {!isAnswered && (
            <span className="qa-category qa-category-pending">
              <Clock size={12} />
              {t.qa.pending}
            </span>
          )}
          <span className="qa-date">
            <Calendar size={14} />
            {formatDate(item.date)}
          </span>
        </div>
        <h3 className="qa-question">{item.question}</h3>
        <div className="qa-author-name">
          <User size={14} />
          <span>{item.name}</span>
        </div>
      </div>

      {isAnswered && item.answer && (
        <>
          <div className={`qa-answer ${expandedQA === item.id ? 'expanded' : ''}`}>
            <div className="answer-header">
              <User size={16} />
              <span>Suzana Ilić</span>
              <span className="answered-badge">{t.qa.answered}</span>
            </div>
            <div className="answer-content">
              <p>{item.answer}</p>
            </div>
          </div>

          <button
            className="toggle-btn"
            onClick={() => toggleQA(item.id)}
            aria-expanded={expandedQA === item.id}
            aria-label={expandedQA === item.id ? t.qa.readLess : t.qa.readMore}
          >
            {expandedQA === item.id ? (
              <>
                {t.qa.readLess}
                <ChevronUp size={18} />
              </>
            ) : (
              <>
                {t.qa.readMore}
                <ChevronDown size={18} />
              </>
            )}
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="qa-page">
      <HeroPages 
        icon={MessageCircle}
        title={t.hero.title}
        subtitle={t.hero.subtitle}
        iconSize={48}
      />

      <div className="qa-content">
        <div className="container">
          <div className="row">
            {/* Question Form */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              <AnimatedSection 
                animation="fade-left" 
                threshold={0.15}
                rootMargin="0px 0px -60px 0px"
                duration="slow"
                className="qa-form-section"
              >
                <div className="section-header">
                  <HelpCircle className="section-icon" />
                  <h2>{t.form.title}</h2>
                  <p>{t.form.subtitle}</p>
                </div>

                {/* Success Message */}
                {submitStatus.type === 'success' && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus.type === 'error' && (
                  <div className="error-message">
                    <AlertCircle size={24} />
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="qa-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">{t.form.nameLabel}</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.form.namePlaceholder}
                      required
                      disabled={isSubmitting}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">{t.form.emailLabel}</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.form.emailPlaceholder}
                      required
                      disabled={isSubmitting}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="question" className="form-label">{t.form.questionLabel}</label>
                    <textarea
                      id="question"
                      name="question"
                      value={formData.question}
                      onChange={handleInputChange}
                      placeholder={t.form.questionPlaceholder}
                      required
                      disabled={isSubmitting}
                      rows="6"
                      className="form-input form-textarea"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="large" 
                    fullWidth={true}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="spin" />
                        {t.form.submitting}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t.form.submit}
                      </>
                    )}
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            {/* Q&A List */}
            <div className="col-lg-7">
              <AnimatedSection 
                animation="fade-right" 
                threshold={0.15}
                rootMargin="0px 0px -60px 0px"
                duration="slow"
                className="qa-list-section"
              >
                <div className="section-header">
                  <MessageCircle className="section-icon" />
                  <h2>{t.qa.title}</h2>
                  <p>{t.qa.subtitle}</p>
                </div>

                {/* Loading State */}
                {isLoading && (
                  <div className="loading-state">
                    <Loader2 size={48} className="spin" />
                    <p>{t.qa.loading}</p>
                  </div>
                )}

                {/* Error State */}
                {loadError && !isLoading && (
                  <div className="error-state">
                    <AlertCircle size={48} />
                    <p>{t.qa.loadError}</p>
                    <button onClick={fetchQuestions} className="retry-btn">
                      <RefreshCw size={18} />
                      {t.qa.retry}
                    </button>
                  </div>
                )}

                {/* Questions List */}
                {!isLoading && !loadError && (
                  <>
                    {questions.answered.length === 0 && questions.pending.length === 0 ? (
                      <div className="no-questions">
                        <MessageCircle size={48} />
                        <p>{t.qa.noQuestions}</p>
                      </div>
                    ) : (
                      <div className="qa-list">
                        {/* Answered Questions */}
                        {questions.answered.length > 0 && (
                          <>
                            {questions.answered.map((item) => renderQAItem(item, true))}
                          </>
                        )}

                        {/* Pending Questions */}
                        {questions.pending.length > 0 && (
                          <>
                            <div className="qa-section-divider">
                              <Clock size={18} />
                              <span>{t.qa.pendingSection}</span>
                            </div>
                            {questions.pending.map((item) => renderQAItem(item, false))}
                          </>
                        )}
                      </div>
                    )}
                  </>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}