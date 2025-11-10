import "./globals.css";
import { LANGUAGES } from "@/lib/constants";
import { LanguagesKeysType } from "@/lib/types";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/lib/i18n/routing';
import { kufi, popions } from "@/lib/fonts";


export async function generateStaticParams() {
  return Object.keys(LANGUAGES).map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params:Promise<{locale:string}>
}>) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }  

  const FontClass = LANGUAGES[locale as LanguagesKeysType].direction === "rtl" ? kufi.className : popions.className;

  return (
    <html lang={locale} suppressHydrationWarning dir={LANGUAGES[locale as LanguagesKeysType].direction}>
      <body
        className={`${FontClass} overflow-x-hidden  antialiased bg-background min-h-screen `}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                  const theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                })();
            `,
          }}
        />
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
