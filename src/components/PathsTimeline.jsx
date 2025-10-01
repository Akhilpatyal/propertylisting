import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Import required modules
import { Scrollbar } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function App() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".split").forEach((el) => {
        let split = new SplitText(el, {
          type: "words,lines",
          linesClass: "line",
        });

        gsap.from(split.lines, {
          scrollTrigger: {
            trigger: el, // 👈 har element ka trigger usi pe hoga
            start: "top 80%", // jab ~80% viewport me aayega tab chalega
            toggleActions: "play none none none",
          },
          duration: 2,
          yPercent: 100,
          opacity: 0,
          stagger: 0.1,
          ease: "expo.out",
        });
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);
  return (
    <>
      <section className="container pb-5">
        <h1 className="split text-center">Our milestones</h1>
        <p className="split text-center">
          Celebrating the journey that shaped us
        </p>
        <Swiper
          slidesPerView={2} // show 2 slides
          spaceBetween={20}
          grabCursor={true}
          scrollbar={{ draggable: true, hide: false }}
          modules={[Scrollbar]}
          className="TimelineSwiper py-4"
          breakpoints={{
            0: {
              slidesPerView: 1, // 👈 mobile (default)
            },
            768: {
              slidesPerView: 1, // 👈 tablets
            },
            1024: {
              slidesPerView: 2, // 👈 desktop
            },
          }}
        >
          <SwiperSlide>
            <div className="yearItems redgradient text-white p-4 position-relative">
              <h4>2021 - Partnered with top developers</h4>
              <p className="split">
                Partnered with Grade A+ developers like DLF, Tata, Godrej, and
                Lodha Group. Achieved ₹100 crore sales in our very first year.
              </p>
              <div className="overImg position-absolute">
                <img src="/counter-one-shape1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="yearItems bg-brown-2 text-white p-4">
              <h4>2022 - Expanded operations</h4>
              <p className="split">
                Expanded operations to 5 cities, introduced new digital tools
                for real estate.
              </p>
              <div className="overImg position-absolute">
                <img src="/counter-one-shape1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="yearItems greengradient-2 text-white p-4">
              <h4>2023 - Crossed ₹500 crore sales</h4>
              <p className="split">
                Crossed ₹500 crore in sales and built strong brand recognition
                in the market.
              </p>
              <div className="overImg position-absolute">
                <img src="/counter-one-shape1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="yearItems yellowgradient-2 text-white p-4">
              <h4>2024 - Introduced AI-driven tools</h4>
              <p className="split">
                Introduced AI-driven property recommendations for customers
                across India.
              </p>
              <div className="overImg position-absolute">
                <img src="/counter-one-shape1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="yearItems redgradient-2 text-white p-4">
              <h4>2025 - Planning international expansion</h4>
              <p className="split">
                Planning international expansion with focus on Dubai & Singapore
                markets.
              </p>
              <div className="overImg position-absolute">
                <img src="/counter-one-shape1.png" alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
