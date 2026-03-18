
import React from 'react';
import { ASSETS } from '../constants';
import { TreePine, Sunrise, Flower2, MountainSnow, Utensils, Wind } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useI18n } from '../i18n';

const EXPERIENCE_IMAGES = [
  { icon: <TreePine className="w-5 h-5" />, key: 'exp.0', image: ASSETS.CAMINATA },
  { icon: <Utensils className="w-5 h-5" />, key: 'exp.1', image: ASSETS.COMIDA },
  { icon: <Sunrise className="w-5 h-5" />, key: 'exp.2', image: ASSETS.YOGA },
  { icon: <MountainSnow className="w-5 h-5" />, key: 'exp.3', image: ASSETS.CABALGATA },
  { icon: <Wind className="w-5 h-5" />, key: 'exp.4', image: ASSETS.CASCADA },
  { icon: <Flower2 className="w-5 h-5" />, key: 'exp.5', image: ASSETS.HUERTA },
];

const Experiences: React.FC = () => {
  const reveal = useScrollReveal();
  const { t } = useI18n();

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-brand-light">
      <div ref={reveal.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 ${reveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('exp.subtitle')}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('exp.title')}</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">{t('exp.desc')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {EXPERIENCE_IMAGES.map((exp, idx) => (
            <div key={idx} className="group relative rounded-2xl sm:rounded-[2rem] overflow-hidden aspect-[4/3] cursor-default">
              <img
                src={exp.image}
                alt={t(exp.key)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center text-white">
                  {exp.icon}
                </div>
                <span className="text-white font-bold text-sm sm:text-base">{t(exp.key)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
