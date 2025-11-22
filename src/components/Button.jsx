import React, { useState, useEffect } from 'react';
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
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'clamp(6px, 1.5vw, 10px)',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: '600',
    border: 'none',
    borderRadius: 'clamp(6px, 1.5vw, 8px)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    opacity: disabled ? 0.6 : 1,
    width: fullWidth ? '100%' : 'auto',
    minWidth: isTouchDevice ? '44px' : 'auto',
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  };

  // Responsive size styles with clamp for better scaling
  const sizeStyles = {
    small: { 
      padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 3vw, 16px)', 
      fontSize: 'clamp(12px, 2.5vw, 14px)', 
      minHeight: 'clamp(36px, 8vw, 40px)' 
    },
    medium: { 
      padding: 'clamp(10px, 2.5vw, 12px) clamp(18px, 4vw, 24px)', 
      fontSize: 'clamp(14px, 3vw, 16px)', 
      minHeight: 'clamp(44px, 9vw, 48px)' 
    },
    large: { 
      padding: 'clamp(12px, 3vw, 16px) clamp(24px, 5vw, 32px)', 
      fontSize: 'clamp(16px, 3.5vw, 18px)', 
      minHeight: 'clamp(48px, 10vw, 56px)' 
    },
  };

  const variantStyles = {
    primary: {
      background: gradients.accent,
      color: colors.textLight,
      boxShadow: isHovered && !isTouchDevice 
        ? `0 8px 25px 0 ${colors.shadowMedium}` 
        : `0 4px 14px 0 ${colors.shadowLight}`,
      transform: isHovered && !isTouchDevice ? 'translateY(-2px)' : 'translateY(0)',
    },
    secondary: {
      backgroundColor: isHovered && !isTouchDevice ? colors.accent : 'transparent',
      color: isHovered && !isTouchDevice ? colors.textLight : colors.accent,
      border: `clamp(1px, 0.3vw, 2px) solid ${colors.accent}`,
      transform: isHovered && !isTouchDevice ? 'translateY(-1px)' : 'translateY(0)',
    },
    outline: {
      backgroundColor: isHovered && !isTouchDevice ? colors.textPrimary : 'transparent',
      color: isHovered && !isTouchDevice ? colors.textLight : colors.textPrimary,
      border: `clamp(1px, 0.3vw, 2px) solid ${colors.borderDark}`,
    },
    ghost: {
      backgroundColor: isHovered && !isTouchDevice ? colors.lightBg : 'transparent',
      color: colors.textSecondary,
    },
    white: {
      backgroundColor: isHovered && !isTouchDevice ? colors.textLight : 'transparent',
      color: isHovered && !isTouchDevice ? colors.primary : colors.textLight,
      border: `clamp(1px, 0.3vw, 2px) solid ${colors.textLight}`,
      transform: isHovered && !isTouchDevice ? 'translateY(-1px)' : 'translateY(0)',
    }
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  const Component = as;

  // Handle touch device interactions differently
  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      setIsHovered(false);
    }
  };

  // Handle touch interactions with active state feedback
  const handleTouchStart = (e) => {
    if (isTouchDevice && !disabled) {
      e.currentTarget.style.transform = 'scale(0.98)';
      e.currentTarget.style.opacity = '0.9';
    }
  };

  const handleTouchEnd = (e) => {
    if (isTouchDevice && !disabled) {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.opacity = '1';
    }
  };

  return (
    <>
      {/* Add responsive CSS for better mobile/tablet support */}
      <style>
        {`
          @media (max-width: 768px) {
            .responsive-button {
              font-size: 16px !important; /* Prevent iOS zoom on focus */
              line-height: 1.4 !important;
            }
          }
          
          @media (max-width: 576px) {
            .responsive-button {
              font-size: 16px !important;
              min-height: 48px !important; /* Ensure touch-friendly size */
            }
          }
          
          @media (hover: none) and (pointer: coarse) {
            .responsive-button:hover {
              transform: none !important;
              box-shadow: 0 4px 14px 0 ${colors.shadowLight} !important;
            }
          }
          
          /* Better focus states for accessibility */
          .responsive-button:focus-visible {
            outline: 2px solid ${colors.accent};
            outline-offset: 2px;
          }
          
          /* Active state for touch devices */
          @media (hover: none) and (pointer: coarse) {
            .responsive-button:active {
              transform: scale(0.98) !important;
              transition: transform 0.1s ease !important;
            }
          }
        `}
      </style>
      
      <Component
        style={combinedStyles}
        onClick={!disabled ? onClick : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        disabled={disabled}
        className={`${className} responsive-button`}
        href={href}
        role={as === 'a' ? 'button' : undefined}
        aria-disabled={disabled}
        {...props}
      >
        {icon && (
          <span 
            style={{ 
              display: 'flex', 
              alignItems: 'center',
              fontSize: 'clamp(14px, 2.5vw, 16px)'
            }}
          >
            {icon}
          </span>
        )}
        <span style={{ lineHeight: '1.4' }}>
          {children}
        </span>
      </Component>
    </>
  );
}

export default Button;