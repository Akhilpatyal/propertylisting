import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
// import "./ScrollSections.css";

gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    id: "2021",
    title: "Technology",
    text: "OVA recognizes the exceptional potential of the technology sector, where each breakthrough opens up promising investment opportunities.",
    image: "/awards/8745tuhgrjrkf.jpg",
  },
  {
    id: "2022",
    title: "Innovation",
    text: "By focusing on transformative companies, OVA supports innovation that shapes tomorrow’s digital landscape.",
    image: "/awards/awards-2022-new.jpg",
  },
  {
    id: "2023",
    title: "Sustainability",
    text: "Investing in ideas that bring both growth and a sustainable future for our planet.",
    image: "/awards/Fairfox.jpg",
  },
  {
    id: "2024",
    title: "Growth",
    text: "Each investment we make builds long-term value — balancing vision with performance.",
    image: "/awards/newefhuenfe.jpg",
  },
];

export default function ScrollSections() {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // ✅ Initialize Lenis (smooth scroll)
    const lenis = new Lenis({ lerp: 0.1, smooth: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // ✅ GSAP setup
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel");

      // Horizontal scroll
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + containerRef.current.offsetWidth,
          onUpdate: (self) => {
            const index = Math.round(self.progress * (panels.length - 1));
            setActiveSection(index);
          },
        },
      });

      // Text animation per section
      panels.forEach((panel) => {
        const title = panel.querySelector(".panel-title");
        const text = panel.querySelector(".panel-text");

        const split = new SplitType(title, { types: "words" });

        gsap.from(split.words, {
          scrollTrigger: {
            trigger: panel,
            containerAnimation: ScrollTrigger.getById("scroll"),
            start: "left center",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 60,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
        });

        gsap.from(text, {
          scrollTrigger: {
            trigger: panel,
            containerAnimation: ScrollTrigger.getById("scroll"),
            start: "left center",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    }, containerRef);

    // for hide and visible
gsap.set(".section-indicator", { autoAlpha: 0 });

// Show navigation when main container appears
ScrollTrigger.create({
  trigger: ".mainContainer",
  start: "top center",
  onEnter: () => gsap.to(".section-indicator", { autoAlpha: 1, duration: 0.5 }),
  onLeaveBack: () => gsap.to(".section-indicator", { autoAlpha: 0, duration: 0.5 }),
});

// Fade out navigation when `.end` section comes into view
ScrollTrigger.create({
  trigger: ".end", // 👈 detect your footer or bottom section
  start: "top bottom", // when the .end section starts entering viewport
  onEnter: () => gsap.to(".section-indicator", { autoAlpha: 0, duration: 0.5 }),
  onLeaveBack: () => gsap.to(".section-indicator", { autoAlpha: 1, duration: 0.5 }), // ✅ correct name
});



    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-wrapper">
      {/* Right-side navigation */}
      <div className="section-indicator">
        {sections.map((sec, index) => (
          <div
            key={sec.id}
            className={`indicator-number ${
              activeSection === index ? "active" : ""
            }`}
          >
            {sec.id}
          </div>
        ))}
      </div>

      {/* Horizontal scroll sections */}
      <div className="scroll-sections mainContainer" ref={containerRef}>
        {sections.map((sec) => (
          <section
            key={sec.id}
            className="panel"
            style={{
              backgroundImage: `url(${sec.image})`,
            }}
          >
            <div className="overlay"></div>
            <div className="content">
              {/* <h2 className="panel-title">{sec.title}</h2>
              <p className="panel-text">{sec.text}</p> */}
            </div>
          </section>
        ))}
      </div>

      <div className="end"></div>
    </div>
  );
}
