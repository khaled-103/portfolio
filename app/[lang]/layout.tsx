import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { LANGUAGES } from "@/lib/constants";
import { LanguagesKeysType } from "@/lib/types";
import { DictionaryProvider } from "@/components/DictionaryProvider";
import { getDictionary } from "@/lib/translate";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
  params:Promise<{lang:string}>

}>) {
  const {lang} = await params;  
  const dictionary = await getDictionary(lang as LanguagesKeysType);
  return (
    <html lang={lang} suppressHydrationWarning dir={LANGUAGES[lang as LanguagesKeysType].supportRtl ? "rtl":"ltr"}>
      <body
      /*${geistSans.variable} ${geistMono.variable}*/
        className={`${popions.variable} antialiased dark:bg-main-dark min-h-screen `}
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
        <DictionaryProvider dictionary={dictionary}>
          {children}
        </DictionaryProvider>
        
      </body>
    </html>
  );
}
