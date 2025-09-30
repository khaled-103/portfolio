import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Metadata } from "next";
export async function generateMetadata({ params }: {params: Promise<{ locale: string }>}): Promise<Metadata> {
  const locale = (await params).locale;
  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "خالد الشيخ علي | الملف الشخصي"
      : "Khaled Sheikh Ali | Portfolio",
    description: isArabic
      ? "الموقع الرسمي لعرض أعمال ومهارات خالد الشيخ علي — مطور برمجيات متكامل."
      : "The professional portfolio website of Khaled Sheikh Ali — Full Stack Developer.",
    applicationName: "Khaled Sheikh Ali Portfolio",
    authors: [{ name: "Khaled Sheikh Ali" }],

    openGraph: {
      type: "profile",
      title: isArabic
        ? "خالد الشيخ علي | الملف الشخصي"
        : "Khaled Sheikh Ali | Portfolio",
      description: isArabic
        ? "استكشف أعمال ومهارات خالد الشيخ علي — مطور برمجيات متكامل وشغوف."
        : "Explore the work and skills of Khaled Sheikh Ali — a passionate full stack developer.",
      url: `https://portfolio-seven-jade-57.vercel.app/${locale}`,
      images: [
        {
          url: "/assets/developer.jpg",
          width: 1200,
          height: 630,
          alt: isArabic
            ? "صورة خالد الشيخ علي - الملف الشخصي"
            : "Khaled Sheikh Ali - Portfolio Image",
        },
      ],
      locale: isArabic ? "ar_AR" : "en_US",
      siteName: isArabic
        ? "ملف خالد الشيخ علي"
        : "Khaled Sheikh Ali Portfolio",
    },

    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "خالد الشيخ علي | الملف الشخصي"
        : "Khaled Sheikh Ali | Portfolio",
      description: isArabic
        ? "استعرض أعمال خالد الشيخ علي — مطور برمجيات متكامل."
        : "Explore the work and skills of Khaled Sheikh Ali — a passionate full stack developer.",
      images: ["/assets/developer.jpg"],
    },

    alternates: {
      canonical: `https://portfolio-seven-jade-57.vercel.app/${locale}`,
      languages: {
        en: "https://portfolio-seven-jade-57.vercel.app/en",
        ar: "https://portfolio-seven-jade-57.vercel.app/ar",
      },
    },
  };
}
export default function Home() {
  return (
    <>      
      <HomeHeader />
      <main className="2xl:w-[80%] mt-0 xl:w-[84%] lg:w-[90%] md:w-[92%] w-[95%] mx-auto">
        <Intro />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <ContactMe />
        <Footer />
      </main>
    </>
  );
}
