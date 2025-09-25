import React from "react";
import Slider from "../components/Slider";
import RealEstateTabs from "../components/RealEstateTabs";
import Location from "../components/Location";
import Footer from "../components/Footer";
import CollaborationTab from "../components/CollaborationTab";
import Testimonial from "../components/Testimonial";
import ProjectBanner from "../components/ProjectBanner";
import ImageSlider from "../components/ImageSlider";
import PeopleSection from "../components/PeopleSection";
import Counter from "../components/Counter";
import Portfolio from "../components/Portfolio";
import Whycarousel from "../components/Whycarousel";
const Home = () => {
  return (
    <div>
      <Slider />
      <Counter/>
      <RealEstateTabs />
      <Location/>
      <Portfolio/>
     <Testimonial/>
     <Whycarousel/>
      <Footer />
    </div>
  );
};

export default Home;
