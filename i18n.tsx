import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Lang = 'es' | 'en';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'nav.home': 'Home',
    'nav.tour': 'Coffee Tour',
    'nav.location': 'Ubicación',
    'nav.contact': 'Contacto',
    'nav.reservar': 'Reservar',
    'nav.reservar.mobile': 'Reservar por WhatsApp',
    'nav.open': 'Abrir menú',
    'nav.close': 'Cerrar menú',

    // Hero
    'hero.badge': 'Finca Cafetera de Clase Mundial',
    'hero.title.pre': 'El Coffee Tour más',
    'hero.title.highlight': 'especial de Colombia',
    'hero.subtitle': 'A solo 90 minutos de Bogotá, en una finca cafetera de clase mundial.',
    'hero.description': 'Vive una experiencia inmersiva donde el mejor café de Colombia, la naturaleza y la regeneración se encuentran. Conoce el proceso completo del café y prueba variedades premiadas a nivel internacional.',
    'hero.schedule': 'Todos los días - Salida',
    'hero.from': 'Desde',
    'hero.cta': 'Reserva tu Coffee Tour ahora',
    'hero.location.chip': 'Zipacón, Cundinamarca',

    // Tour Section — Why section
    'tour.why.subtitle': '¿Por qué elegirnos?',
    'tour.why.title': 'No es solo un tour de café',
    'tour.why.desc': 'Es una experiencia que transforma tu relación con el café, la naturaleza y el consumo consciente.',
    'tour.why.0.title': 'Cafés de clase mundial',
    'tour.why.0.text': 'Finca reconocida internacionalmente por variedades como Gesha, Sidra y Mokka.',
    'tour.why.1.title': 'De la tierra a la taza',
    'tour.why.1.text': 'Recorrido completo por cafetales, planta de procesamiento y degustación profesional.',
    'tour.why.2.title': 'Degustación de Cafés de Especialidad',
    'tour.why.2.text': 'Degustación guiada de 3 cafés de especialidad. Identifica aromas, notas sensoriales y aprende a preparar café de especialidad en casa.',
    'tour.why.3.title': 'Bosque de niebla',
    'tour.why.3.text': 'Naturaleza viva a 1.700 msnm entre montañas y biodiversidad.',
    'tour.why.4.title': 'Grupos pequeños',
    'tour.why.4.text': 'Experiencia personalizada e íntima con guías expertos.',
    'tour.why.5.title': 'Agricultura regenerativa',
    'tour.why.5.text': 'Sostenibilidad real: compostaje, biochar e insumos orgánicos.',

    // Tour Section — Day in the farm
    'tour.day.subtitle': 'La Experiencia',
    'tour.day.title': 'Tu Día en la Finca',
    'tour.day.desc': 'Sumérgete en el mundo de los cafés especiales. Desde la cereza en el árbol hasta la taza perfecta.',
    'tour.day.schedule': 'Salida',
    'tour.day.from': 'Desde',

    // Tour Section — Steps
    'tour.step': 'Paso',

    // Tour Section — What's included
    'tour.includes.title': '¿Qué incluye?',
    'tour.includes.per': 'por persona',
    'tour.includes.0': 'Transporte desde Libertario Calle 85 (mín. 2 personas)',
    'tour.includes.1': 'Bebida de bienvenida',
    'tour.includes.2': 'Recorrido guiado por cafetales y planta de procesamiento',
    'tour.includes.3': 'Visita a planta de insumos orgánicos, compostaje y Biochar',
    'tour.includes.4': 'Visita al laboratorio de catación',
    'tour.includes.5': 'Degustación de 3 variedades de café de especialidad',
    'tour.includes.6': 'Almuerzo farm-to-table',
    'tour.includes.7': 'Tiempo libre en naturaleza',
    'tour.includes.8': 'Impuestos incluidos',
    'tour.includes.cta': 'Reservar por WhatsApp',

    // Tour Section — Varieties
    'tour.varieties.title': 'Variedades Premium',
    'tour.varieties.desc': 'Degusta cafés galardonados internacionalmente:',
    'tour.varieties.gesha': 'es considerada una de las variedades de café más exclusivas del mundo, con notas florales y de jazmín que la distinguen.',

    // Tour Section — Innovation
    'tour.innovation.title.pre': 'Innovación técnica en',
    'tour.innovation.title.highlight': 'cada grano',
    'tour.innovation.desc': 'Nuestro Coffee Tour no es solo una caminata; es una inmersión técnica y sensorial profunda. Conoce nuestros procesos únicos de fermentación que nos han posicionado como líderes en la industria del café de especialidad.',
    'tour.innovation.0': 'Visita al Beneficio',
    'tour.innovation.1': 'Degustación de Lotes',
    'tour.innovation.2': 'Recorrido Cafetales',
    'tour.innovation.3': 'Bio-Sostenibilidad',
    'tour.innovation.cta': 'Reservar Mi Lugar',
    'tour.innovation.badge.title': 'World Class',
    'tour.innovation.badge.sub': 'Processing Station',

    // Tour Steps (TOUR_STEPS in constants)
    'tour.steps.0.title': 'Recorrido por el Cafetal',
    'tour.steps.0.desc': 'Caminata guiada entre cafetales de especialidad. Conoce variedades como Gesha, Sidra, Mokka y Java, el ciclo de vida del cafeto y nuestras prácticas de agricultura regenerativa.',
    'tour.steps.1.title': 'Proceso del Café',
    'tour.steps.1.desc': 'Descubre la cosecha manual, selección, fermentación y secado. Aprende cómo cada proceso crea perfiles de sabor únicos que nos han posicionado como finca de clase mundial.',
    'tour.steps.2.title': 'Degustación de Cafés de Especialidad',
    'tour.steps.2.desc': 'Degustación guiada de 3 cafés de especialidad. Identifica aromas, notas sensoriales y aprende a preparar café de especialidad en casa.',

    // Experiences (Experiences.tsx)
    'exp.subtitle': 'Más allá del café',
    'exp.title': 'Experiencias en la finca',
    'exp.desc': 'Naturaleza, bienestar y gastronomía en un entorno único de bosque de niebla.',
    'exp.0': 'Caminata por Bosque de Niebla',
    'exp.1': 'Gastronomía Farm-to-Table',
    'exp.2': 'Yoga al Amanecer',
    'exp.3': 'Cabalgata por la Finca',
    'exp.4': 'Cascadas y Senderos',
    'exp.5': 'Huerta Orgánica',

    // Experience.tsx (lunch section)
    'lunch.subtitle': 'El Almuerzo',
    'lunch.title.pre': 'De la Huerta',
    'lunch.title.highlight': 'a tu Mesa',
    'lunch.desc': 'Nuestra experiencia culinaria es una extensión de nuestra filosofía. Disfruta de un almuerzo artesanal preparado con ingredientes frescos cultivados en nuestra propia huerta orgánica.',

    // LocationSection
    'location.subtitle': 'Ubicación Estratégica',
    'location.desc': 'Estamos ubicados en el municipio de Zipacón, Cundinamarca. Un refugio de paz a solo 90 minutos de Bogotá.',
    'location.maps': 'Ver en Google Maps',

    // CTA Final (App.tsx)
    'cta.badge': 'Cupos Limitados - Reserva Hoy',
    'cta.title.pre': 'Reserva tu Coffee Tour',
    'cta.title.highlight': 'por WhatsApp',
    'cta.desc': 'Este no es un tour turístico más. Es una invitación a conectar con el origen del café, la naturaleza y el propósito detrás de cada taza.',
    'cta.price.label': 'Precio por persona',
    'cta.button': 'Reservar por WhatsApp',
    'cta.trust': 'Respuesta inmediata • Salida',
    'cta.trust.from': 'desde',

    // Footer (App.tsx)
    'footer.brand.sub': 'HOTEL',
    'footer.desc': 'Estamos ubicados en Zipacón, Cundinamarca, en medio de cafetales de agricultura regenerativa en la finca La Palma & El Tucán.',
    'footer.explore': 'Explora',
    'footer.home': 'Home',
    'footer.tour': 'El Coffee Tour',
    'footer.location': 'Ubicación',
    'footer.contact': 'Contacto',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.award': 'Green Travel Award Winner',
    'footer.sustainability': 'Sustainability First',

    // WhatsApp floating
    'whatsapp.aria': 'Contactar por WhatsApp',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.tour': 'Coffee Tour',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'nav.reservar': 'Book Now',
    'nav.reservar.mobile': 'Book via WhatsApp',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',

    // Hero
    'hero.badge': 'World-Class Coffee Farm',
    'hero.title.pre': "Colombia's most",
    'hero.title.highlight': 'special Coffee Tour',
    'hero.subtitle': 'Just 90 minutes from Bogotá, on a world-class coffee farm.',
    'hero.description': 'Live an immersive experience where Colombia\'s finest coffee, nature, and regeneration meet. Discover the full coffee process and taste internationally awarded varieties.',
    'hero.schedule': 'Every day - Departure',
    'hero.from': 'From',
    'hero.cta': 'Book your Coffee Tour now',
    'hero.location.chip': 'Zipacón, Cundinamarca',

    // Tour Section — Why section
    'tour.why.subtitle': 'Why choose us?',
    'tour.why.title': "It's not just a coffee tour",
    'tour.why.desc': 'It is an experience that transforms your relationship with coffee, nature and conscious consumption.',
    'tour.why.0.title': 'World-class coffees',
    'tour.why.0.text': 'Farm internationally recognized for varieties like Gesha, Sidra and Mokka.',
    'tour.why.1.title': 'From soil to cup',
    'tour.why.1.text': 'Full tour of the coffee plantations, processing plant and professional tasting.',
    'tour.why.2.title': 'Specialty Coffee Tasting',
    'tour.why.2.text': 'Guided tasting of 3 specialty coffees. Identify aromas, sensory notes and learn to prepare specialty coffee at home.',
    'tour.why.3.title': 'Cloud forest',
    'tour.why.3.text': 'Living nature at 1,700 masl amid mountains and biodiversity.',
    'tour.why.4.title': 'Small groups',
    'tour.why.4.text': 'Personalized and intimate experience with expert guides.',
    'tour.why.5.title': 'Regenerative agriculture',
    'tour.why.5.text': 'Real sustainability: composting, biochar and organic inputs.',

    // Tour Section — Day in the farm
    'tour.day.subtitle': 'The Experience',
    'tour.day.title': 'Your Day at the Farm',
    'tour.day.desc': 'Immerse yourself in the world of specialty coffees. From the cherry on the tree to the perfect cup.',
    'tour.day.schedule': 'Departure',
    'tour.day.from': 'From',

    // Tour Section — Steps
    'tour.step': 'Step',

    // Tour Section — What's included
    'tour.includes.title': "What's included?",
    'tour.includes.per': 'per person',
    'tour.includes.0': 'Transport from Libertario Calle 85 (min. 2 people)',
    'tour.includes.1': 'Welcome drink',
    'tour.includes.2': 'Guided tour of coffee plantations and processing plant',
    'tour.includes.3': 'Visit to organic inputs plant, composting and Biochar',
    'tour.includes.4': 'Visit to the cupping laboratory',
    'tour.includes.5': 'Tasting of 3 specialty coffee varieties',
    'tour.includes.6': 'Farm-to-table lunch',
    'tour.includes.7': 'Free time in nature',
    'tour.includes.8': 'Taxes included',
    'tour.includes.cta': 'Book via WhatsApp',

    // Tour Section — Varieties
    'tour.varieties.title': 'Premium Varieties',
    'tour.varieties.desc': 'Taste internationally awarded coffees:',
    'tour.varieties.gesha': 'is considered one of the most exclusive coffee varieties in the world, with floral and jasmine notes that set it apart.',

    // Tour Section — Innovation
    'tour.innovation.title.pre': 'Technical innovation in',
    'tour.innovation.title.highlight': 'every bean',
    'tour.innovation.desc': "Our Coffee Tour is not just a walk; it is a deep technical and sensory immersion. Learn about our unique fermentation processes that have positioned us as leaders in the specialty coffee industry.",
    'tour.innovation.0': 'Wet Mill Visit',
    'tour.innovation.1': 'Lot Tasting',
    'tour.innovation.2': 'Coffee Farm Tour',
    'tour.innovation.3': 'Bio-Sustainability',
    'tour.innovation.cta': 'Reserve My Spot',
    'tour.innovation.badge.title': 'World Class',
    'tour.innovation.badge.sub': 'Processing Station',

    // Tour Steps (TOUR_STEPS in constants)
    'tour.steps.0.title': 'Coffee Plantation Tour',
    'tour.steps.0.desc': 'Guided walk through specialty coffee plantations. Learn about varieties like Gesha, Sidra, Mokka and Java, the coffee plant life cycle and our regenerative agriculture practices.',
    'tour.steps.1.title': 'Coffee Processing',
    'tour.steps.1.desc': 'Discover manual harvesting, sorting, fermentation and drying. Learn how each process creates unique flavor profiles that have placed us as a world-class farm.',
    'tour.steps.2.title': 'Specialty Coffee Tasting',
    'tour.steps.2.desc': 'Guided tasting of 3 specialty coffees. Identify aromas, sensory notes and learn to prepare specialty coffee at home.',

    // Experiences (Experiences.tsx)
    'exp.subtitle': 'Beyond coffee',
    'exp.title': 'Experiences at the farm',
    'exp.desc': 'Nature, wellness and gastronomy in a unique cloud forest setting.',
    'exp.0': 'Cloud Forest Hike',
    'exp.1': 'Farm-to-Table Dining',
    'exp.2': 'Sunrise Yoga',
    'exp.3': 'Horseback Riding',
    'exp.4': 'Waterfalls & Trails',
    'exp.5': 'Organic Garden',

    // Experience.tsx (lunch section)
    'lunch.subtitle': 'Lunch',
    'lunch.title.pre': 'From the Garden',
    'lunch.title.highlight': 'to Your Table',
    'lunch.desc': 'Our culinary experience is an extension of our philosophy. Enjoy a handcrafted lunch prepared with fresh ingredients grown in our own organic garden.',

    // LocationSection
    'location.subtitle': 'Strategic Location',
    'location.desc': 'We are located in the municipality of Zipacón, Cundinamarca. A peaceful retreat just 90 minutes from Bogotá.',
    'location.maps': 'View on Google Maps',

    // CTA Final (App.tsx)
    'cta.badge': 'Limited Spots - Book Today',
    'cta.title.pre': 'Book your Coffee Tour',
    'cta.title.highlight': 'via WhatsApp',
    'cta.desc': 'This is not just another tourist tour. It is an invitation to connect with the origin of coffee, nature and the purpose behind every cup.',
    'cta.price.label': 'Price per person',
    'cta.button': 'Book via WhatsApp',
    'cta.trust': 'Immediate response • Departure',
    'cta.trust.from': 'from',

    // Footer (App.tsx)
    'footer.brand.sub': 'HOTEL',
    'footer.desc': 'Located in Zipacón, Cundinamarca, amid regenerative agriculture coffee plantations at La Palma & El Tucán farm.',
    'footer.explore': 'Explore',
    'footer.home': 'Home',
    'footer.tour': 'The Coffee Tour',
    'footer.location': 'Location',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.award': 'Green Travel Award Winner',
    'footer.sustainability': 'Sustainability First',

    // WhatsApp floating
    'whatsapp.aria': 'Contact via WhatsApp',
  },
};

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('lpet-hotel-lang') as Lang) || 'es';
    }
    return 'es';
  });

  useEffect(() => {
    localStorage.setItem('lpet-hotel-lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === 'es' ? 'en' : 'es'));

  const t = (key: string): string => {
    return translations[lang][key] || translations['es'][key] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
