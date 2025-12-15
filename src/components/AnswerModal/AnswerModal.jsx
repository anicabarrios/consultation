import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Send, X, Save, Loader2, AlertCircle, User, Languages, Tag, FileText
} from 'lucide-react';
import { colors, gradients } from '../../utils/colors';
import './AnswerModal.css';

export default function AnswerModal({
  isOpen,
  question,
  language,
  content,
  onClose,
  onSave,
  isSaving,
  sharedStyles
}) {
  const [answerData, setAnswerData] = useState({
    answer: { sr: '', en: '' },
    category: { sr: '', en: '' },
    question: { sr: '', en: '' }
  });
  const [activeTab, setActiveTab] = useState('sr');

  const t = content[language];


  const styles = {
    overlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      zIndex: 99999,
      backdropFilter: 'blur(4px)'
    },
    modal: {
      background: colors.textLight,
      borderRadius: '16px',
      width: '100%',
      maxWidth: '640px',
      maxHeight: '85vh',
      overflow: 'hidden',
      boxShadow: `0 25px 80px ${colors.shadowMedium}`,
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px',
      borderBottom: `1px solid ${colors.borderDark}`,
      background: colors.lightBg,
      flexShrink: 0
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      fontSize: '18px',
      fontWeight: '700',
      color: colors.primary
    },
    closeBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      background: 'none',
      border: 'none',
      borderRadius: '10px',
      color: '#999',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    questionPreview: {
      padding: '16px 24px',
      background: gradients.primary,
      color: colors.textLight,
      flexShrink: 0
    },
    previewLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '13px',
      color: 'rgba(255, 255, 255, 0.7)',
      marginBottom: '8px'
    },
    previewDate: {
      marginLeft: 'auto',
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.5)'
    },
    previewText: {
      fontSize: '15px',
      lineHeight: '1.6',
      color: 'rgba(255, 255, 255, 0.95)',
      fontStyle: 'italic',
      margin: 0
    },
    tabs: {
      display: 'flex',
      padding: '0 24px',
      borderBottom: `1px solid ${colors.borderDark}`,
      background: colors.textLight,
      flexShrink: 0
    },
    tab: (isActive) => ({
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '16px 20px',
      background: 'none',
      border: 'none',
      borderBottom: `3px solid ${isActive ? colors.accent : 'transparent'}`,
      fontSize: '14px',
      fontWeight: '600',
      color: isActive ? colors.primary : '#888',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginBottom: '-1px'
    }),
    tabRequired: {
      color: '#dc2626',
      fontSize: '16px',
      marginLeft: '2px'
    },
    body: {
      padding: '24px',
      overflowY: 'auto',
      flex: 1,
      minHeight: 0
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '20px'
    },
    fieldLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: '600',
      color: colors.primary
    },
    fieldRequired: {
      color: '#dc2626',
      marginLeft: '4px'
    },
    input: {
      padding: '14px 16px',
      border: `2px solid ${colors.borderDark}`,
      borderRadius: '10px',
      fontSize: '14px',
      fontFamily: 'inherit',
      color: colors.primary,
      background: colors.lightBg,
      transition: 'all 0.2s ease',
      resize: 'vertical',
      width: '100%',
      boxSizing: 'border-box'
    },
    info: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '12px 24px',
      background: '#fffbeb',
      borderTop: '1px solid #fef3c7',
      fontSize: '13px',
      color: '#92400e',
      flexShrink: 0
    },
    footer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '12px',
      padding: '20px 24px',
      borderTop: `1px solid ${colors.borderDark}`,
      background: colors.lightBg,
      flexShrink: 0
    },
    cancelBtn: {
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
      color: colors.textSecondary,
      border: `1px solid ${colors.borderDark}`
    }
  };

  // Initialize data when question changes
  useEffect(() => {
    if (question) {
      setAnswerData({
        answer: question.answer || { sr: '', en: '' },
        category: question.category || { sr: '', en: '' },
        question: question.question || { sr: '', en: '' }
      });
      setActiveTab('sr');
    }
  }, [question]);

  // Helper to update nested answerData
  const updateAnswerData = (field, lang, value) => {
    setAnswerData(prev => ({
      ...prev,
      [field]: { ...prev[field], [lang]: value }
    }));
  };

  // Format date helper
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

  const handleSave = () => {
    onSave(answerData);
  };

  const handleClose = () => {
    setAnswerData({
      answer: { sr: '', en: '' },
      category: { sr: '', en: '' },
      question: { sr: '', en: '' }
    });
    onClose();
  };

  // Hover handlers
  const handleCloseBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = '#f0f1f3';
      e.currentTarget.style.color = '#dc2626';
    } else {
      e.currentTarget.style.background = 'none';
      e.currentTarget.style.color = '#999';
    }
  };

  const handleTabHover = (e, isHover, isActive) => {
    if (!isActive) {
      e.currentTarget.style.color = isHover ? colors.primary : '#888';
    }
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = colors.accent;
    e.target.style.background = colors.textLight;
    e.target.style.boxShadow = '0 0 0 4px rgba(175, 162, 127, 0.1)';
    e.target.style.outline = 'none';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = colors.borderDark;
    e.target.style.background = colors.lightBg;
    e.target.style.boxShadow = 'none';
  };

  const handleCancelBtnHover = (e, isHover) => {
    if (isHover) {
      e.currentTarget.style.background = colors.lightBg;
      e.currentTarget.style.color = colors.primary;
    } else {
      e.currentTarget.style.background = colors.textLight;
      e.currentTarget.style.color = colors.textSecondary;
    }
  };

  const handlePrimaryBtnHover = (e, isHover) => {
    if (isHover && !isSaving) {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 20px rgba(175, 162, 127, 0.35)';
    } else {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={styles.overlay} onClick={handleClose}>
      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div style={styles.header}>
          <div style={styles.title}>
            <Send size={22} style={{ color: colors.accent }} />
            <span>
              {question?.isAnswered
                ? t.dashboard.modal.editTitle
                : t.dashboard.modal.title}
            </span>
          </div>
          <button 
            style={styles.closeBtn} 
            onClick={handleClose}
            onMouseEnter={(e) => handleCloseBtnHover(e, true)}
            onMouseLeave={(e) => handleCloseBtnHover(e, false)}
          >
            <X size={22} />
          </button>
        </div>

        {/* Question Preview */}
        <div style={styles.questionPreview}>
          <div style={styles.previewLabel}>
            <User size={14} style={{ color: colors.accent }} />
            {question?.name}
            <span style={styles.previewDate}>{formatDate(question?.createdAt)}</span>
          </div>
          <p style={styles.previewText}>
            "{question?.question?.sr || question?.question}"
          </p>
        </div>

        {/* Language Tabs */}
        <div style={styles.tabs}>
          {['sr', 'en'].map((lang) => (
            <button
              key={lang}
              style={styles.tab(activeTab === lang)}
              onClick={() => setActiveTab(lang)}
              onMouseEnter={(e) => handleTabHover(e, true, activeTab === lang)}
              onMouseLeave={(e) => handleTabHover(e, false, activeTab === lang)}
            >
              <Languages size={16} style={{ color: colors.accent }} />
              {t.dashboard.modal.tabs[lang]}
              {lang === 'sr' && <span style={styles.tabRequired}>*</span>}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div style={styles.body}>
          {/* Question Field */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>
              <FileText size={16} style={{ color: colors.accent }} />
              {t.dashboard.modal.sections.question} ({activeTab.toUpperCase()})
            </label>
            <textarea
              value={answerData.question[activeTab]}
              onChange={(e) => updateAnswerData('question', activeTab, e.target.value)}
              rows={2}
              placeholder={t.dashboard.modal.placeholders[`question${activeTab === 'sr' ? 'Sr' : 'En'}`]}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          {/* Category Field */}
          <div style={styles.field}>
            <label style={styles.fieldLabel}>
              <Tag size={16} style={{ color: colors.accent }} />
              {t.dashboard.modal.sections.category} ({activeTab.toUpperCase()})
            </label>
            <input
              type="text"
              value={answerData.category[activeTab]}
              onChange={(e) => updateAnswerData('category', activeTab, e.target.value)}
              placeholder={t.dashboard.modal.placeholders[`category${activeTab === 'sr' ? 'Sr' : 'En'}`]}
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>

          {/* Answer Field */}
          <div style={{ ...styles.field, marginBottom: 0 }}>
            <label style={styles.fieldLabel}>
              <Send size={16} style={{ color: colors.accent }} />
              {t.dashboard.modal.sections.answer} ({activeTab.toUpperCase()})
              {activeTab === 'sr' && <span style={styles.fieldRequired}>*</span>}
            </label>
            <textarea
              value={answerData.answer[activeTab]}
              onChange={(e) => updateAnswerData('answer', activeTab, e.target.value)}
              rows={6}
              placeholder={t.dashboard.modal.placeholders[`answer${activeTab === 'sr' ? 'Sr' : 'En'}`]}
              style={{ ...styles.input, minHeight: '140px', lineHeight: '1.6' }}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
        </div>

        {/* Info Banner */}
        <div style={styles.info}>
          <AlertCircle size={16} style={{ flexShrink: 0, color: '#f59e0b' }} />
          <span>{t.dashboard.modal.info}</span>
        </div>

        {/* Modal Footer */}
        <div style={styles.footer}>
          <button 
            style={styles.cancelBtn} 
            onClick={handleClose}
            onMouseEnter={(e) => handleCancelBtnHover(e, true)}
            onMouseLeave={(e) => handleCancelBtnHover(e, false)}
          >
            <X size={18} />
            {t.dashboard.modal.cancel}
          </button>
          <button
            style={{
              ...sharedStyles.primaryBtn,
              opacity: (isSaving || !answerData.answer.sr.trim()) ? 0.6 : 1,
              cursor: (isSaving || !answerData.answer.sr.trim()) ? 'not-allowed' : 'pointer'
            }}
            onClick={handleSave}
            disabled={isSaving || !answerData.answer.sr.trim()}
            onMouseEnter={(e) => handlePrimaryBtnHover(e, true)}
            onMouseLeave={(e) => handlePrimaryBtnHover(e, false)}
          >
            {isSaving ? (
              <>
                <Loader2 size={18} className="spin" />
                {t.dashboard.modal.saving}
              </>
            ) : (
              <>
                <Save size={18} />
                {t.dashboard.modal.save}
              </>
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}