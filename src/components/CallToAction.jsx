import React from "react";
import { useState, useEffect } from "react";

import background from "../img/main/callToAction/Background.png";
import arrow from "../img/main/callToAction/arrow.svg";

function CallToAction() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const element = document.querySelector("#container");

    if (element) {
      const elementPosition = element.offsetTop;
      if (scrollPosition > elementPosition - windowHeight + 100) {
        setIsVisible(true);
      } else setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-screen h-[605px] bg-purple overflow-hidden">
      <img
        src={background}
        alt="background"
        className="w-screen h-[605px] absolute"
      />
      <div
        className={`relative h-[405px] flex flex-col items-center justify-center my-24 mx-auto ${
          isVisible ? "fade-in visible" : "fade-in"
        }`}
        id="container"
      >
        <div className="title text-center mb-5">
          Easy to setup. <br /> Easy to maintain
        </div>

        <p className="text-[22px] leading-8 mb-14 text-center font-medium ">
          Bootstrap is a widely-used, sleek, intuitive and <br />
          powerful front-end framework for faster and <br /> easier web
          development.
        </p>

        <div className="flex">
          <button className="play-button w-[70px] h-[70px] bg-[#EA3223] rounded-full flex items-center justify-center mr-8 hover:bg-opacity-80">
            <img src={arrow} alt="" />
          </button>
          <button className="w-[213px] h-[70px] bg-[#25DAC5] rounded-[100px] capitalize hover:bg-opacity-80">
            get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
