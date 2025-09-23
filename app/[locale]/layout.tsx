import type { Metadata } from "next";
import {  Noto_Kufi_Arabic, Poppins } from "next/font/google";
import "./globals.css";
import { LANGUAGES } from "@/lib/constants";
import { LanguagesKeysType } from "@/lib/types";
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/lib/i18n/routing';
// import NextTopLoader from "nextjs-toploader";


const popions = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const kufi = Noto_Kufi_Arabic({

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

  const FontClass =
    LANGUAGES[locale as LanguagesKeysType].direction === "rtl"
      ? kufi.className
      : popions.className;
  return (
    <html lang={locale} suppressHydrationWarning dir={LANGUAGES[locale as LanguagesKeysType].direction}>
      <body
      /*${geistSans.variable} ${geistMono.variable}*/
        className={`${FontClass} dark:bg-[radial-gradient(#1e293B_1px,transparent_1px)] bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] antialiased bg-white dark:bg-gray-900 min-h-screen bg-[size:20px_20px]`}
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
        {/* <NextTopLoader/> */}
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}
