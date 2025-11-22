import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { colors } from '../../utils/colors.js';
import './BackToTop.css';

export default function BackToTop({ language = 'sr' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); 
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const content = {
    sr: {
      backToTop: 'Nazad na vrh'
    },
    en: {
      backToTop: 'Back to top'
    }
  };

  const t = content[language] || content.sr;

  // Define CSS custom properties from colors.js
  const dynamicStyles = {
    '--accent': colors.accent,
    '--text-light': colors.textLight,
    '--text-secondary': colors.textSecondary,
    '--border-dark': colors.borderDark,
    '--shadow-light': colors.shadowLight,
    '--shadow-medium': colors.shadowMedium
  };

  return (
    <button
      className={`back-to-top ${!isVisible ? 'hidden' : ''}`}
      onClick={scrollToTop}
      aria-label={t.backToTop}
      title={t.backToTop}
      type="button"
      style={dynamicStyles}
    >
      <ChevronUp size={16} />
    </button>
  );
}