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
