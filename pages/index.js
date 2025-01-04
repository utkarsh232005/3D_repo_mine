import { useEffect, useState } from "react";
import SkeletonLoader from "@/components/SkeletonLoader";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
  GraphicsWorks,
} from "@/components";
import HeroBackground from "@/components/HeroBackground";
import EarthContainer from "@/components/EarthContainer";
import PlayerContainer from "@/components/PlayerContainer";
import UpArrow from "./../public/assets/icons/up-arrow.svg";
import Services from "@/components/Services";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <main className="relative z-0 w-full h-full">
      <div className=" bg-cover bg-no-repeat bg-center">
        <Navbar />
        <HeroBackground />
        <Hero loading={loading} isMobile={isMobile} />
      </div>
      <section className="relative z-0 flex md:flex-row flex-col-reverse w-full h-full overflow-hidden">
        <About />
        {!isMobile && <PlayerContainer isMobile={isMobile} />}
      </section>
      <Services />
      <Experience />
      <Tech />
      <Works />
      <GraphicsWorks />
      {console.log('About to render Feedbacks')}
      <Feedbacks />
      {console.log('After rendering Feedbacks')}
      <section className="relative z-0 flex md:flex-row justify-between flex-col-reverse w-full h-full overflow-x-hidden sm:p-8 p-2 pb-8">
        <Contact />
        <EarthContainer isMobile={isMobile} />
        <StarsCanvas />
      </section>
      <button
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className="fixed md:w-10 md:h-10 h-8 w-8 p-2 bottom-8 md:right-10 right-8 text-center text-secondary backdrop-filter backdrop-blur-xl bg-opacity-20 bg-tertiary rounded-lg hover:scale-110 transition-all duration-300"
      >
        <UpArrow />
      </button>
    </main>
  );
}

export default App;
