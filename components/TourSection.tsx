
import React from 'react';
import { TOUR_STEPS, BOOKING_URL, ASSETS, COFFEE_TOUR_INFO } from '../constants';
import { Award, ChevronRight, Check, MessageCircle, Coffee, TreePine, Users, Sparkles, Leaf, GlassWater } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { trackWhatsAppClick } from '../hooks/useAnalytics';
import { useI18n } from '../i18n';

const TourSection: React.FC = () => {
  const whyReveal = useScrollReveal();
  const stepsReveal = useScrollReveal();
  const includesReveal = useScrollReveal();
  const techReveal = useScrollReveal();
  const { t } = useI18n();

  const WHY_CARDS = [
    { icon: <Coffee className="w-5 h-5" />, titleKey: 'tour.why.0.title', textKey: 'tour.why.0.text' },
    { icon: <Sparkles className="w-5 h-5" />, titleKey: 'tour.why.1.title', textKey: 'tour.why.1.text' },
    { icon: <GlassWater className="w-5 h-5" />, titleKey: 'tour.why.2.title', textKey: 'tour.why.2.text' },
    { icon: <TreePine className="w-5 h-5" />, titleKey: 'tour.why.3.title', textKey: 'tour.why.3.text' },
    { icon: <Users className="w-5 h-5" />, titleKey: 'tour.why.4.title', textKey: 'tour.why.4.text' },
    { icon: <Leaf className="w-5 h-5" />, titleKey: 'tour.why.5.title', textKey: 'tour.why.5.text' },
  ];

  const TOUR_STEPS_KEYS = [
    { titleKey: 'tour.steps.0.title', descKey: 'tour.steps.0.desc', image: ASSETS.CAFETALES },
    { titleKey: 'tour.steps.1.title', descKey: 'tour.steps.1.desc', image: ASSETS.PLANTA_CAFE },
    { titleKey: 'tour.steps.2.title', descKey: 'tour.steps.2.desc', image: ASSETS.DEGUSTACION_CAFE },
  ];

  const INCLUDES_KEYS = [
    'tour.includes.0',
    'tour.includes.1',
    'tour.includes.2',
    'tour.includes.3',
    'tour.includes.4',
    'tour.includes.5',
    'tour.includes.6',
    'tour.includes.7',
    'tour.includes.8',
  ];

  const INNOVATION_ITEMS = [
    'tour.innovation.0',
    'tour.innovation.1',
    'tour.innovation.2',
    'tour.innovation.3',
  ];

  return (
    <section id="tour" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ¿POR QUÉ LA PALMA & EL TUCÁN? */}
        <div ref={whyReveal.ref} className={`relative mb-16 sm:mb-20 lg:mb-24 ${whyReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <div className="absolute top-0 left-0 w-64 h-64 bg-brand-pink/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-gold/5 blur-[120px] rounded-full"></div>

          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 block">{t('tour.why.subtitle')}</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('tour.why.title')}</h2>
              <p className="text-neutral-500 font-light text-base sm:text-lg">{t('tour.why.desc')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {WHY_CARDS.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-brand-beige/30 p-6 sm:p-7 rounded-2xl hover:bg-brand-pink/5 hover:border-brand-pink/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-4 group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-brand-dark font-bold text-sm sm:text-base mb-1.5">{t(item.titleKey)}</h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed">{t(item.textKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TU DÍA EN LA FINCA */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">{t('tour.day.subtitle')}</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">{t('tour.day.title')}</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">{t('tour.day.desc')}</p>

          {/* PRECIO Y HORARIO */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2 bg-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl font-bold text-brand-pink">{COFFEE_TOUR_INFO.price}</span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <span className="text-neutral-600 text-sm">{t('tour.day.schedule')} {COFFEE_TOUR_INFO.time}</span>
            </div>
            <span className="text-neutral-500 text-xs">{t('tour.day.from')} {COFFEE_TOUR_INFO.departurePoint}</span>
          </div>
        </div>

        {/* 3 PASOS DEL TOUR */}
        <div ref={stepsReveal.ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${stepsReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {TOUR_STEPS_KEYS.map((step, idx) => (
            <div key={idx} className="group bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={t(step.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4 block">{t('tour.step')} {idx + 1}</span>
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark mb-3 sm:mb-4">{t(step.titleKey)}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN QUÉ INCLUYE */}
        <div ref={includesReveal.ref} className={`mt-16 sm:mt-20 lg:mt-24 bg-white rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 shadow-sm ${includesReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* COLUMNA IZQUIERDA: QUÉ INCLUYE */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark mb-2">{t('tour.includes.title')}</h3>
              <p className="text-brand-pink font-bold text-xl sm:text-2xl mb-6 sm:mb-8">{COFFEE_TOUR_INFO.price} <span className="text-neutral-500 text-sm sm:text-base font-normal">{t('tour.includes.per')}</span></p>

              <ul className="space-y-3 sm:space-y-4">
                {INCLUDES_KEYS.map((key, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-neutral-700 text-sm sm:text-base">{t(key)}</span>
                  </li>
                ))}
              </ul>

              {/* CTA WHATSAPP */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-brand-pink text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-brand-pink/80 transition-all shadow-lg active:scale-95"
                onClick={() => trackWhatsAppClick('tour_includes')}
              >
                <MessageCircle className="w-5 h-5" />
                {t('tour.includes.cta')}
              </a>
            </div>

            {/* COLUMNA DERECHA: VARIEDADES */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark mb-2">{t('tour.varieties.title')}</h3>
              <p className="text-neutral-600 mb-6 sm:mb-8 text-sm sm:text-base">{t('tour.varieties.desc')}</p>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {COFFEE_TOUR_INFO.varieties.map((variety, idx) => (
                  <span
                    key={idx}
                    className="px-4 sm:px-5 py-2 sm:py-3 bg-brand-beige/30 text-brand-dark rounded-full text-sm font-medium border border-brand-beige/50"
                  >
                    {variety}
                  </span>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-brand-pink/5 rounded-2xl border border-brand-pink/10">
                <p className="text-sm text-neutral-600">
                  <strong className="text-brand-pink">Gesha</strong> {t('tour.varieties.gesha')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE INNOVACIÓN TÉCNICA */}
        <div ref={techReveal.ref} className={`mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center bg-brand-pink/5 rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 lg:p-20 ${techReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden aspect-[3/4] sm:aspect-[2/3] max-h-[500px] lg:max-h-[650px] w-full border-4 border-white">
              <img
                src={ASSETS.PLANTA_CAFE}
                alt="Planta de procesamiento"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg hidden sm:block border border-brand-beige/20">
              <div className="flex items-center gap-2 sm:gap-3">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-brand-pink" />
                <div>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-dark">{t('tour.innovation.badge.title')}</p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 italic">{t('tour.innovation.badge.sub')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">{t('tour.innovation.title.pre')} <br className="hidden sm:block"/><span className="italic text-brand-pink">{t('tour.innovation.title.highlight')}</span></h3>
            <p className="text-neutral-600 mb-6 sm:mb-8 leading-relaxed font-light text-base sm:text-lg">
              {t('tour.innovation.desc')}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {INNOVATION_ITEMS.map(key => (
                <li key={key} className="flex items-center gap-3 text-sm font-medium text-brand-dark bg-white p-3 sm:p-4 rounded-xl border border-brand-beige/10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                  {t(key)}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-pink font-bold uppercase text-[10px] tracking-widest border-b-2 border-brand-pink pb-2 hover:gap-4 transition-all"
              onClick={() => trackWhatsAppClick('tour_innovation')}
            >
              {t('tour.innovation.cta')} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
