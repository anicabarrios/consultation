import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LogOut, MessageCircle, CheckCircle, Clock, Eye, EyeOff,
  Trash2, Send, Loader2, AlertCircle, User, Calendar, ChevronDown,
  ChevronUp, Mail, Tag, FileText, RefreshCw, Filter, ArrowLeft
} from 'lucide-react';
import { colors, gradients } from '../../utils/colors';
import {
  logout, getAdminQuestions, answerQuestion,
  toggleQuestionPublish, deleteQuestion
} from '../../services/Qaapi';
import AnswerModal from '../../components/AnswerModal/AnswerModal';
import './AdminDashboard.css';

export default function AdminDashboard({ language, adminName, onLogout, content, sharedStyles }) {
  const navigate = useNavigate();

  // Questions data
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(null);
  const [counts, setCounts] = useState({ total: 0, answered: 0, pending: 0 });

  // Answer modal
  const [answerModal, setAnswerModal] = useState({ open: false, question: null });
  const [isSaving, setIsSaving] = useState(false);

  // Filter & Expanded
  const [filter, setFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const t = content[language];

  // Inline styles using colors.js - NO CLAMP
  const styles = {
    topbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 40px 24px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    topbarRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    userBadge: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 14px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      color: colors.textMuted,
      border: `1px solid ${colors.border}`
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 40px 40px'
    },
    pageHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '28px',
      flexWrap: 'wrap',
      gap: '16px'
    },
    pageTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    pageTitleH1: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: colors.textLight,
      margin: '0'
    },
    pageTitleP: {
      fontSize: '14px',
      color: 'rgba(255, 255, 255, 0.6)',
      margin: '4px 0 0'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
      marginBottom: '28px'
    },
    statCard: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '20px 24px',
      background: 'rgba(255, 255, 255, 0.06)',
      borderRadius: '14px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)'
    },
    statIcon: (variant) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      flexShrink: 0,
      background: variant === 'primary' ? 'rgba(175, 162, 127, 0.2)' :
                  variant === 'success' ? 'rgba(16, 185, 129, 0.25)' :
                  'rgba(100, 116, 139, 0.25)',
      color: variant === 'primary' ? colors.accent :
             variant === 'success' ? '#10b981' : '#64748b'
    }),
    statNumber: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: colors.textLight,
      lineHeight: '1'
    },
    statLabel: {
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.6)',
      marginTop: '4px'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '24px',
      flexWrap: 'wrap'
    },
    filters: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap'
    },
    filterBtn: (isActive) => ({
      padding: '10px 16px',
      background: isActive ? colors.accent : 'rgba(255, 255, 255, 0.08)',
      border: `1px solid ${isActive ? colors.accent : colors.border}`,
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: '500',
      color: isActive ? colors.primary : 'rgba(255, 255, 255, 0.7)',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    }),
    questionsList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    },
    stateContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 20px',
      background: 'rgba(255, 255, 255, 0.04)',
      borderRadius: '14px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 0.5)'
    },
    questionCard: (isAnswered, isPublished) => ({
      background: isPublished ? colors.textLight : colors.lightBg,
      borderRadius: '14px',
      padding: '28px',
      boxShadow: `0 2px 8px ${colors.shadowLight}`,
      border: `1px solid ${colors.borderDark}`,
      borderLeft: `4px solid ${isAnswered ? '#10b981' : '#64748b'}`,
      transition: 'all 0.2s ease',
      opacity: isPublished ? 1 : 0.65
    }),
    badge: (variant) => ({
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '11px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: colors.textLight,
      background: variant === 'success' ? '#10b981' :
                  variant === 'warning' ? '#64748b' :
                  variant === 'hidden' ? '#ef4444' : colors.accent,
      boxShadow: variant === 'success' ? '0 2px 8px rgba(16, 185, 129, 0.35)' :
                 variant === 'warning' ? '0 2px 8px rgba(100, 116, 139, 0.35)' :
                 variant === 'hidden' ? '0 2px 8px rgba(239, 68, 68, 0.35)' :
                 '0 2px 8px rgba(175, 162, 127, 0.35)'
    }),
    questionMeta: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      fontSize: '13px',
      color: '#888'
    },
    questionText: {
      fontSize: '16px',
      lineHeight: '1.6',
      color: colors.primary,
      margin: '0',
      fontWeight: '500'
    },
    answerToggle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: '10px 0',
      background: 'none',
      border: 'none',
      color: colors.accent,
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'color 0.2s ease'
    },
    answerLang: {
      padding: '14px 16px',
      background: colors.lightBg,
      borderRadius: '10px',
      borderLeft: `3px solid ${colors.accent}`
    },
    langLabel: {
      display: 'inline-block',
      padding: '2px 8px',
      background: colors.accent,
      color: colors.textLight,
      fontSize: '10px',
      fontWeight: '700',
      borderRadius: '4px',
      marginBottom: '8px'
    },
    cardActions: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginTop: '20px',
      paddingTop: '20px',
      borderTop: '1px solid #f0f1f3'
    }
  };

  // Fetch questions
  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    setLoadError(null);

    try {
      const response = await getAdminQuestions();
      if (response.success) {
        setQuestions(response.data.all || []);
        setCounts(response.data.counts || { total: 0, answered: 0, pending: 0 });
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      setLoadError(error.message);
      if (error.status === 401) handleLogout();
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  // Handlers
  const handleLogout = async () => {
    await logout();
    onLogout();
  };

  const openAnswerModal = (question) => {
    setAnswerModal({ open: true, question });
  };

  const closeAnswerModal = () => {
    setAnswerModal({ open: false, question: null });
  };

  const handleSaveAnswer = async (answerData) => {
    if (!answerModal.question) return;
    setIsSaving(true);

    try {
      const response = await answerQuestion(answerModal.question.id, answerData);
      if (response.success) {
        fetchQuestions();
        closeAnswerModal();
      }
    } catch (error) {
      console.error('Error saving answer:', error);
      alert(language === 'sr' ? error.message : error.messageEn);
    } finally {
      setIsSaving(false);
    }
  };

  const handleTogglePublish = async (id) => {
    try {
      await toggleQuestionPublish(id);
      fetchQuestions();
    } catch (error) {
      alert(language === 'sr' ? error.message : error.messageEn);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(t.dashboard.actions.confirmDelete)) return;
    try {
      await deleteQuestion(id);
      fetchQuestions();
    } catch (error) {
      alert(language === 'sr' ? error.message : error.messageEn);
    }
  };

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    if (filter === 'pending' && q.isAnswered) return false;
    if (filter === 'answered' && !q.isAnswered) return false;
    return true;
  });

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString('sr-RS', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Hover handlers
  const handleBackBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = 'rgba(175, 162, 127, 0.2)';
      e.currentTarget.style.borderColor = colors.accent;
      e.currentTarget.style.transform = 'translateX(-3px)';
    } else {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.borderColor = colors.border;
      e.currentTarget.style.transform = 'translateX(0)';
    }
  };

  const handleFilterBtnHover = (e, isHover, isActive) => {
    if (!isActive) {
      if (isHover) {
        e.currentTarget.style.background = 'rgba(175, 162, 127, 0.2)';
        e.currentTarget.style.borderColor = colors.accent;
        e.currentTarget.style.color = colors.accent;
      } else {
        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.borderColor = colors.border;
        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
      }
    }
  };

  const handleCardHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.boxShadow = `0 4px 16px ${colors.shadowLight}`;
    } else {
      e.currentTarget.style.boxShadow = `0 2px 8px ${colors.shadowLight}`;
    }
  };

  const handleGhostBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = 'rgba(220, 38, 38, 0.15)';
      e.currentTarget.style.color = '#ef4444';
      e.currentTarget.style.borderColor = 'rgba(220, 38, 38, 0.3)';
    } else {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
      e.currentTarget.style.borderColor = colors.border;
    }
  };

  const handlePrimaryBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(175, 162, 127, 0.35)';
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  const handleSecondaryBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = colors.lightBg;
      e.currentTarget.style.borderColor = '#d0d3d8';
    } else {
      e.currentTarget.style.background = colors.textLight;
      e.currentTarget.style.borderColor = '#e2e5e9';
    }
  };

  const handleDangerBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = '#dc2626';
      e.currentTarget.style.color = colors.textLight;
      e.currentTarget.style.borderColor = '#dc2626';
    } else {
      e.currentTarget.style.background = '#fef2f2';
      e.currentTarget.style.color = '#dc2626';
      e.currentTarget.style.borderColor = '#fecaca';
    }
  };

  // Stats & Filter config
  const statsConfig = [
    { key: 'total', icon: MessageCircle, variant: 'primary', count: counts.total },
    { key: 'answered', icon: CheckCircle, variant: 'success', count: counts.answered },
    { key: 'pending', icon: Clock, variant: 'warning', count: counts.pending }
  ];

  const filterConfig = [
    { key: 'all', count: counts.total },
    { key: 'pending', count: counts.pending },
    { key: 'answered', count: counts.answered }
  ];

  return (
    <>
      {/* Top Bar */}
      <div style={styles.topbar} className="admin-topbar">
        <button 
          style={sharedStyles.backBtn}
          onClick={() => navigate('/')}
          onMouseEnter={(e) => handleBackBtnHover(e, true)}
          onMouseLeave={(e) => handleBackBtnHover(e, false)}
        >
          <ArrowLeft size={20} />
          <span>{t.back}</span>
        </button>
        <div style={styles.topbarRight}>
          <span style={styles.userBadge}>
            <User size={16} style={{ color: colors.accent }} />
            {adminName}
          </span>
          <button 
            style={sharedStyles.ghostBtn}
            onClick={handleLogout}
            onMouseEnter={(e) => handleGhostBtnHover(e, true)}
            onMouseLeave={(e) => handleGhostBtnHover(e, false)}
          >
            <LogOut size={18} />
            <span>{t.dashboard.logout}</span>
          </button>
        </div>
      </div>

      <div style={styles.container} className="admin-container">
        {/* Page Header */}
        <div style={styles.pageHeader}>
          <div style={styles.pageTitle}>
            <MessageCircle size={28} style={{ color: colors.accent }} />
            <div>
              <h1 style={styles.pageTitleH1} className="admin-page-title-h1">{t.dashboard.title}</h1>
              <p style={styles.pageTitleP}>{t.dashboard.subtitle}</p>
            </div>
          </div>
          <button
            style={{
              ...sharedStyles.secondaryBtn,
              opacity: isLoading ? 0.6 : 1
            }}
            onClick={fetchQuestions}
            disabled={isLoading}
            onMouseEnter={(e) => handleSecondaryBtnHover(e, true)}
            onMouseLeave={(e) => handleSecondaryBtnHover(e, false)}
          >
            <RefreshCw size={18} className={isLoading ? 'spin' : ''} />
            {t.dashboard.refresh}
          </button>
        </div>

        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          {statsConfig.map(({ key, icon: Icon, variant, count }) => (
            <div key={key} style={styles.statCard}>
              <div style={styles.statIcon(variant)}>
                <Icon size={22} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={styles.statNumber}>{count}</span>
                <span style={styles.statLabel}>{t.dashboard.stats[key]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div style={styles.toolbar}>
          <div style={styles.filters}>
            <Filter size={16} style={{ color: 'rgba(255, 255, 255, 0.5)' }} />
            {filterConfig.map(({ key, count }) => (
              <button
                key={key}
                style={styles.filterBtn(filter === key)}
                onClick={() => setFilter(key)}
                onMouseEnter={(e) => handleFilterBtnHover(e, true, filter === key)}
                onMouseLeave={(e) => handleFilterBtnHover(e, false, filter === key)}
              >
                {t.dashboard.filter[key]} ({count})
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div style={styles.questionsList}>
          {isLoading ? (
            <div style={styles.stateContainer} className="admin-state">
              <Loader2 size={40} className="spin" style={{ marginBottom: '16px', opacity: 0.5 }} />
              <p style={{ fontSize: '15px', fontWeight: '500', margin: 0 }}>{t.dashboard.loading}</p>
            </div>
          ) : loadError ? (
            <div style={{ ...styles.stateContainer }} className="admin-state">
              <AlertCircle size={40} style={{ marginBottom: '16px', opacity: 0.5, color: '#ef4444' }} />
              <p style={{ fontSize: '15px', fontWeight: '500', margin: 0 }}>{t.dashboard.error}</p>
            </div>
          ) : filteredQuestions.length === 0 ? (
            <div style={styles.stateContainer} className="admin-state">
              <MessageCircle size={40} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <p style={{ fontSize: '15px', fontWeight: '500', margin: 0 }}>{t.dashboard.noQuestions}</p>
            </div>
          ) : (
            filteredQuestions.map((q) => (
              <div
                key={q.id}
                style={styles.questionCard(q.isAnswered, q.isPublished)}
                className="admin-question-card"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    <span style={styles.badge(q.isAnswered ? 'success' : 'warning')}>
                      {q.isAnswered ? <CheckCircle size={12} /> : <Clock size={12} />}
                      {q.isAnswered ? t.dashboard.stats.answered : t.dashboard.stats.pending}
                    </span>
                    {!q.isPublished && (
                      <span style={styles.badge('hidden')}>
                        <EyeOff size={12} />
                        Hidden
                      </span>
                    )}
                    {q.category?.sr && (
                      <span style={styles.badge('category')}>
                        <Tag size={12} />
                        {q.category[language] || q.category.sr}
                      </span>
                    )}
                  </div>
                  <div style={styles.questionMeta}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <User size={14} style={{ color: '#bbb' }} /> {q.name}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={14} style={{ color: '#bbb' }} /> {q.email}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={14} style={{ color: '#bbb' }} /> {formatDate(q.createdAt)}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <p style={styles.questionText} className="admin-question-text">{q.question?.sr || q.question}</p>
                  {q.question?.en && (
                    <p style={{ fontSize: '14px', color: '#888', fontStyle: 'italic', margin: '8px 0 0' }}>
                      {q.question.en}
                    </p>
                  )}
                </div>

                {q.isAnswered && q.answer?.sr && (
                  <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px dashed #e2e5e9' }}>
                    <button
                      style={styles.answerToggle}
                      onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FileText size={16} />
                        {language === 'sr' ? 'Odgovor' : 'Answer'}
                      </span>
                      {expandedId === q.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    {expandedId === q.id && (
                      <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {['sr', 'en'].map(
                          (lang) =>
                            q.answer[lang] && (
                              <div key={lang} style={styles.answerLang}>
                                <span style={styles.langLabel}>{lang.toUpperCase()}</span>
                                <p style={{ fontSize: '14px', lineHeight: '1.6', color: colors.textSecondary, margin: 0 }}>
                                  {q.answer[lang]}
                                </p>
                              </div>
                            )
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div style={styles.cardActions}>
                  <button
                    style={sharedStyles.primaryBtn}
                    onClick={() => openAnswerModal(q)}
                    onMouseEnter={(e) => handlePrimaryBtnHover(e, true)}
                    onMouseLeave={(e) => handlePrimaryBtnHover(e, false)}
                  >
                    <Send size={16} />
                    {q.isAnswered ? t.dashboard.actions.edit : t.dashboard.actions.answer}
                  </button>
                  <button
                    style={sharedStyles.secondaryBtn}
                    onClick={() => handleTogglePublish(q.id)}
                    onMouseEnter={(e) => handleSecondaryBtnHover(e, true)}
                    onMouseLeave={(e) => handleSecondaryBtnHover(e, false)}
                  >
                    {q.isPublished ? <EyeOff size={16} /> : <Eye size={16} />}
                    {q.isPublished ? t.dashboard.actions.hide : t.dashboard.actions.show}
                  </button>
                  <button
                    style={sharedStyles.dangerBtn}
                    onClick={() => handleDelete(q.id)}
                    onMouseEnter={(e) => handleDangerBtnHover(e, true)}
                    onMouseLeave={(e) => handleDangerBtnHover(e, false)}
                  >
                    <Trash2 size={16} />
                    {t.dashboard.actions.delete}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Answer Modal */}
      <AnswerModal
        isOpen={answerModal.open}
        question={answerModal.question}
        language={language}
        content={content}
        onClose={closeAnswerModal}
        onSave={handleSaveAnswer}
        isSaving={isSaving}
        sharedStyles={sharedStyles}
      />
    </>
  );
}