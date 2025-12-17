import React, { useState, useEffect } from 'react';
import { colors, gradients } from '../utils/colors';

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
  type = 'button',
  ...props 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(!window.matchMedia('(hover: hover)').matches);
    };
    checkTouch();
    const mq = window.matchMedia('(hover: hover)');
    mq.addEventListener?.('change', checkTouch) || mq.addListener?.(checkTouch);
    return () => mq.removeEventListener?.('change', checkTouch) || mq.removeListener?.(checkTouch);
  }, []);

  const isHovering = isHovered && !isTouchDevice && !disabled;
  const isPressing = isPressed && !disabled;

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
    WebkitTapHighlightColor: 'transparent',
    userSelect: 'none',
  };

  const sizeStyles = {
    small: { 
      padding: '8px 16px', 
      fontSize: '14px', 
      minHeight: '40px' 
    },
    medium: { 
      padding: '12px 24px', 
      fontSize: '16px', 
      minHeight: '48px' 
    },
    large: { 
      padding: '16px 32px', 
      fontSize: '18px', 
      minHeight: '56px' 
    },
  };

  const getTransform = () => {
    if (isPressing) return 'translateY(1px) scale(0.98)';
    if (isHovering) return 'translateY(-3px)';
    return 'translateY(0)';
  };

  const variantStyles = {
    primary: {
      background: gradients.accent,
      color: colors.textLight,
      boxShadow: isHovering 
        ? `0 12px 35px 0 ${colors.shadowMedium}` 
        : `0 4px 14px 0 ${colors.shadowLight}`,
      transform: getTransform(),
      filter: isHovering ? 'brightness(1.08)' : 'brightness(1)',
    },
    secondary: {
      backgroundColor: isHovering || isPressing ? colors.accent : 'transparent',
      color: isHovering || isPressing ? colors.textLight : colors.accent,
      border: `2px solid ${colors.accent}`,
      boxShadow: isHovering ? `0 10px 30px -5px ${colors.accent}40` : 'none',
      transform: getTransform(),
    },
    outline: {
      backgroundColor: isHovering || isPressing ? colors.textPrimary : 'transparent',
      color: isHovering || isPressing ? colors.textLight : colors.textPrimary,
      border: `2px solid ${isHovering || isPressing ? colors.textPrimary : colors.borderDark}`,
      boxShadow: isHovering ? `0 10px 30px -5px ${colors.primary}35` : 'none',
      transform: getTransform(),
    },
    ghost: {
      backgroundColor: isHovering || isPressing ? colors.lightBg : 'transparent',
      color: isHovering || isPressing ? colors.accent : colors.textSecondary,
      transform: isPressing ? 'translateY(1px) scale(0.98)' : isHovering ? 'translateY(-2px)' : 'translateY(0)',
    },
    white: {
      backgroundColor: isHovering || isPressing ? colors.textLight : 'transparent',
      color: isHovering || isPressing ? colors.primary : colors.textLight,
      border: `2px solid ${colors.textLight}`,
      boxShadow: isHovering ? `0 12px 35px -5px rgba(255,255,255,0.4)` : 'none',
      transform: getTransform(),
    }
  };

  const combinedStyles = { ...baseStyles, ...sizeStyles[size], ...variantStyles[variant] };
  const Component = as;

  const handlers = isTouchDevice ? {
    onTouchStart: () => !disabled && setIsPressed(true),
    onTouchEnd: () => setIsPressed(false),
    onTouchCancel: () => setIsPressed(false),
  } : {
    onMouseEnter: () => !disabled && setIsHovered(true),
    onMouseLeave: () => { setIsHovered(false); setIsPressed(false); },
    onMouseDown: () => !disabled && setIsPressed(true),
    onMouseUp: () => setIsPressed(false),
  };

  return (
    <Component
      style={combinedStyles}
      onClick={!disabled ? onClick : undefined}
      {...handlers}
      disabled={as === 'button' ? disabled : undefined}
      type={as === 'button' ? type : undefined}
      className={className}
      href={as === 'a' ? href : undefined}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      {...props}
    >
      {icon && (
        <span style={{ 
          display: 'inline-flex', 
          alignItems: 'center',
          transform: isHovering ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}>
          {icon}
        </span>
      )}
      <span style={{ lineHeight: '1.4' }}>{children}</span>
    </Component>
  );
}

export default Button;