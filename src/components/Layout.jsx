import React from "react";

import Navbar from "./Navbar";
import Slider from "./slider";
import Content from "./Content";
import Features from "./Features";
import Testimonial from "./Testimonial";
import CallToAction from "./CallToAction";
import Showcase from "./Showcase";
import Team from "./Team";


import bgImg from "../img/main/Image.png";
import Contacts from "./Contacts";
import Pricing from "./Pricing";
import Footer from "./Footer";


function Layout() {
  return (
    <div className="w-full bg-purple overflow-hidden flex flex-col">
      <div className="w-full h-[1400px] flex flex-col max-md:max-h-[760px]">
        <img
          className="opacity-70 max-w-8xl w-full h-[1400px] max-md:h-[760px] absolute"
          src={bgImg}
          alt="bg-image"
        />

    <Navbar/>
    <Slider />
      
      </div>
      <Content />
      <Features />
      <Testimonial/>
      <CallToAction/>
      <Showcase/>
      <Team/>
      <Contacts/>
      <Pricing/>
      <Footer/>
      </div>
  );
}

export default Layout;
