import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import LightRays from "@/components/LightRays";
import { Metadata } from "next";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
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


      <div className="dark:visible invisible fixed left-0 top-0 w-full h-screen">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.3}
          lightSpread={0.8}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays "
        />
      </div>
      <HomeHeader />
      <main className="relative mt-0 2xl:w-[85%] xl:w-[87%] lg:w-[91%] md:w-[93%] w-[96%] mx-auto">

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
