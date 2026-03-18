
import React from 'react';
import { ASSETS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const Experience: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 bg-white text-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={reveal.ref} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {/* Images Grid - Order changes on mobile */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={ASSETS.HUERTA}
                className="rounded-xl sm:rounded-2xl h-48 sm:h-64 lg:h-80 w-full object-cover"
                alt="Huerta orgánica de La Palma & El Tucán - ingredientes frescos para cocina farm-to-table"
                loading="lazy"
              />
              <img
                src={ASSETS.COMIDA}
                className="rounded-xl sm:rounded-2xl h-48 sm:h-64 lg:h-80 w-full object-cover sm:translate-y-6 lg:translate-y-12"
                alt="Almuerzo farm-to-table con ingredientes de la huerta - Coffee Tour La Palma & El Tucán"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 sm:mb-6">{t('lunch.subtitle')}</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 leading-tight">{t('lunch.title.pre')} <br className="hidden sm:block"/> {t('lunch.title.highlight')}</h2>
            <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              {t('lunch.desc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
