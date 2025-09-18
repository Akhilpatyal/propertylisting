import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
const Testimonial = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold pt-5 text-center mainFont">Testimonials</h2>
      <p className="text-center">
        When You Succeed, We Succeed!
      </p>
      <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      0: {
                        slidesPerView: 1, // 👈 mobile (default)
                      },
                      768: {
                        slidesPerView: 2, // 👈 tablets
                      },
                      1024: {
                        slidesPerView: 3, // 👈 desktop
                      },
                    }}
                    modules={[Pagination]}
                    className="mySwiper-2"
                  >
        <SwiperSlide>
          <div class="testimonial-wrapper testimonial-style-2">
            <div class="testimonial-quote">
              <img
                class="img-fluid"
                src="/src/assets/straight-quotes.png"
                alt=""
              />
            </div>
            <div class="testimonial-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus sapiente ab rem corrupti numquam aperiam, impedit possimus, culpa debitis ipsam omnis? Natus, fuga aut! ipsam omnis? Natus, fuga aut!
              </p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img
                  class="img-fluid"
                  src="/src/assets/02.png"
                  alt=""
                />
              </div>
              <div class="author-info">
                <h6 class="author-name">Rohit Mehta</h6>
                <span class="author-position">Guest</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-wrapper testimonial-style-2">
            <div class="testimonial-quote">
              <img
                class="img-fluid"
                src="/src/assets/straight-quotes.png"
                alt=""
              />
            </div>
            <div class="testimonial-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus sapiente ab rem corrupti numquam aperiam, impedit possimus, culpa debitis ipsam omnis? Natus, fuga aut! ipsam omnis? Natus, fuga aut!
              </p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img
                  class="img-fluid"
                  src="/src/assets/02.png"
                  alt=""
                />
              </div>
              <div class="author-info">
                <h6 class="author-name">Rohit Mehta</h6>
                <span class="author-position">Guest</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-wrapper testimonial-style-2">
            <div class="testimonial-quote">
              <img
                class="img-fluid"
                src="/src/assets/straight-quotes.png"
                alt=""
              />
            </div>
            <div class="testimonial-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus sapiente ab rem corrupti numquam aperiam, impedit possimus, culpa debitis ipsam omnis? Natus, fuga aut! ipsam omnis? Natus, fuga aut!
              </p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img
                  class="img-fluid"
                  src="/src/assets/02.png"
                  alt=""
                />
              </div>
              <div class="author-info">
                <h6 class="author-name">Rohit Mehta</h6>
                <span class="author-position">Guest</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="testimonial-wrapper testimonial-style-2">
            <div class="testimonial-quote">
              <img
                class="img-fluid"
                src="/src/assets/straight-quotes.png"
                alt=""
              />
            </div>
            <div class="testimonial-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus sapiente ab rem corrupti numquam aperiam, impedit possimus, culpa debitis ipsam omnis? Natus, fuga aut! ipsam omnis? Natus, fuga aut!
              </p>
            </div>
            <div class="testimonial-author">
              <div class="author-image">
                <img
                  class="img-fluid"
                  src="/src/assets/02.png"
                  alt=""
                />
              </div>
              <div class="author-info">
                <h6 class="author-name">Rohit Mehta</h6>
                <span class="author-position">Guest</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
