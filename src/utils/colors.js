export const colors = {
  primary: '#1a1a2e',        
  secondary: '#c29d59',      
  
  // Background colors
  primaryBg: '#1a1a2e',     
  gradientStart: '#1a1a2e',  
  gradientEnd: '#2d2d44',    
  lightBg: '#f8f9fa',        
  
  // Text colors
  textPrimary: '#1a1a2e',    
  textSecondary: '#666',     
  textLight: '#ffffff',      
  textMuted: 'rgba(255,255,255,0.9)', 
  
  // Interactive states
  accent: '#c29d59',         
  accentHover: '#b38a48',    
  accentDark: '#9a7640',     
  
  // Borders and dividers
  border: 'rgba(255,255,255,0.2)', 
  borderDark: '#e0e0e0',     
  
  // Shadows
  shadowLight: 'rgba(0,0,0,0.1)',
  shadowMedium: 'rgba(0,0,0,0.15)',
  
  // Pattern/decoration colors
  patternAccent: 'rgba(194,157,89,0.05)', 
};

 // Typography 
export const fonts = {
  heading: "'Playfair Display', Georgia, serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
};

// Gradient combinations
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%)`,
  accent: `linear-gradient(135deg, ${colors.accent} 0%, ${colors.accentHover} 100%)`,
};

// Common style objects for reuse
export const commonStyles = {
  // Button styles
  primaryButton: {
    backgroundColor: colors.accent,
    color: colors.textLight,
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderRadius: '5px',
  },
  
  secondaryButton: {
    backgroundColor: 'transparent',
    color: colors.textLight,
    border: `2px solid ${colors.textLight}`,
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderRadius: '5px',
  },
  
  // Hover effects
  primaryButtonHover: {
    backgroundColor: colors.accentHover,
    transform: 'translateY(-2px)',
  },
  
  secondaryButtonHover: {
    backgroundColor: colors.textLight,
    color: colors.primary,
  },
  
  // Link styles
  navLink: {
    textDecoration: 'none',
    color: colors.textPrimary,
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  
  navLinkHover: {
    color: colors.accent,
  },
  
  // Shadow styles
  cardShadow: {
    boxShadow: `0 2px 10px ${colors.shadowLight}`,
  },
  
  headerShadow: {
    boxShadow: `0 2px 10px ${colors.shadowLight}`,
  },
};

export default colors;