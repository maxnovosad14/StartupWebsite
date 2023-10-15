import React, { useState, useEffect } from "react";
import image from "../img/main/form/bg-image.png";
// import './index.css';

function Content() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const element = document.querySelector("#container2");

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
    <div className="w-full bg-purple max-h-[540px]">
      <img className="w-screen absolute h-[540px]" src={image} alt="" />

      <div
        id="container2"
        className={`h-[540px] flex flex-col justify-center items-center font-dm mx-auto text-white text-center max-md:mx-6 ${
          isVisible ? "fade-in visible" : "fade-in"
        }`}
      >
        <div className="uppercase text-sm tracking-[2px]">free sample</div>
        <div className="title my-7 leading-[85px] max-md:leading-8">
          Powerful Generator and Free Figma Sources
        </div>
        <div className="text-xl leading-[32px] max-w-[700px] max-md:text-lg">
          Startup Framework contains components and complex blocks which can
          easily be integrated into almost any design. All of the components are
          made in the same style, and can easily be integrated into projects,
          allowing you to create hundreds of solutions.
        </div>
      </div>
    </div>
  );
}

export default Content;
