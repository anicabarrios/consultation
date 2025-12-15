import React, { useState } from 'react';
import { isAuthenticated, getAdminName } from '../../services/Qaapi';
import { colors, gradients } from '../../utils/colors';
import AdminLogin from '../../components/AdminLogin/AdminLogin';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import './AdminPage.css';

export default function AdminPage({ language }) {
  const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());
  const [adminName, setAdminName] = useState(getAdminName());

  
  const content = {
    sr: {
      back: 'Nazad na sajt',
      login: {
        title: 'Admin Pristup',
        subtitle: 'Prijavite se za upravljanje pitanjima',
        email: 'Email adresa',
        password: 'Lozinka',
        submit: 'Prijava',
        submitting: 'Prijavljivanje...',
      },
      dashboard: {
        title: 'Pitanja',
        subtitle: 'Upravljajte pitanjima korisnika',
        logout: 'Odjava',
        refresh: 'Osveži',
        stats: {
          total: 'Ukupno pitanja',
          answered: 'Odgovoreno',
          pending: 'Na čekanju'
        },
        filter: {
          all: 'Sva',
          pending: 'Na čekanju',
          answered: 'Odgovorena'
        },
        actions: {
          answer: 'Odgovori',
          edit: 'Izmeni',
          show: 'Prikaži',
          hide: 'Sakrij',
          delete: 'Obriši',
          confirmDelete: 'Da li ste sigurni da želite da obrišete ovo pitanje?'
        },
        modal: {
          title: 'Odgovor na pitanje',
          editTitle: 'Izmena odgovora',
          tabs: { sr: 'Srpski', en: 'English' },
          sections: {
            question: 'Pitanje',
            category: 'Kategorija',
            answer: 'Odgovor'
          },
          placeholders: {
            questionSr: 'Tekst pitanja na srpskom...',
            questionEn: 'Question text in English...',
            categorySr: 'npr. Porodično pravo',
            categoryEn: 'e.g. Family Law',
            answerSr: 'Unesite vaš odgovor na srpskom jeziku...',
            answerEn: 'Enter your answer in English...'
          },
          save: 'Sačuvaj',
          saving: 'Čuvanje...',
          cancel: 'Otkaži',
          info: 'Srpski odgovor je obavezan. Engleski je opcioni.'
        },
        loading: 'Učitavanje pitanja...',
        noQuestions: 'Nema pitanja za prikaz.',
        error: 'Greška pri učitavanju.'
      }
    },
    en: {
      back: 'Back to site',
      login: {
        title: 'Admin Access',
        subtitle: 'Log in to manage questions',
        email: 'Email address',
        password: 'Password',
        submit: 'Login',
        submitting: 'Logging in...',
      },
      dashboard: {
        title: 'Questions Panel',
        subtitle: 'Manage user questions',
        logout: 'Logout',
        refresh: 'Refresh',
        stats: {
          total: 'Total questions',
          answered: 'Answered',
          pending: 'Pending'
        },
        filter: {
          all: 'All',
          pending: 'Pending',
          answered: 'Answered'
        },
        actions: {
          answer: 'Answer',
          edit: 'Edit',
          show: 'Show',
          hide: 'Hide',
          delete: 'Delete',
          confirmDelete: 'Are you sure you want to delete this question?'
        },
        modal: {
          title: 'Answer Question',
          editTitle: 'Edit Answer',
          tabs: { sr: 'Serbian', en: 'English' },
          sections: {
            question: 'Question',
            category: 'Category',
            answer: 'Answer'
          },
          placeholders: {
            questionSr: 'Question text in Serbian...',
            questionEn: 'Question text in English...',
            categorySr: 'e.g. Porodično pravo',
            categoryEn: 'e.g. Family Law',
            answerSr: 'Enter your answer in Serbian...',
            answerEn: 'Enter your answer in English...'
          },
          save: 'Save',
          saving: 'Saving...',
          cancel: 'Cancel',
          info: 'Serbian answer is required. English is optional.'
        },
        loading: 'Loading questions...',
        noQuestions: 'No questions to display.',
        error: 'Error loading questions.'
      }
    }
  };

  const sharedStyles = {
    page: {
      minHeight: '100vh',
      background: gradients.primary,
      paddingTop: '140px'
    },
    backBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 18px',
      background: 'rgba(255, 255, 255, 0.1)',
      border: `1px solid ${colors.border}`,
      borderRadius: '10px',
      color: colors.textLight,
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      backdropFilter: 'blur(10px)'
    },
    primaryBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
      whiteSpace: 'nowrap',
      background: gradients.accent,
      color: colors.textLight
    },
    secondaryBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
      background: colors.textLight,
      color: colors.primary,
      border: '1px solid #e2e5e9'
    },
    ghostBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
      background: 'transparent',
      color: 'rgba(255, 255, 255, 0.7)',
      border: `1px solid ${colors.border}`
    },
    dangerBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      whiteSpace: 'nowrap',
      background: '#fef2f2',
      color: '#dc2626',
      border: '1px solid #fecaca'
    }
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setAdminName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAdminName('');
  };

  return (
    <div className="admin-page" style={sharedStyles.page}>
      {!isLoggedIn ? (
        <AdminLogin
          language={language}
          onLoginSuccess={handleLoginSuccess}
          content={content}
          sharedStyles={sharedStyles}
        />
      ) : (
        <AdminDashboard
          language={language}
          adminName={adminName}
          onLogout={handleLogout}
          content={content}
          sharedStyles={sharedStyles}
        />
      )}
    </div>
  );
}