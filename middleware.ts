

import createMiddleware from 'next-intl/middleware';
import {routing} from './lib/i18n/routing';
 
export default createMiddleware(routing);

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets/.*|locales/.*).*)',
  ],
}