import { NextRequest, NextResponse } from "next/server"
import { DEFAULT_LANG, LANGUAGES } from "./lib/constants";
function getLocale(request: NextRequest) {
  if (request.cookies.has("locale")) {
    return request.cookies.get("locale")?.value;
  } else
    return DEFAULT_LANG;
}

export async function middleware(request: NextRequest) {
  console.log("middleware running");
  const { pathname } = request.nextUrl;
  const locales = Object.keys(LANGUAGES);
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));
  if (!hasLocale) {
    request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;    
    return NextResponse.redirect(request.nextUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|assets/.*|locales/.*).*)',
  ],
}