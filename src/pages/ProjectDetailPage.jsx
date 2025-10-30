import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
import { useParams } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

import projectsData from "../assets/properties.json";
import ProjectSlider from "../components/ProjectSlider";
import FloorPlan from "../components/FloorPlan";
const ProjectDetailPage = () => {
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

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    // Wait for fonts to load before animation
    document.fonts.ready.then(() => {
      gsap.set(".split2", { opacity: 1 });

      const elements = document.querySelectorAll(".split2");

      elements.forEach((el, i) => {
        // Split text into words
        const split = new SplitType(el, { types: "words", tagName: "span" });

        // Animate words
        gsap.from(split.words, {
          opacity: 0,
          y: 50, // slide up
          duration: 1,
          ease: "sine.out",
          stagger: 0.2,
          delay: i * 0.3,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    });
  }, []);

  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));
  if (!project) return <p>Project not found</p>;
  return (
    <>
      <div className="CareerBanner">
        <h1 className="split2">{project.name}</h1>
        <p className="text-drop__line split2">
          Browse through our diverse portfolio
        </p>
      </div>
      {/*  */}
      .nav
      {/*  */}
      <div className="container py-5 projectDetail">
        <div className="row">
          <div className="col-sm-8">
            <ProjectSlider />

            <div className="overview py-5">
              <h2 className="split2">OVERVIEW</h2>
              <p>
                Consectetur adipiscing elit. Pellentesque sed elit tempus,
                consectetur augue vel, venenatis neque. Suspendisse potenti.
                Nunc convallis nulla fringilla tellus dapibus lobortis. Nam in
                bibendum mi, at molestie tellus. Quisque molestie vel elit nec
                ultrices. Pellentesque a ex id lectus sagittis bibendum. Mauris
                ante nunc, eleifend sed consectetur non, rutrum quis diam.
                Suspendisse ultricies molestie tellus dapibus maximus. Quisque
                interdum accumsan velit ac pellentesque. Nam est risus, auctor
                ut diam in, mollis lobortis tellus.
              </p>
              <p>
                Suspendisse potenti. Nunc convallis nulla fringilla tellus
                dapibus lobortis. Nam in bibendum mi, at molestie tellus.
                Quisque molestie vel elit nec ultrices. Pellentesque a ex id
                lectus sagittis bibendum. Mauris ante nunc, eleifend sed
                consectetur non, rutrum quis diam. Suspendisse ultricies
                molestie tellus dapibus maximus. Quisque interdum accumsan velit
                ac pellentesque. Nam est risus, auctor ut diam in, mollis
                lobortis tellus.
              </p>
            </div>

            {/* overview */}
            <div className="discibe pb-5">
              <h2 className="ameneties-title split2">Highlights</h2>
              <div className="ul-ameneties">
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/property.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Property Type </div>
                    <div className="value">Apartments, Residential</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/rupee.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Price</div>
                    <div className="value">Rs. 4.49 Crore* to 11.75 Crore*</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/scale.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Builtup Area</div>
                    <div className="value">1992 Sq.ft. to 2592 Sq.ft.</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/stack.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Total Land Area</div>
                    <div className="value">17.5 Acres</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/location.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Total Unit</div>
                    <div className="value">668</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/residential.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Unit Variants</div>
                    <div className="value">3,4 BHK</div>
                  </span>
                </span>
                <span className="features d-flex gap-3">
                  <span className="icon">
                    <img
                      src="/confetti.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt">
                    <div className="key">Possession TIME</div>
                    <div className="value">2029</div>
                  </span>
                </span>
              </div>
            </div>

            {/* ameneties */}
            <div className="ameneties">
              <h2 className="ameneties-title split2">Features & Amenities</h2>
              <div className="ul-ameneties">
                <span className="features">
                  <span className="icon">
                    <img
                      src="/air-conditioning.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Air Conditioning</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/refrigerator.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Refrigerator</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/treadmill.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Gym</span>
                </span>

                <span className="features">
                  <span className="icon">
                    <img
                      src="/front.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Front Yard</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/pool.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Swimming Pool</span>
                </span>

                <span className="features">
                  <span className="icon">
                    <img
                      src="/laundry-service.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Laundry</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/guard.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> 24x7 Security</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/entertainment.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Media Room</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/kitchens.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Equipped Kitchen</span>
                </span>
                <span className="features">
                  <span className="icon">
                    <img
                      src="/elevator.png"
                      alt=""
                      width={"34px"}
                      style={{ transform: "rotate(0deg)" }}
                    />
                  </span>
                  <span className="txt"> Elevator</span>
                </span>
              </div>
            </div>

            {/* Prices & Plans */}
            <FloorPlan />

            {/* location */}
            <div className="location">
              <h2 className="split2">Location</h2>
              <div className="locationMap text-drop__img-box">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7301.344092278619!2d90.414319!3d23.79469!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1761220961366!5m2!1sen!2sbd"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map Location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-sm-4 contactform">
            <div className="formcol formRadius">
              <h1>
                Send us a <span className="brown">message</span>
              </h1>
              <form action="" className="pt-4">
                <div className="row gy-4">
                  <div className="col-12 ">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-12 ">
                    <input type="email" placeholder="Your Email Address" />
                  </div>

                  <div className="col-12 ">
                    <input type="tel" placeholder="Your phone number" />
                  </div>
                  <div className="col-12">
                    <textarea
                      rows={5}
                      name=""
                      id=""
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="animated-btn">
                      Submit <FaTelegramPlane />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
