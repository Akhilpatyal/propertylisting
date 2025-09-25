import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function RealEstateTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container py-100">
        <Box sx={{ width: "100%" }}>
          <h2 className="fw-bold pt-5 mainFont">Latest in Real Estate</h2>
          {/* Tab Header */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Hot Deals" {...a11yProps(0)} />
              <Tab label="Blog" {...a11yProps(1)} />
              <Tab label="Media" {...a11yProps(2)} />
            </Tabs>
          </Box>

          {/* Tab Content */}
          <CustomTabPanel value={value} index={0}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay, EffectFade]}
              pagination={{
                clickable: true,
              }}
               loop={true}
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
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Pune.png" alt="img" />
                          <img src="/Pune.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div className="ripple-cont"></div>
                    </div>
                    <div className="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p className="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Download</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Chennai.png" alt="img" />
                          <img src="/Chennai.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Download</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Q2.png" alt="img" />
                          <img src="/Q2.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Download</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Thumbnail.jpeg" alt="img" />
                          <img src="/Thumbnail.jpeg" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Download</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay, EffectFade]}
              pagination={{
                clickable: true,
              }}
               loop={true}
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
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Pune.png" alt="img" />
                          <img src="/Pune.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit!{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Read</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Pune.png" alt="img" />
                          <img src="/Pune.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Lorem ipsum dolor sit amet consectetur.{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Read</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Thumbnail.jpeg" alt="img" />
                          <img src="/Thumbnail.jpeg" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing.{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Read</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Delhi.png" alt="img" />
                          <img src="/Delhi.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">Read</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay, EffectFade]}
              pagination={{
                clickable: true,
              }}
               loop={true}
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
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Delhi.png" alt="img" />
                          <img src="/Delhi.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          project Media Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Chennai.png" alt="img" />
                          <img src="/Chennai.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Thumbnail.jpeg" alt="img" />
                          <img src="/Thumbnail.jpeg" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="cards-3 section-gray">
                  <div class="card card-blog">
                    <div class="card-image news-box-items">
                      <a href="#">
                        <div className="news-image ">
                          <img src="/Pune.png" alt="img" />
                          <img src="/Pune.png" alt="img" />
                        </div>
                        {/* <div class="card-caption">
                    
                          Quisque a bibendum magna
                        </div> */}
                      </a>
                      <div class="ripple-cont"></div>
                    </div>
                    <div class="table p-3">
                      <div className="ele-1">
                        <h6 class="category text-info">
                          September 2025 | Capital Market
                        </h6>
                        <p class="card-description fs-4">
                          Indian REITs A Gateway to Institutional Real Estate{" "}
                        </p>
                        <div className="pt-5">
                          <a href="">More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
}
