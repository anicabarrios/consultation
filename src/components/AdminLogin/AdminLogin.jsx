import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';
import { colors, gradients } from '../../utils/colors';
import { login } from '../../services/Qaapi';
import './AdminLogin.css';

export default function AdminLogin({ language, onLoginSuccess, content, sharedStyles }) {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const t = content[language];

  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 200px)',
      padding: '20px'
    },
    backBtn: {
      ...sharedStyles.backBtn,
      marginBottom: '24px'
    },
    card: {
      background: colors.textLight,
      borderRadius: '20px',
      padding: '48px',
      boxShadow: `0 20px 60px ${colors.shadowMedium}`,
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center'
    },
    iconWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '64px',
      height: '64px',
      background: gradients.accent,
      borderRadius: '16px',
      color: colors.textLight,
      marginBottom: '24px'
    },
    title: {
      color: colors.primary,
      fontSize: '1.75rem',
      fontWeight: '700',
      margin: '0 0 8px'
    },
    subtitle: {
      color: colors.textSecondary,
      fontSize: '15px',
      margin: '0 0 32px'
    },
    form: {
      textAlign: 'left'
    },
    inputGroup: {
      marginBottom: '20px'
    },
    label: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      marginBottom: '8px',
      fontSize: '14px',
      fontWeight: '600',
      color: colors.primary
    },
    labelIcon: {
      color: colors.accent
    },
    input: {
      width: '100%',
      padding: '14px 16px',
      border: `2px solid ${colors.borderDark}`,
      borderRadius: '10px',
      fontSize: '15px',
      color: colors.primary,
      transition: 'all 0.2s ease',
      background: colors.lightBg,
      boxSizing: 'border-box'
    },
    alert: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px 16px',
      borderRadius: '10px',
      fontSize: '14px',
      marginBottom: '24px',
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#dc2626'
    },
    submitBtn: {
      ...sharedStyles.primaryBtn,
      width: '100%'
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');

    try {
      const response = await login(loginData.email, loginData.password);
      if (response.success) {
        const adminName = response.data.admin?.name || 'Admin';
        onLoginSuccess(adminName);
        setLoginData({ email: '', password: '' });
      }
    } catch (error) {
      setLoginError(language === 'sr' ? error.message : error.messageEn);
    } finally {
      setIsLoggingIn(false);
    }
  };

  // Hover handlers
  const handleBackBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = `rgba(175, 162, 127, 0.2)`;
      e.currentTarget.style.borderColor = colors.accent;
      e.currentTarget.style.transform = 'translateX(-3px)';
    } else {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.borderColor = colors.border;
      e.currentTarget.style.transform = 'translateX(0)';
    }
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = colors.accent;
    e.target.style.background = colors.textLight;
    e.target.style.boxShadow = `0 0 0 4px rgba(175, 162, 127, 0.1)`;
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = colors.borderDark;
    e.target.style.background = colors.lightBg;
    e.target.style.boxShadow = 'none';
  };

  const handleSubmitBtnHover = (e, isHover) => {
    if (isHover && !isLoggingIn) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = `0 6px 20px rgba(175, 162, 127, 0.35)`;
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  const inputFields = [
    { field: 'email', icon: Mail, type: 'email' },
    { field: 'password', icon: Shield, type: 'password' }
  ];

  return (
    <div style={styles.wrapper} className="admin-login-wrapper">
      <button 
        style={styles.backBtn}
        onClick={() => navigate('/')}
        onMouseEnter={(e) => handleBackBtnHover(e, true)}
        onMouseLeave={(e) => handleBackBtnHover(e, false)}
      >
        <ArrowLeft size={20} />
        <span>{t.back}</span>
      </button>

      <div style={styles.card} className="admin-login-card">
        <div style={styles.iconWrapper}>
          <Shield size={32} />
        </div>
        
        <h1 style={styles.title} className="admin-login-title">{t.login.title}</h1>
        <p style={styles.subtitle}>{t.login.subtitle}</p>

        {loginError && (
          <div style={styles.alert}>
            <AlertCircle size={18} />
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={styles.form}>
          {inputFields.map(({ field, icon: Icon, type }) => (
            <div key={field} style={styles.inputGroup}>
              <label style={styles.label}>
                <Icon size={16} style={styles.labelIcon} />
                {t.login[field]}
              </label>
              <input
                type={type}
                value={loginData[field]}
                onChange={(e) => setLoginData({ ...loginData, [field]: e.target.value })}
                required
                disabled={isLoggingIn}
                autoComplete={type === 'email' ? 'email' : 'current-password'}
                style={{
                  ...styles.input,
                  opacity: isLoggingIn ? 0.7 : 1,
                  cursor: isLoggingIn ? 'not-allowed' : 'text'
                }}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
          ))}

          <button 
            type="submit" 
            style={{
              ...styles.submitBtn,
              opacity: isLoggingIn ? 0.6 : 1,
              cursor: isLoggingIn ? 'not-allowed' : 'pointer'
            }}
            disabled={isLoggingIn}
            onMouseEnter={(e) => handleSubmitBtnHover(e, true)}
            onMouseLeave={(e) => handleSubmitBtnHover(e, false)}
          >
            {isLoggingIn ? (
              <>
                <Loader2 size={18} className="spin" />
                {t.login.submitting}
              </>
            ) : (
              t.login.submit
            )}
          </button>
        </form>
      </div>
    </div>
  );
}