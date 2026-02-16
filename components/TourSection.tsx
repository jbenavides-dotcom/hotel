
import React from 'react';
import { TOUR_STEPS, BOOKING_URL, ASSETS, COFFEE_TOUR_INFO } from '../constants';
import { Award, ChevronRight, Check, MessageCircle, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TourSection: React.FC = () => {
  const whyReveal = useScrollReveal();
  const stepsReveal = useScrollReveal();
  const includesReveal = useScrollReveal();
  const techReveal = useScrollReveal();

  return (
    <section id="tour" className="py-16 sm:py-24 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ¿POR QUÉ EL COFFEE TRAIL? */}
        <div ref={whyReveal.ref} className={`text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24 ${whyReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">¿Por qué La Palma & El Tucán?</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">No es solo un tour de café</h2>
          <p className="text-neutral-600 font-light text-base sm:text-lg mb-8 sm:mb-10">Es una experiencia que transforma tu forma de consumir.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-left">
            {[
              "Finca cafetera reconocida mundialmente por sus cafés especiales",
              "Recorrido completo: de la tierra a la taza",
              "Degustación profesional de variedades exclusivas",
              "Naturaleza viva en bosque de niebla",
              "Grupos pequeños y experiencia personalizada",
              "Agricultura regenerativa y sostenibilidad"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 sm:p-5 rounded-xl shadow-sm">
                <Star className="w-4 h-4 text-brand-pink mt-0.5 flex-shrink-0" />
                <span className="text-neutral-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* TU DÍA EN LA FINCA */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4">La Experiencia</h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6">Tu Día en la Finca</h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base">Sumérgete en el mundo de los cafés especiales. Desde la cereza en el árbol hasta la taza perfecta.</p>

          {/* PRECIO Y HORARIO */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2 bg-white px-6 sm:px-8 py-4 sm:py-5 rounded-2xl shadow-sm">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="text-xl sm:text-2xl font-bold text-brand-pink">{COFFEE_TOUR_INFO.price}</span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <span className="text-neutral-600 text-sm">Salida {COFFEE_TOUR_INFO.time}</span>
            </div>
            <span className="text-neutral-500 text-xs">Desde {COFFEE_TOUR_INFO.departurePoint}</span>
          </div>
        </div>

        {/* 3 PASOS DEL TOUR */}
        <div ref={stepsReveal.ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${stepsReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          {TOUR_STEPS.map((step, idx) => (
            <div key={idx} className="group bg-white rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="text-brand-pink font-bold text-[10px] uppercase tracking-widest mb-3 sm:mb-4 block">Paso {idx + 1}</span>
                <h3 className="text-xl sm:text-2xl font-serif text-brand-dark mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* SECCIÓN QUÉ INCLUYE */}
        <div ref={includesReveal.ref} className={`mt-16 sm:mt-20 lg:mt-24 bg-white rounded-2xl sm:rounded-[3rem] p-6 sm:p-10 lg:p-16 shadow-sm ${includesReveal.isVisible ? 'scroll-visible' : 'scroll-hidden'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* COLUMNA IZQUIERDA: QUÉ INCLUYE */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark mb-2">¿Qué incluye?</h3>
              <p className="text-brand-pink font-bold text-xl sm:text-2xl mb-6 sm:mb-8">{COFFEE_TOUR_INFO.price} <span className="text-neutral-500 text-sm sm:text-base font-normal">por persona</span></p>

              <ul className="space-y-3 sm:space-y-4">
                {COFFEE_TOUR_INFO.includes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
                    </div>
                    <span className="text-neutral-700 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA WHATSAPP */}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 sm:mt-10 inline-flex items-center gap-3 bg-[#25D366] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#128C7E] transition-all shadow-lg active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                Reservar por WhatsApp
              </a>
            </div>

            {/* COLUMNA DERECHA: VARIEDADES */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark mb-2">Variedades Premium</h3>
              <p className="text-neutral-600 mb-6 sm:mb-8 text-sm sm:text-base">Degusta cafés galardonados internacionalmente:</p>

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
                  <strong className="text-brand-pink">Gesha</strong> es considerada una de las variedades de café más exclusivas del mundo, con notas florales y de jazmín que la distinguen.
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
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-brand-dark">World Class</p>
                  <p className="text-[10px] sm:text-xs text-neutral-500 italic">Processing Station</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">Innovación técnica en <br className="hidden sm:block"/><span className="italic text-brand-pink">cada grano</span></h3>
            <p className="text-neutral-600 mb-6 sm:mb-8 leading-relaxed font-light text-base sm:text-lg">
              Nuestro Coffee Tour no es solo una caminata; es una inmersión técnica y sensorial profunda. Conoce nuestros procesos únicos de fermentación que nos han posicionado como líderes en la industria del café de especialidad.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {['Visita al Beneficio', 'Degustación de Lotes', 'Recorrido Cafetales', 'Bio-Sostenibilidad'].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-brand-dark bg-white p-3 sm:p-4 rounded-xl border border-brand-beige/10 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-pink"></div>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-pink font-bold uppercase text-[10px] tracking-widest border-b-2 border-brand-pink pb-2 hover:gap-4 transition-all"
            >
              Reservar Mi Lugar <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSection;
