import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   alternates:{
//     languages:{
//       ar
//     }
//   }
// };
export default function Home() {

  return (
    <>
      
      <HomeHeader />
      <main className="2xl:w-[73%] mt-16 xl:w-[80%] lg:w-[86%] md:w-[88%] w-[90%] mx-auto">
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
