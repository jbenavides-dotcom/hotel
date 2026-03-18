
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BOOKING_URL } from '../constants';
import { trackWhatsAppClick } from '../hooks/useAnalytics';
import Logo from './Logo';
import LangToggle from './LangToggle';
import { useI18n } from '../i18n';

const NAV_KEYS = [
  { key: 'nav.home', href: '#hero' },
  { key: 'nav.tour', href: '#tour' },
  { key: 'nav.location', href: '#location' },
  { key: 'nav.contact', href: '#footer' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-brand-dark/95 backdrop-blur-xl py-2 sm:py-3 shadow-xl' : 'bg-transparent py-4 sm:py-6 lg:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <a href="#hero" className="flex items-center group" aria-label="Ir al inicio - La Palma & El Tucán">
          <Logo variant="light" size="md" />
        </a>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_KEYS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`text-[10px] font-bold transition-colors uppercase tracking-[0.3em] ${scrolled ? 'text-white hover:text-brand-pink' : 'text-white/80 hover:text-white'}`}
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <LangToggle />
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-brand-pink hover:bg-brand-pink/80 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 rounded-full"
              aria-label="Reservar Coffee Tour por WhatsApp"
              onClick={() => trackWhatsAppClick('navbar_desktop')}
            >
              <MessageCircle className="w-4 h-4" />
              {t('nav.reservar')}
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? t('nav.close') : t('nav.open')}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-brand-dark/98 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${
        isOpen ? 'max-h-[100vh]' : 'max-h-0'
      }`}>
        <div className="flex flex-col p-6 sm:p-10 space-y-6 sm:space-y-8 min-h-[60vh]">
          {NAV_KEYS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-xl sm:text-2xl font-serif text-white hover:text-brand-pink transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {t(link.key)}
            </a>
          ))}
          <div className="flex justify-center pt-2">
            <LangToggle />
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { trackWhatsAppClick('navbar_mobile'); setIsOpen(false); }}
            className="bg-brand-pink hover:bg-brand-pink/80 text-white px-6 py-4 sm:py-5 text-center text-xs font-bold uppercase tracking-widest mt-4 active:scale-95 transition-transform rounded-full flex items-center justify-center gap-2 w-full"
          >
            <MessageCircle className="w-5 h-5" />
            {t('nav.reservar.mobile')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
