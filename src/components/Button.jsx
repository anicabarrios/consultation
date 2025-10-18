import React, { useState } from 'react';
import { colors, gradients, commonStyles } from '../utils/colors';

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick, 
  disabled = false, 
  fullWidth = false,
  className = '',
  icon,
  as = 'button',
  href,
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
  };

  const sizeStyles = {
    small: { padding: '8px 16px', fontSize: '14px', minHeight: '36px' },
    medium: { padding: '12px 24px', fontSize: '16px', minHeight: '44px' },
    large: { padding: '16px 32px', fontSize: '18px', minHeight: '52px' },
  };

  const variantStyles = {
    primary: {
      background: gradients.accent,
      color: colors.textLight,
      boxShadow: isHovered ? `0 8px 25px 0 ${colors.shadowMedium}` : `0 4px 14px 0 ${colors.shadowLight}`,
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    },
    secondary: {
      backgroundColor: isHovered ? colors.accent : 'transparent',
      color: isHovered ? colors.textLight : colors.accent,
      border: `2px solid ${colors.accent}`,
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    },
    outline: {
      backgroundColor: isHovered ? colors.textPrimary : 'transparent',
      color: isHovered ? colors.textLight : colors.textPrimary,
      border: `2px solid ${colors.borderDark}`,
    },
    ghost: {
      backgroundColor: isHovered ? colors.lightBg : 'transparent',
      color: colors.textSecondary,
    },
    white: {
      backgroundColor: isHovered ? colors.textLight : 'transparent',
      color: isHovered ? colors.primary : colors.textLight,
      border: `2px solid ${colors.textLight}`,
      transform: isHovered ? 'translateY(-1px)' : 'translateY(0)',
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const Component = as;

  return (
    <Component
      style={combinedStyles}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={className}
      href={href}
      {...props}
    >
      {icon && <span style={{ display: 'flex', alignItems: 'center' }}>{icon}</span>}
      {children}
    </Component>
  );
}

export default Button;