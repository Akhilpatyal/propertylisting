import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../index.css"; // your custom styles

export default function Slider() {
  const [activeTab, setActiveTab] = useState("Residential");
  return (
    <>
      <div className="slider-wrapper">
        <Swiper
          spaceBetween={0}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[ Autoplay, EffectFade]}
          className="mySwiper"
          loop={true}
          speed={1200}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img
              src="/banner-6.png"
              alt="Banner 1"
              className="slide-img d-none d-sm-block"
            />
            <img
              src="/mobBig-1.png"
              alt="Banner 1"
              className="slide-img d-sm-none"
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <img
              src="/banner-8.png"
              alt="Banner 2"
              className="slide-img d-none d-sm-block"
            />
            <img
              src="/mobBig-2.png"
              alt="Banner 2"
              className="slide-img d-sm-none"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <img
              src="/banner-9.png"
              alt="Banner 3"
              className="slide-img d-none d-sm-block"
            />
            <img
              src="/mobBig-1.png"
              alt="Banner 3"
              className="slide-img d-sm-none"
            />
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <img
              src="/banner-8.png"
              alt="Banner 4"
              className="slide-img d-none d-sm-block"
            />
            <img
              src="/mobBig-2.png"
              alt="Banner 4"
              className="slide-img d-sm-none"
            />
          </SwiperSlide>
        </Swiper>
       

        {/* 🔍 Search Section Overlay (Fixed over all slides) */}
        <div className="search-overlay">
          <h2>Discover Most Suitable Property</h2>
          <p>
            Building credibility, increasing customer loyalty, and creating
            empowerment.
          </p>
          <div className="">
            {/* Tabs */}
            <div className="tabs">
              {["Residential", "Commercial", "Plots"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Location + Search */}
            <div className="search-box ">
              <div className="location-input justify-content-center">
                <FaMapMarkerAlt className="icon" />
                <select>
                  <option>Gurugram</option>
                  <option>Delhi</option>
                  <option>Bengaluru</option>
                  <option>Mumbai</option>
                </select>
              </div>

              <input
                type="text"
                placeholder="Search property or builders"
                className="property-input"
              />
              <button className="search-btn">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
