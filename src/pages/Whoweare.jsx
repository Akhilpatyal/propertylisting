import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// import PathsTimeline from "../components/PathsTimeline";
const Whoweare = () => {
  const containerRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    let split1, split2;

    document.fonts.ready.then(() => {
      gsap.set(containerRef.current, { opacity: 1 });

      // Split "Who"
      split1 = new SplitText(line1Ref.current, {
        type: "words",
        aria: "hidden",
      });
      gsap.from(split1.words, {
        opacity: 0,
        y: 40, // slide-up
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
      });

      // Split "WE Are"
      split2 = new SplitText(line2Ref.current, {
        type: "words",
        aria: "hidden",
      });
      gsap.from(split2.words, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "sine.out",
        stagger: 0.1,
        delay: 0.5, // starts after first line
      });
    });

    return () => {
      if (split1) split1.revert();
      if (split2) split2.revert();
    };
  }, []);
  return (
    <div>
      <div>
        <div
          className="object-fit-cover position-relative"
          style={{ height: "550px", width: "100vw" }}
        >
          <video
            className="object-fit-cover"
            style={{
              height: "550px",
              width: "100vw",
              filter: "brightness(0.6)",
            }}
            autoPlay
            loop
            muted
            src="/video.mp4"
          ></video>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <div ref={containerRef}>
            <div
              className="text-center pt-5 mt-5 mt-lg-0"
              style={{ fontFamily: "font1" }}
            >
              {/* First Line */}
              <div
                ref={line1Ref}
                className="text-uppercase text-light"
                style={{
                  fontSize: "9.5vw",
                  lineHeight: "8vw",
                }}
              >
                Who
              </div>

              {/* Second Line */}
              <div
                ref={line2Ref}
                className="d-flex justify-content-center align-items-center text-uppercase text-light"
                style={{
                  fontSize: "9.5vw",
                  lineHeight: "8vw",
                }}
              >
                WE &nbsp;
                <div
                  className="rounded-pill overflow-hidden"
                  style={{
                    height: "7vw",
                    width: "16vw",
                    marginTop: "0.75rem",
                  }}
                >
                  <video
                    className="object-fit-cover"
                    style={{ height: "10vw", width: "16vw" }}
                    autoPlay
                    loop
                    muted
                    src="/video.mp4"
                  ></video>
                </div>
                &nbsp;Are
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 belowVideo">
        <p>
          Jenika Ventures is not just a consulting firm—it’s a growth partner
          for clients and developers alike, operating across residential,
          commercial, luxury and mixed-use segments.With Abhishek Raj at the
          helm, our journey continues to be defined by bold goals,
          customer-centricity and an unshakable commitment to shaping the future
          of Indian real estate.{" "}
        </p>
      </div>
      <div className="container py-5 ourStorySection">
        <div className="row">
          <div className="col-12 col-md-6 ourStory">
            <img
              src="/banner-6.png"
              alt=""
              className="img-fluid object-fit-cover"
              style={{ height: "100%" }}
            />
          </div>
          <div className="col-12 col-md-6 ourStory">
            <h1 className="text-center">Our Story</h1>
            <p>
              Founded in 2020, Jenika Ventures was born out of a vision to bring
              trust, transparency and innovation into India’s real estate
              consulting space.
            </p>
            <p>
              What started as a bold idea turned into an operational reality in
              2021, and within just a few years, we have grown into one of
              India’s fastest-emerging real estate consulting firms. The driving
              force behind this growth has been Mr. Abhishek Raj, CEO of Jenika
              Ventures. With a forward-looking vision and a customer-first
              philosophy, he has steered the company from a promising start-up
              to a trusted national consultancy. His belief that real estate
              consulting should go beyond transactions to deliver solutions,
              partnerships and long-term value has been the foundation of our
              culture. Under his leadership, Jenika Ventures forged strong
              alliances with India’s leading developers like DLF, Tata, Godrej
              and Lodha achieving ₹100 crore in sales in our very first year. By
              combining strategic insights with digital-first solutions,
              Abhishek Raj has played a pivotal role in driving our rapid
              expansion into key markets including Delhi-NCR, Mumbai, Pune,
              Bengaluru, Hyderabad and Goa. Today, Jenika Ventures is not just a
              consulting firm—it’s a growth partner for clients and developers
              alike, operating across residential, commercial, luxury and
              mixed-use segments. With Abhishek Raj at the helm, our journey
              continues to be defined by bold goals, customer-centricity and an
              unshakable commitment to shaping the future of Indian real estate.
            </p>
          </div>
        </div>
      </div>

      <section className="bg-brown mb-5">
        <div className="container py-5 belowVideo">
          <h1>Our Mission</h1>
          <p>
            Transformingreal estateby combiningexpertise, innovation,and
            technologyto createsmarter solutionsfor tomorrow.
          </p>
          <div className="row g-0">
            <div className=" col-12 col-md-3">
              <div className="service-box-items">
                {/* Icon Section */}
                <div className="icon text-start">
                  <img src="/one.png" alt="icon" height={"40px"} />
                </div>

                {/* Content Section */}
                <div className="content">
                  <h3>
                    <a href="service-details.html">Global Reach</a>
                  </h3>
                  <p>
                    Trusted presence across 19+ cities in India & Global Markets
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-3">
              <div className="service-box-items">
                {/* Icon Section */}
                <div className="icon text-start">
                  <img src="/two.png" alt="icon" height={"40px"} />
                </div>

                {/* Content Section */}
                <div className="content">
                  <h3>
                    <a href="service-details.html">Expert Team</a>
                  </h3>
                  <p>Driven by 2,200+ Professionals of Excellence</p>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-3">
              <div className="service-box-items">
                {/* Icon Section */}
                <div className="icon text-start">
                  <img src="/three.png" alt="icon" height={"40px"} />
                </div>

                {/* Content Section */}
                <div className="content">
                  <h3>
                    <a href="service-details.html">Innovation First</a>
                  </h3>
                  <p>
                    Pioneering real estate solutions through creativity &
                    technology
                  </p>
                </div>
              </div>
            </div>
            <div className=" col-12 col-md-3">
              <div className="service-box-items">
                {/* Icon Section */}
                <div className="icon text-start">
                  <img src="/four.png" alt="icon" height={"40px"} />
                </div>

                {/* Content Section */}
                <div className="content">
                  <h3>
                    <a href="service-details.html">Developers</a>
                  </h3>
                  <p>
                    Partnering with top 350+ developers to deliver world-class
                    projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <PathsTimeline /> */}
    </div>
  );
};

export default Whoweare;
