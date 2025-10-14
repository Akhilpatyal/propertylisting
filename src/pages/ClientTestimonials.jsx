import { React, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";
const ClientTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // default duration
      once: true, // whether animation should happen only once
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div>
      <div className="ClientTestimonial">
        {/* <h2 className="fw-bold " data-aos="fade-up" data-aos-duration="0.4s">
          Client{" "}
          <span data-aos="fade-up" data-aos-duration="0.9s">
            Testimonials
          </span>
        </h2> */}
      </div>

      {/* ClientTestimonials */}
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="leftItem p-1 p-sm-3 p-md-5">
              <p
                className="text-gradient fs-4 fw-medium"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src="/icons8-home.gif" alt="" className="gif" />
                Client Testimonial
              </p>
              <h2 className="fs-1 fw-bold" data-aos="fade-up"
                data-aos-duration="1500">Hear From Happy Homeowners</h2>
              <p data-aos="fade-up"
                data-aos-duration="1800">
                Discover what our satisfied homeowners have to say about their
                journey . Real stories, real experiences and real trust - built
                one home at a time.
              </p>
              <div className="imageContainer d-flex align-items-center pb-3"  data-aos="fade-up"
                data-aos-duration="2000">
                <img
                  className="rounded-circle"
                  width="50"
                  height="50"
                  src="/channelpartner.png"
                  alt=""
                />
                <img
                  className="rounded-circle"
                  style={{ border: "2px solid #fff", marginLeft: "-15px" }}
                  width="50"
                  height="50"
                  src="/start-image.png"
                  alt=""
                />
                <img
                  className="rounded-circle"
                  style={{ border: "2px solid #fff", marginLeft: "-15px" }}
                  width="50"
                  height="50"
                  src="/02.jpg"
                  alt=""
                />
                <p className="ciclecards">10K</p>
              </div>
              <p className="fw-medium"  data-aos="fade-up"
                data-aos-duration="2000">
                More Than <span className="text-gradient fs-5">25K</span>{" "}
                Clients Reviews
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
            {/*  */}
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              modules={[Pagination, Autoplay, Navigation, EffectFade]}
              loop={true}
              pagination={{
                el: ".custom-pagination",
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className}"></span>`;
                },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1, // 👈 mobile (default)
                },
                768: {
                  slidesPerView: 1, // 👈 tablets
                },
                1024: {
                  slidesPerView: 1, // 👈 desktop
                },
              }}
              className="mySwiper-2 py-3"
            >
              <SwiperSlide>
                <div
                  className="card shadow-sm border-1 p-4 rounded-3"
                  style={{ borderColor: "#e94b35" }}
                >
                  {/* Rating */}
                  <div className="mb-2 text-warning">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </div>

                  {/* Review */}
                  <p className="fst-italic text-secondary fw-semibold">
                    “From the moment we arrived, every detail was flawless. The
                    staff anticipated our every need, and the suite was pure
                    perfection. We’ll be back soon!”
                  </p>

                  {/* Profile Section */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="/start-image.png"
                        alt="Marvin McKinney"
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h6 className="mb-0 fw-bold text-dark">
                          Marvin McKinney
                        </h6>
                        <small className="text-muted">Product Manager</small>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <img
                      width="80"
                      height="80"
                      src="/straight-quotes.png"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card shadow-sm border-1 p-4 rounded-3"
                  style={{ borderColor: "#e94b35" }}
                >
                  {/* Rating */}
                  <div className="mb-2 text-warning">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </div>

                  {/* Review */}
                  <p className="fst-italic text-secondary fw-semibold">
                    “From the moment we arrived, every detail was flawless. The
                    staff anticipated our every need, and the suite was pure
                    perfection. We’ll be back soon!”
                  </p>

                  {/* Profile Section */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="/02.jpg"
                        alt="Marvin McKinney"
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h6 className="mb-0 fw-bold text-dark">
                          Marvin McKinney
                        </h6>
                        <small className="text-muted">Product Manager</small>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <img
                      width="80"
                      height="80"
                      src="/straight-quotes.png"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="card shadow-sm border-1 p-4 rounded-3"
                  style={{ borderColor: "#e94b35" }}
                >
                  {/* Rating */}
                  <div className="mb-2 text-warning">
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </div>

                  {/* Review */}
                  <p className="fst-italic text-secondary fw-semibold">
                    “From the moment we arrived, every detail was flawless. The
                    staff anticipated our every need, and the suite was pure
                    perfection. We’ll be back soon!”
                  </p>

                  {/* Profile Section */}
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex align-items-center">
                      <img
                        src="/channelpartner.png"
                        alt="Marvin McKinney"
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                      />
                      <div>
                        <h6 className="mb-0 fw-bold text-dark">
                          Marvin McKinney
                        </h6>
                        <small className="text-muted">Product Manager</small>
                      </div>
                    </div>

                    {/* Quote Icon */}
                    <img
                      width="80"
                      height="80"
                      src="/straight-quotes.png"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-controls d-flex justify-content-center align-items-center mt-3">
              <div className="swiper-button-prev"></div>
              <div className="custom-pagination mx-3"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
