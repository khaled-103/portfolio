import type { Metadata } from "next";
import "./globals.css";
import { LANGUAGES } from "@/lib/constants";
import { LanguagesKeysType } from "@/lib/types";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/lib/i18n/routing';
import { kufi, popions } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Khaled|Portfoilo",
  description: "Khaled sheikh Ali Portfolio Website ",
};

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
        className={`${FontClass} overflow-x-hidden dark:bg-[radial-gradient(#1e293B_1px,transparent_1px)] bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] antialiased bg-white dark:bg-gray-900 min-h-screen bg-[size:20px_20px]`}
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
