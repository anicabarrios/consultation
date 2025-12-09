import React from 'react';
import { colors } from '../../utils/colors.js';
import './HeroPages.css';

/**

 * 
 * @param {Object} props
 * @param {React.ComponentType} props.icon 
 * @param {string} props.title 
 * @param {string} props.language 
 * @param {boolean} props.centered 
 * @param {boolean} props.showIcon 
 * @param {boolean} props.showLines 
 * @param {number} props.iconSize 
 * @param {React.ReactNode} props.children 
 * @param {string} props.className 
 */
export default function HeroPages({ 
  icon: IconComponent,
  title,
  language = 'sr',
  centered = true,
  showIcon = true,
  showLines = true,
  iconSize = 70,
  children,
  className = ''
}) {

  const cssVars = {
    '--primary-color': colors.primary,
    '--accent-color': colors.accent,
    '--accent-hover': colors.accentHover,
    '--text-light': colors.textLight,
    '--text-secondary': colors.textSecondary,
    '--light-bg': colors.lightBg
  };

  return (
    <section 
      className={`hero-pages ${centered ? 'hero-pages--centered' : ''} ${className}`}
      style={cssVars}
    >
      <div className="hero-pages__pattern" />
      <div className="hero-pages__overlay" />
      <div className="container hero-pages__container">
        <div className="row justify-content-center">
          <div className={`col-12 ${centered ? 'col-lg-10 text-center' : 'col-lg-8'}`}>
            
            {showIcon && IconComponent && (
              <div className="hero-pages__icon">
                <IconComponent 
                  size={iconSize} 
                  color={colors.accent} 
                  strokeWidth={1.5} 
                />
              </div>
            )}

            <div className="hero-pages__title-wrapper">
              {title && (
                <div className="hero-pages__title-row">
                  {showLines && (
                    <div className="hero-pages__accent-line hero-pages__accent-line--left" />
                  )}
                  <h1 className="hero-pages__title">
                    {title}
                  </h1>
                  
                  {showLines && (
                    <div className="hero-pages__accent-line hero-pages__accent-line--right" />
                  )}
                </div>
              )}
            </div>

            {children && (
              <div className="hero-pages__content">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}