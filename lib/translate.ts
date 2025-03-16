import 'server-only'
import { LanguagesKeysType } from './types'
 
const dictionaries = {
  en: () => import('@/public/locales/en.json').then((module) => module.default),
  ar: () => import('@/public/locales/ar.json').then((module) => module.default),
}
 
export const getDictionary = async (locale:LanguagesKeysType) =>
  dictionaries[locale]();
