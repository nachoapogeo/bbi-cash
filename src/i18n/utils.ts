import type { Locale } from './translations';

export function getLocalePath(locale: Locale, path: string = '') {
  if (locale === 'en') return `/${path}`;
  return `/${locale}/${path}`;
}

export function getAlternateLocales(currentLocale: Locale): { locale: Locale; label: string; path: string }[] {
  const all: { locale: Locale; label: string }[] = [
    { locale: 'en', label: 'EN' },
    { locale: 'es', label: 'ES' },
    { locale: 'pt', label: 'PT' },
  ];
  return all.map((l) => ({
    ...l,
    path: getLocalePath(l.locale),
    active: l.locale === currentLocale,
  }));
}
