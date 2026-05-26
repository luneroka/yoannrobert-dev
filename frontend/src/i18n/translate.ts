import type { Locale, LocalizedString } from '@/data/types';

export function translate(text: LocalizedString, locale: Locale): string {
  return text[locale];
}
