"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "bootstrap/dist/css/bootstrap.min.css";

gsap.registerPlugin(ScrollTrigger);

export default function PathsTimeline() {
  const containerRef = useRef(null);
  const bgRef = useRef(null); // new ref for background width

  useEffect(() => {
    const container = containerRef.current;
    const sections = gsap.utils.toArray(container.querySelectorAll(".col-4"));

    const totalWidth = sections.length * sections[0].offsetWidth;

    let ctx = gsap.context(() => {
      // Horizontal scroll
      const scrollTween = gsap.to(sections, {
        x: () => `-${totalWidth - window.innerWidth}px`,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 20%",
          end: () => `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          markers: true,
        },
      });

      // Background width animation from 80% to 100%
      gsap.to(bgRef.current, {
        width: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          containerAnimation: scrollTween, // link to horizontal scroll
          start: "left left",
          end: "right right",
          scrub: 1,
        },
      });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section style={{backgroundColor:"#edebe4", position:"relative"}}>
      {/* Background fill div */}
      <div 
        ref={bgRef} 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "80%", // start at 80%
          backgroundColor: "#d6d2c4", // or any color
          zIndex: -1,
        }}
      ></div>

      <div className="container py-5" ref={containerRef}>
        <div className="row flex-nowrap">
          <div className="col-4">
            <div className="process-box fade-top">
              <span className="number">2021</span>
              <p>
                Partnered with Grade A+ developers like DLF, Tata, Godrej, and Lodha Group. Achieved ₹100 crore sales in our very first year.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="process-box fade-top">
              <span className="number">2022</span>
              <p>
                Spread wings across Delhi-NCR, Mumbai and Pune. Recognized as Outstanding Real Estate Company of the Year 2022.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="process-box fade-top">
              <span className="number">2023</span>
              <p>
                Deepened collaboration with Lodha Group. Diversified into commercial & mixed-use projects. Surpassed ₹300 crore with 80% YoY growth.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="process-box fade-top">
              <span className="number">2024</span>
              <p>
                Expanded into Goa, Bengaluru & Hyderabad. Hit ₹750 crore in sales with 150% YoY growth, moving closer to becoming a top-tier consultancy nationwide.
              </p>
            </div>
          </div>
          <div className="col-4">
            <div className="process-box fade-top">
              <span className="number">2025</span>
              <p>
                Now chasing our boldest target—₹2,000 crore in sales with 2x growth in a single year. Backed by client trust, strategic alliances and our relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
