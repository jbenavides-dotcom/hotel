
import React from 'react';
import { EXPERIENCE_HIGHLIGHTS, ASSETS } from '../constants';
import { Utensils, Leaf, Footprints } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Experience: React.FC = () => {
  const reveal = useScrollReveal();

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
            <h4 className="text-brand-pink text-xs uppercase tracking-[0.4em] font-bold mb-4 sm:mb-6">El Almuerzo</h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 leading-tight">De la Huerta <br className="hidden sm:block"/> a tu Mesa</h2>
            <p className="text-neutral-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              Nuestra experiencia culinaria es una extensión de nuestra filosofía. Disfruta de un almuerzo artesanal preparado con ingredientes frescos cultivados en nuestra propia huerta orgánica.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {EXPERIENCE_HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 sm:gap-6 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-brand-beige/20 flex items-center justify-center text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h5 className="font-bold uppercase tracking-widest text-xs mb-1">{item.label}</h5>
                    <p className="text-neutral-500 text-xs">Conexión genuina con la tierra y el entorno.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
