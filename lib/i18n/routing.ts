import {defineRouting} from 'next-intl/routing';
import { DEFAULT_LANG, LANGUAGES } from '../constants';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.keys(LANGUAGES),
 
  // Used when no locale matches
  defaultLocale: DEFAULT_LANG
});