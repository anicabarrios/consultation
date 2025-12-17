import React from 'react';
import { useScrollAnimation } from '../../utils/Usescrollanimation';

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

  const animationClasses = [
    'animate-on-scroll',
    animation,
    isVisible ? 'is-visible' : '',
    delay > 0 ? `delay-${delay}` : '',
    duration !== 'normal' ? `duration-${duration}` : '',
    easing !== 'default' ? `ease-${easing}` : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component
      ref={ref}
      className={animationClasses}
      style={{
        maxWidth: '100%',
        overflowX: 'hidden',
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
