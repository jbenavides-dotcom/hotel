
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourSection from './components/TourSection';
import Experience from './components/Experience';
import LocationSection from './components/LocationSection';
import { BOOKING_URL, ASSETS, SOCIAL_LINKS, CONTACT_INFO, COFFEE_TOUR_INFO } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light selection:bg-brand-pink selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        <TourSection />

        <Experience />

        <LocationSection />

        {/* Call to Action Final - Transaccional */}
        <section className="relative py-20 sm:py-28 lg:py-40 overflow-hidden bg-brand-dark">
          <div className="absolute inset-0 z-0">
             <img
               src={ASSETS.CAFETALES}
               className="w-full h-full object-cover opacity-30"
               alt="Reserva tu Coffee Tour en La Palma & El Tucán"
               loading="lazy"
             />
             <div className="absolute inset-0 bg-brand-pink/20 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold mb-6">
              Cupos Limitados - Reserva Hoy
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 sm:mb-8 text-white leading-tight">
              Reserva tu Coffee Tour <br className="hidden sm:block"/>
              <span className="italic text-brand-beige">por WhatsApp</span>
            </h3>
            <p className="text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto text-base sm:text-lg font-light leading-relaxed">
              Este no es un tour turístico más. Es una invitación a conectar con el origen del café, la naturaleza y el propósito detrás de cada taza.
            </p>

            {/* Precio destacado */}
            <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/20 mb-8">
              <span className="text-white/60 text-xs uppercase tracking-wider block">Precio por persona</span>
              <span className="text-white text-4xl sm:text-5xl font-serif font-bold">{COFFEE_TOUR_INFO.price}</span>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 sm:px-16 py-5 sm:py-6 font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-3 transition-all shadow-2xl active:scale-95 w-full sm:w-auto rounded-xl"
                aria-label="Reservar Coffee Tour por WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
                Reservar por WhatsApp - {COFFEE_TOUR_INFO.price}
              </a>
              <span className="text-white/50 text-xs">Respuesta inmediata • Salida {COFFEE_TOUR_INFO.time} desde {COFFEE_TOUR_INFO.departurePoint}</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="footer" className="bg-brand-dark py-16 sm:py-24 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-20">
          <div className="col-span-1 sm:col-span-2">
            <div className="flex flex-col mb-6 sm:mb-8 lg:mb-10">
              <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold tracking-tight mb-1">
                <span className="text-brand-gold">LA PALMA</span>
                <span className="text-brand-pink mx-1">&</span>
                <span className="text-brand-gold">EL TUCÁN</span>
              </span>
              <span className="text-brand-pink font-serif text-sm sm:text-base lg:text-lg">HOTEL</span>
            </div>
            <p className="text-white/50 max-w-sm leading-relaxed mb-6 sm:mb-8 lg:mb-10 text-sm font-light">
              Estamos ubicados en Zipacón, Cundinamarca, en medio de cafetales de agricultura regenerativa en la finca La Palma & El Tucán.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 text-white/40 font-bold text-[10px] uppercase tracking-widest">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Instagram</a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Facebook</a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">TikTok</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">LinkedIn</a>
              <a href={SOCIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">Website</a>
            </div>
          </div>

          <div>
            <h5 className="text-brand-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-6 sm:mb-8 lg:mb-10">Explora</h5>
            <ul className="space-y-3 sm:space-y-4 lg:space-y-5 text-xs text-white/50 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#tour" className="hover:text-white transition-colors">El Coffee Tour</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Gastronomía</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Ubicación</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-brand-pink font-bold uppercase tracking-[0.3em] text-[10px] mb-6 sm:mb-8 lg:mb-10">Contacto</h5>
            <div className="text-white/50 text-xs leading-loose font-medium flex flex-col gap-2">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors break-all sm:break-normal">{CONTACT_INFO.email}</a>
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">{CONTACT_INFO.phoneDisplay}</a>
              <p>{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 lg:mt-32 pt-8 sm:pt-10 lg:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 lg:gap-8">
            <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-center md:text-left">
                &copy; {new Date().getFullYear()} La Palma & El Tucán. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                <span className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold italic">Green Travel Award Winner</span>
                <div className="w-px h-3 sm:h-4 bg-white/10 hidden sm:block"></div>
                <span className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold">Sustainability First</span>
            </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/573189565617?text=Hola%2C%20quiero%20información%20sobre%20el%20Coffee%20Tour"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-[#128C7E] active:scale-95 transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
      </a>
    </div>
  );
};

export default App;
