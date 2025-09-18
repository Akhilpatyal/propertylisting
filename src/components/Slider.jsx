import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../index.css"; // your custom styles

export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      effect="fade" // 👈 fade effect
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Pagination, Autoplay, EffectFade]}
      className="mySwiper"
      loop={true}
      speed={1200} // 👈 control fade speed (ms)
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="slide">
          <img
            src="/banner1.jpeg"
            alt="Banner 1"
            className="slide-img d-none d-sm-block"
          />
          <img
            src="/mobile_banner_1.jpeg"
            alt="Banner 1"
            className="slide-img d-sm-none"
          />
          <div className="slide-overlay">
            <h2>Transforming Data to Intelligence</h2>
            <p>Making more data-driven decisions by tracking industry trends.</p>
            <button class="btn-donate">Discover More</button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="slide">
          <img
            src="/banner2.jpeg"
            alt="Banner 2"
            className="slide-img d-none d-sm-block"
          />
          <img
            src="/mobile_banner_2.jpeg"
            alt="Banner 2"
            className="slide-img d-sm-none"
          />
          <div className="slide-overlay">
            <h2>Bringing Transparency to Business</h2>
            <p>Building credibility, increasing customer loyalty, and creating empowerment.</p>
            <button class="btn-donate">Discover More</button>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="slide">
          <img
            src="/banner3.jpeg"
            alt="Banner 3"
            className="slide-img d-none d-sm-block"
          />
          <img
            src="/banner3_mobile_3.jpeg"
            alt="Banner 3"
            className="slide-img d-sm-none"
          />
          <div className="slide-overlay">
            <h2>Delivering Excellence to Real Estate</h2>
            <p>Understanding expectations and offering customised solutions to clients.</p>
            <button class="btn-donate">Discover More</button>
          </div>
        </div>
      </SwiperSlide>
      
       {/* Slide 34 */}
      <SwiperSlide>
        <div className="slide">
          <img
            src="/banner4.jpeg"
            alt="Banner 3"
            className="slide-img d-none d-sm-block"
          />
          <img
            src="/mobile_banner_4.jpeg"
            alt="Banner 3"
            className="slide-img d-sm-none"
          />
          <div className="slide-overlay">
            <h2>Fuelling Growth through Innovation</h2>
            <p>Leveraging new technologies to transform Indian real estate.</p>
            <button class="btn-donate">Discover More</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
