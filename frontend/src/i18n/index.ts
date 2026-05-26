import type { Locale } from '@/data/types';
import { en } from './en';
import { fr } from './fr';

type ContentSchema<T> = {
  readonly [Key in keyof T]: T[Key] extends string ? string : ContentSchema<T[Key]>;
};

export type Content = ContentSchema<typeof en>;

export const content = {
  en,
  fr,
} satisfies Record<Locale, Content>;
