import 'server-only'
import type { Dictionaries, Dictionary, Locale } from './i18n-config'

const dictionaries: Dictionaries = {
  en: () => import("./en"),
  zh: () => import("./zh"),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  const { default: dictionary } = await (
    dictionaries[locale] || dictionaries.en
  )()

  return dictionary
}

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return 'ltr'
}
