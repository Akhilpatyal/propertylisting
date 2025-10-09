import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
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
    window.addEventListener("resize", handleResize);

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

    // --- IMAGE REVEAL ---
    gsap.utils.toArray(".text-drop__img-box").forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // --- PARALLAX EFFECT ---
    gsap.utils.toArray(".has-prlx").forEach((el) => {
      gsap.to(el, {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    gsap.from(".leadershipTeam img", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
  
      scrollTrigger: {
        trigger: ".leadershipTeam",
        start: "top 70%", // you can try 70% or even 60%
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".managementTeam img", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
   
      scrollTrigger: {
        trigger: ".managementTeam",
        start: "top 70%", // you can try 70% or even 60%
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        
      },
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
      <div className="OurTeambanner has-prlx">
        <h2 className="text-drop__line fw-bold ">Our Team</h2>
      </div>

      {/* Founders Section */}
      <div className="founder container py-5">
        <h2 className="text-drop__line fs-1 fw-bold text-center py-4 ourFounder">
          Our Founders
        </h2>
        <div className="row align-items-center">
          <div className="col-12 col-sm-6">
            <img
              src="/public/ourTeam/boss1.png"
              alt=""
              className="img-fluid text-drop__img-box"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-12 col-sm-6 d-flex flex-column justify-content-center p-2">
            <p className="text-start text-drop__line fw-bold fs-4">
              Abhishek Raj
            </p>
            <p className="text-start text-drop__line text-muted">Co-Founder</p>
            <p className="text-drop__line">
              Abhishek Raj is the CEO of Jenika Ventures, a real estate
              consultancy he established in 2020 with a vision to bring trust,
              transparency and innovation to the Indian property market. With
              more than a decade of experience in the Delhi/NCR real estate
              sector, he is widely respected for his proven track record,
              strategic foresight and client-first approach. Abhishek is an
              advocate by profession with a management degree from the United
              Kingdom, combines legal expertise with business acumen to deliver
              long-term value for clients, investors and developers. Under his
              leadership, Jenika Ventures became operational in 2021 and quickly
              achieved ₹100 crore in first-year sales while forging partnerships
              with leading developers including Tata, DLF, Godrej and Elan.
              Beyond business, Abhishek is also an accomplished
              international-level snooker player.
            </p>
          </div>

          <div className="col-12 col-sm-6 d-flex flex-column justify-content-center p-2 order-sm-1 order-2">
            <p className="text-drop__line fw-bold fs-4">Priyanka Marwha</p>
            <p className="text-drop__line text-muted">Founder and MD</p>
            <p className="text-drop__line">
              Priyanka Marwha is the Managing Director of Jenika Ventures. She
              has played a pivotal role in shaping the company’s growth and
              success. With more than a decade of experience in the Delhi-NCR
              Real Estate Market, she brings a wealth of knowledge, innovation
              and creativity to the business. Originally from the hospitality
              sector, Priyanka transitioned into real estate and quickly built
              strong industry expertise by working directly with some of the
              most prominent developers in the country. Her unique ability to
              combine client service excellence with a deep understanding of
              real estate dynamics has been instrumental in establishing Jenika
              Ventures as a trusted consultancy.
            </p>
          </div>

          <div className="col-12 col-sm-6 order-sm-2 order-1">
            <img
              src="/ourTeam/boss2.png"
              alt=""
              className="img-fluid text-drop__img-box"
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>

      {/* leadership Team */}
      <div className="leadershipTeam container py-md-5">
        <div className="row gy-4">
          <div className="col-12">
            <h2 className="text-drop__line fs-1 fw-bold text-center py-4 ourFounder">
              Leadership Team
            </h2>
          </div>
          <div className="col-12 col-md-4">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/ourTeam/Director1.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/ourTeam/Director2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/ourTeam/Director3.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Management Team */}
      <div className="managementTeam container py-5">
        <div className="row gy-4">
          <div className="col-12">
            <h2 className="text-drop__line fs-1 fw-bold text-center py-4 ourFounder">
              Management Team
            </h2>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/yogesh.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/akshay.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/sandeep.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/shailendra.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/chandra.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/sudhesh.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/ashutosh.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/satishbatra.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/Taufique.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/manish.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/mohak.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <div className="shine-animate-item">
              <div className="shine-animate">
                <img
                  src="/public/ourTeam/abbas.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>

        {/* lead Capture */}
      </div>

      {/*  */}
      <div
        style={{
          background: "linear-gradient(327deg, #c80a17 20%, #000000) 45%",
        }} >
        <div className="container">
          <div class="footer__cta-wrap py-5 ">
            <h2 class="footer__cta-wrap-title">
              <p class="link-btn text-white">
                Meet the Leaders Behind Our Vision
                <i class="icon-arrow-top-left"></i>
              </p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
