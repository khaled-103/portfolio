import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
export default  function Home() {

  return (
    <>
      <HomeHeader/>
      <main className="xl:w-[80%] 2xl:w-[75%] lg:w-[88%] md:w-[92%] w-[96%] mx-auto">
        <Intro/>
        <AboutMe/>
        <Skills/>
        <Footer/>
      </main>
    </>
  );
}
