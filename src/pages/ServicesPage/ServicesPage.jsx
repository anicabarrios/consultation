import React from 'react';
import { Scale } from 'lucide-react';
import HeroPages from '../../components/HeroPages/HeroPages';
import Services from '../../components/Services/Services';
import './ServicesPage.css';

export default function ServicesPage({ language }) {
  return (
    <div className="services-page-wrapper">
      <HeroPages
        icon={Scale}
        title={language === 'sr' ? 'Oblasti rada' : 'Practice Areas'}
        language={language}
        iconSize={48}
      />

      <Services language={language} />
    </div>
  );
}