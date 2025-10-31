import React from 'react';
import { colors, gradients, commonStyles } from '../utils/colors';

export function Card({ 
  children, 
  variant = 'default',
  hover = true,
  padding = 'medium',
  className = '',
  style = {},
  onClick,
  ...props 
}) {
  const getCardStyles = () => {
    const baseStyles = {
      borderRadius: '16px',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor: onClick ? 'pointer' : 'default',
      position: 'relative',
      overflow: 'hidden',
    };

    const paddingStyles = {
      none: { padding: '0' },
      small: { padding: '20px' },
      medium: { padding: '30px' },
      large: { padding: '40px' },
      xl: { padding: '50px' }
    };

    const variantStyles = {
      default: {
        backgroundColor: colors.textLight,
        boxShadow: `0 4px 20px ${colors.shadowLight}`,
        border: `1px solid ${colors.borderDark}`,
      },
      elevated: {
        backgroundColor: colors.textLight,
        boxShadow: `0 8px 30px ${colors.shadowMedium}`,
        border: 'none',
      },
      dark: {
        backgroundColor: colors.primary,
        color: colors.textLight,
        border: 'none',
        boxShadow: `0 4px 20px ${colors.shadowLight}`,
      },
      gradient: {
        background: gradients.primary,
        color: colors.textLight,
        border: 'none',
        boxShadow: `0 4px 20px ${colors.shadowLight}`,
      },
      outline: {
        backgroundColor: 'transparent',
        border: `2px solid ${colors.borderDark}`,
      },
      accent: {
        backgroundColor: colors.accent,
        color: colors.textLight,
        border: 'none',
        boxShadow: `0 4px 20px ${colors.shadowLight}`,
      },
      glass: {
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: `1px solid rgba(255, 255, 255, 0.3)`,
        boxShadow: `0 8px 32px ${colors.shadowMedium}`,
      },
      modern: {
        background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)`,
        backdropFilter: 'blur(20px)',
        border: `1px solid ${colors.borderDark}30`,
        boxShadow: `0 8px 40px ${colors.shadowMedium}`,
      }
    };

    return {
      ...baseStyles,
      ...paddingStyles[padding],
      ...variantStyles[variant],
      ...style
    };
  };

  const handleMouseOver = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(-8px)';
    
    if (variant === 'default' || variant === 'elevated') {
      e.currentTarget.style.boxShadow = `0 16px 50px ${colors.shadowMedium}`;
    } else if (variant === 'dark' || variant === 'gradient' || variant === 'accent') {
      e.currentTarget.style.boxShadow = `0 16px 50px ${colors.shadowMedium}`;
    } else if (variant === 'glass' || variant === 'modern') {
      e.currentTarget.style.boxShadow = `0 16px 60px ${colors.shadowMedium}`;
      e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
    }
  };

  const handleMouseOut = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(0) scale(1)';
    const originalStyles = getCardStyles();
    if (originalStyles.boxShadow) {
      e.currentTarget.style.boxShadow = originalStyles.boxShadow;
    }
  };

  return (
    <div
      style={getCardStyles()}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;