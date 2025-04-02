import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import { LanguagesKeysType } from "@/lib/types";

export default async function Home({params}:{params:Promise<{lang:string}>}) {
  const lang = (await params).lang as LanguagesKeysType;

  return (
    <>
      <HomeHeader lang={lang}/>
      <main className="xl:w-[80%] 2xl:w-[75%] lg:w-[88%] md:w-[92%] w-[96%] mx-auto">
        <Intro lang={lang}/>
        <AboutMe/>
        <Footer lang={lang}/>
      </main>
    </>
  );
}
