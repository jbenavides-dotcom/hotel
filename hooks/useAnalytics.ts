declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackEvent = (eventName: string, params?: Record<string, string>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
};

export const trackWhatsAppClick = (location: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: location,
    page: window.location.pathname,
  });
};

export const trackEmailClick = (location: string) => {
  trackEvent('email_click', {
    event_category: 'conversion',
    event_label: location,
    page: window.location.pathname,
  });
};

export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', {
    event_category: 'conversion',
    event_label: location,
    page: window.location.pathname,
  });
};

export const trackSocialClick = (network: string) => {
  trackEvent('social_click', {
    event_category: 'engagement',
    event_label: network,
    page: window.location.pathname,
  });
};
