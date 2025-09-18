import React from "react";
import Slider from "../components/Slider";
import RealEstateTabs from "../components/RealEstateTabs";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CollaborationTab from "../components/CollaborationTab";
import Testimonial from "../components/Testimonial";
import ProjectBanner from "../components/ProjectBanner";
const Home = () => {
  return (
    <div>
      <Slider />
      <RealEstateTabs />
      <Services />
      <CollaborationTab/>
      <ProjectBanner/>
     <Testimonial/>
      <div className="container">
        <div className="moreInfo">
          <h3>We have much more..</h3>
          <p className="morelink pt-3 ">
              <a href="#">Latest Trends</a>
              <a href="#">Technology & Innovation</a>
              <a href="#">Industry Relations</a>
              <a href="#">Business News</a>
              <a href="#">Market Research</a>
          </p>
          <div class="tg-button-wrap">
            <a class="btn-with-icon" href="about.html">
              <span class="btn btn-five">
                Collaborate with us
                <img src="arrow (2).png" alt="" height={"30px"} />
              </span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
