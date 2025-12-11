import React from 'react';
import { useScrollAnimation } from '../../utils/Usescrollanimation';

/**
 * AnimatedSection - A wrapper component that adds scroll-triggered animations
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.animation - Animation type: 'fade-up', 'fade-left', 'fade-right', 'fade-in', 'scale-in'
 * @param {number} props.delay - Animation delay in ms (0, 100, 200, 300, 400)
 * @param {string} props.duration - Animation duration: 'fast', 'normal', 'slow'
 * @param {string} props.easing - Animation easing: 'default', 'bounce', 'smooth'
 * @param {number} props.threshold - Visibility threshold (0-1)
 * @param {string} props.rootMargin - Intersection observer root margin
 * @param {boolean} props.triggerOnce - Only animate once
 * @param {string} props.className - Additional CSS classes
 * @param {Object} props.style - Additional inline styles
 * @param {string} props.as - HTML element to render as (default: 'div')
 */
export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 'normal',
  easing = 'default',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  const { ref, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce,
    delay: 0 
  });

  // Build class names
  const animationClasses = [
    'animate-on-scroll',
    animation,
    isVisible ? 'is-visible' : '',
    delay > 0 ? `delay-${delay}` : '',
    duration !== 'normal' ? `duration-${duration}` : '',
    easing !== 'default' ? `ease-${easing}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Component
      ref={ref}
      className={animationClasses}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}

/**
 * Pre-configured animation components for common use cases
 */
export function FadeUp({ children, delay = 0, ...props }) {
  return (
    <AnimatedSection animation="fade-up" delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function FadeIn({ children, delay = 0, ...props }) {
  return (
    <AnimatedSection animation="fade-in" delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function FadeLeft({ children, delay = 0, ...props }) {
  return (
    <AnimatedSection animation="fade-left" delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function FadeRight({ children, delay = 0, ...props }) {
  return (
    <AnimatedSection animation="fade-right" delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}

export function ScaleIn({ children, delay = 0, ...props }) {
  return (
    <AnimatedSection animation="scale-in" delay={delay} {...props}>
      {children}
    </AnimatedSection>
  );
}