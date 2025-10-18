import React from 'react';
import { colors, gradients, commonStyles } from './colors.js';

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
      borderRadius: '10px',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      cursor: onClick ? 'pointer' : 'default',
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
        boxShadow: `0 2px 10px ${colors.shadowLight}`,
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
        boxShadow: `0 2px 10px ${colors.shadowLight}`,
      },
      gradient: {
        background: gradients.primary,
        color: colors.textLight,
        border: 'none',
        boxShadow: `0 2px 10px ${colors.shadowLight}`,
      },
      outline: {
        backgroundColor: 'transparent',
        border: `2px solid ${colors.borderDark}`,
      },
      accent: {
        backgroundColor: colors.accent,
        color: colors.textLight,
        border: 'none',
        boxShadow: `0 2px 10px ${colors.shadowLight}`,
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
    e.currentTarget.style.transform = 'translateY(-5px)';
    if (variant === 'default' || variant === 'elevated') {
      e.currentTarget.style.boxShadow = `0 12px 40px ${colors.shadowMedium}`;
    } else if (variant === 'dark' || variant === 'gradient' || variant === 'accent') {
      e.currentTarget.style.boxShadow = `0 12px 40px ${colors.shadowMedium}`;
    }
  };

  const handleMouseOut = (e) => {
    if (!hover) return;
    e.currentTarget.style.transform = 'translateY(0)';
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