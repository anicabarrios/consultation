import React, { useState } from 'react';
import { MessageCircle, Send, User, Calendar, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import HeroPages from '../../components/HeroPages/HeroPages';
import Button from '../../components/Button';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection';
import './QAPage.css';

export default function QAPage({ language }) {
  const [expandedQA, setExpandedQA] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const formatDate = (dateString) => {
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
        success: 'Hvala! Vaše pitanje je poslato. Odgovorićemo uskoro.'
      },
      qa: {
        title: 'Česta Pitanja',
        subtitle: 'Odgovori na najčešća pravna pitanja naših klijenata',
        answered: 'Odgovoreno',
        readMore: 'Pročitaj odgovor',
        readLess: 'Sakrij odgovor',
        noQuestions: 'Trenutno nema dostupnih pitanja i odgovora.'
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
        success: 'Thank you! Your question has been submitted. We will respond soon.'
      },
      qa: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to the most common legal questions from our clients',
        answered: 'Answered',
        readMore: 'Read answer',
        readLess: 'Hide answer',
        noQuestions: 'No questions and answers available at the moment.'
      }
    }
  };

  const t = content[language];

  const qaDataSource = [
    {
      id: 1,
      question: {
        sr: 'Koji su moji prava kao zaposlenog u slučaju otkaza?',
        en: 'What are my rights as an employee in case of termination?'
      },
      answer: {
        sr: 'Prema Zakonu o radu Republike Srbije, zaposleni ima pravo na otkazni rok koji zavisi od dužine radnog staža. Takođe, imate pravo na otpremninu ukoliko je otkaz izdat bez vaše krivice. Važno je da otkaz bude dat u pisanoj formi sa jasnim obrazloženjem razloga. U slučaju nezakonitog otkaza, zaposleni ima pravo da tuži poslodavca i zahteva vraćanje na posao ili finansijsku naknadu. Preporučujemo da se konsultujete sa advokatom kako biste zaštitili svoja prava.',
        en: 'According to the Labor Law of the Republic of Serbia, employees have the right to a notice period that depends on the length of service. You also have the right to severance pay if the termination is made without your fault. It is important that the termination is given in written form with clear reasoning. In case of unlawful termination, the employee has the right to sue the employer and request reinstatement or financial compensation. We recommend consulting with a lawyer to protect your rights.'
      },
      author: 'Suzana Ilić',
      date: '2024-12-05',
      category: { sr: 'Radno Pravo', en: 'Labor Law' }
    },
    {
      id: 2,
      question: {
        sr: 'Kako mogu da podelim imovinu nakon razvoda braka?',
        en: 'How can I divide property after divorce?'
      },
      answer: {
        sr: 'Podela bračne imovine nakon razvoda braka regulisana je Porodičnim zakonom. Zajednička imovina supružnika deli se po pravilu na jednake delove, osim ako se supružnici drukčije ne dogovore. U obzir se uzima sve što je stečeno za vreme trajanja braka, bez obzira na čije ime je registrovano. Imovina koja je stečena pre braka ili poklonom/nasledstvom ostaje odvojena. Postupak podele može biti sporazuman ili sudski. Preporučujemo da angažujete advokata koji će vas zastupati i zaštititi vaše interese tokom procesa podele imovine.',
        en: 'Division of marital property after divorce is regulated by the Family Law. Joint property of spouses is generally divided equally, unless the spouses agree otherwise. Everything acquired during the marriage is taken into account, regardless of whose name it is registered under. Property acquired before marriage or by gift/inheritance remains separate. The division process can be consensual or through court. We recommend hiring a lawyer who will represent you and protect your interests during the property division process.'
      },
      author: 'Suzana Ilić',
      date: '2024-12-01',
      category: { sr: 'Porodično Pravo', en: 'Family Law' }
    },
    {
      id: 3,
      question: {
        sr: 'Šta treba da znam prilikom kupovine nekretnine?',
        en: 'What should I know when buying real estate?'
      },
      answer: {
        sr: 'Pre kupovine nekretnine obavezno proverite pravni status objekta u Katastru nepokretnosti. Važno je da budete sigurni da prodavac ima pravo vlasništva i da nekretnina nije opterećena hipotekom ili drugim teretima. Preporučujemo sastavljanje predugovora koji definiše sve uslove kupoprodaje. Pred potpisivanje glavnog ugovora, neophodno je izvršiti proveru svih dokumenata kod notara. Kupac treba da bude svestan svih troškova koji prate kupovinu (porez na prenos apsolutnih prava, troškovi uknjižbe, notarski troškovi). Konsultacija sa advokatom je ključna kako bi se izbegale pravne zamke i zaštitili vaši interesi.',
        en: 'Before buying real estate, make sure to check the legal status of the property in the Real Estate Cadastre. It is important to ensure that the seller has ownership rights and that the property is not encumbered by mortgage or other burdens. We recommend drafting a preliminary agreement that defines all terms of the sale. Before signing the main contract, it is necessary to verify all documents with a notary. The buyer should be aware of all costs associated with the purchase (property transfer tax, registration costs, notary fees). Consultation with a lawyer is crucial to avoid legal pitfalls and protect your interests.'
      },
      author: 'Suzana Ilić',
      date: '2024-11-28',
      category: { sr: 'Nepokretnosti', en: 'Real Estate' }
    }
  ];

  const qaData = qaDataSource.map(item => ({
    id: item.id,
    question: item.question[language],
    answer: item.answer[language],
    author: item.author,
    date: item.date,
    category: item.category[language]
  }));

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Question submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', question: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const toggleQA = (id) => {
    setExpandedQA(expandedQA === id ? null : id);
  };

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

                {submitted && (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <p>{t.form.success}</p>
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
                      rows="6"
                      className="form-input form-textarea"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="large" fullWidth={true}>
                    <Send size={18} />
                    {t.form.submit}
                  </Button>
                </form>
              </AnimatedSection>
            </div>

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

                {qaData.length === 0 ? (
                  <div className="no-questions">
                    <MessageCircle size={48} />
                    <p>{t.qa.noQuestions}</p>
                  </div>
                ) : (
                  <div className="qa-list">
                    {qaData.map((item) => (
                      <div key={item.id} className="qa-item">
                        <div className="qa-header">
                          <div className="qa-meta">
                            <span className="qa-category">{item.category}</span>
                            <span className="qa-date">
                              <Calendar size={14} />
                              {formatDate(item.date)}
                            </span>
                          </div>
                          <h3 className="qa-question">{item.question}</h3>
                        </div>

                        <div className={`qa-answer ${expandedQA === item.id ? 'expanded' : ''}`}>
                          <div className="answer-header">
                            <User size={16} />
                            <span>{item.author}</span>
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
                      </div>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}