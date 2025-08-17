import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LANGUAGES } from "@/lib/constants";
import { LanguagesKeysType } from "@/lib/types";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/lib/i18n/routing';
import NextTopLoader from "nextjs-toploader";


const popions = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Khaled|Portfoilo",
  description: "Khaled Ali Portfolio Website ",
};

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
  return (
    <html lang={locale} suppressHydrationWarning dir={LANGUAGES[locale as LanguagesKeysType].direction}>
      <body
      /*${geistSans.variable} ${geistMono.variable}*/
        className={`${popions.variable} antialiased bg-gradient-to-r bg-white dark:bg-gray-900 min-h-screen `}
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
        <NextTopLoader/>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
