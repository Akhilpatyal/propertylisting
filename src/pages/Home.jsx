import { React, useEffect } from "react";
import Slider from "../components/Slider";
import RealEstateTabs from "../components/RealEstateTabs";
import Testimonial from "../components/Testimonial";
import Counter from "../components/Counter";
import Portfolio from "../components/Portfolio";
import Whycarousel from "../components/Whycarousel";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
const Home = () => {
  useEffect(() => {
    // --- LENIS SMOOTH SCROLL SETUP ---
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
      direction: "vertical",
      smoothTouch: true,
    });

    // keep Lenis and ScrollTrigger in sync
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // normalize scroll for GSAP
    ScrollTrigger.normalizeScroll(true);
    // Reset scroll triggers on resize
    const handleResize = () => ScrollTrigger.refresh();
    // --- TEXT ANIMATION ---
    gsap.utils.toArray(".text-drop__line").forEach((line, i) => {
      gsap.fromTo(
        line,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1, // slight stagger
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });


    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);
  return (
    <div>
      <Slider />
      <Counter />
      <RealEstateTabs />
      {/* <Location/> */}
      <Portfolio />
      <Testimonial />
      <Whycarousel />
    </div>
  );
};

export default Home;
