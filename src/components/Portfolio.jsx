import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
const Portfolio = () => {
  return (
    <section className="pb-0 pb-md-5">
      <div className="container my-5">
        <h2 className="fw-bold pt-5 text-center mainFont">Our Developers</h2>
        <p className="text-center">When You Succeed, We Succeed!</p>
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[ Autoplay, EffectFade]}
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 2, // 👈 mobile (default)
            },
            768: {
              slidesPerView: 4, // 👈 tablets
            },
            1024: {
              slidesPerView: 6, // 👈 desktop
            },
          }}
          className="mySwiper-2 py-3"
        >
          <SwiperSlide>
            <img
              src="/public/builder/prestige.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/builder/acelogo.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/builder/brigade.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/builder/shriram.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/builder/puravankara.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/public/builder/sobha.png" alt="" className="img-fluid" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/builder/total-environment.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/public/builder/godrej-properties.png"
              alt=""
              className="img-fluid"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
