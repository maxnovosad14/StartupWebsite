import React, { useState, useEffect, useRef } from "react";

import backgroundImg from "../img/main/features/background.png";
import macbookImg from "../img/main/features/macbook.png";
import screenImg from "../img/main/features/Screen.png";
import fullSizeMac from "../img/main/features/Object.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Features = () => {
  const sectionsRef = useRef([]);
  const totalSections = 3;
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll(".section");
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!hovered) {
        const delta = event.deltaY;

        if (delta > 0) {
          setCurrentSectionIndex((prevIndex) =>
            prevIndex < totalSections - 1 ? prevIndex + 1 : prevIndex
          );
        } else if (delta < 0) {
          setCurrentSectionIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex
          );
        }
      }
    // if(currentSectionIndex === 2) {
    //   document.body.style.overflow = 'auto';
    // }
    // else document.body.style.overflow = 'auto';
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSectionIndex, hovered]);

  useEffect(() => {
    updateCarousel();
  }, [currentSectionIndex]);

  const updateCarousel = () => {
    sectionsRef.current.forEach((section, index) => {
      section.style.transform = `translateY(-${currentSectionIndex * 300}px)`;
    });
  };

  const handleMouseEnter = () => {
    setHovered(false);
    document.body.classList.add("no-scroll");

  };

  const handleMouseLeave = () => {
    setHovered(true);
    document.body.classList.remove("no-scroll");
  };

  return (
    <div className="w-screen h-screen bg-purple overflow-hidden max-md:h-[900px]">
      <img
        src={backgroundImg}
        className="w-screen h-screen absolute max-md:h-[900px]"
        alt="bg-img"
      />

      <div className="h-full relative flex justify-around items-center max-lg:flex-col max-lg:justify-normal">
        <div className="flex items-center left-0 top-0 h-full w-[505px] absolute max-lg:hidden">
          <img src={macbookImg} alt="" className="" />
          <img src={screenImg} alt="" className="absolute mb-8" />
        </div>

        <div className="flex justify-center items-center w-[505px] absolute lg:hidden ">
          <img
            src={fullSizeMac}
            alt=""
            className="w-[512px] h-80 max-sm:w-[400px]"
          />
          <img
            src={screenImg}
            alt=""
            className="w-[388px] h-60 absolute mb-4 mr-2 max-sm:w-[300px] max-sm:h-48 max-sm:mb-3"
          />
        </div>

        <div
          className="inner-container max-w-[600px] lg:w-[700px] ml-[475px] h-[900px] 
        overflow-hidden flex flex-col relative text-dm text-white text-5xl carousel-cont max-lg:ml-0 
        max-lg:mt-[400px] max-lg:px-4 max-lg:text-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {Array.from({ length: totalSections }).map((_, index) => (
            <div
              key={index}
              className="section transition duration-700 backdrop-blur-sm max-lg:backdrop-blur-none"
            >
              {/*Section 1 */}
              <div
                className="section transition duration-500 h-[600px]  pt-12"
                id="section1"
              >
                <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5 max-lg:text-3xl">
                  We Create Something New
                </div>
                <div className="subtitle mb-16 max-lg:mb-4">
                  We have created a new product that will help designers,
                  developers and companies create websites for their startups
                  quickly and easily.
                </div>

                <div className="flex font-dm">
                  <div className="mr-8">
                    <img
                      className="mb-7"
                      src="img/features/fa-commenting-o.svg "
                      alt=""
                    />
                    <h1 className="features-h1">30 New feature pages</h1>
                    <h2 className="features-h2">
                      Startup Framework contains components and complex blocks
                      which can easily.
                    </h2>
                  </div>

                  <div className="">
                    <img
                      className="mb-7"
                      src="img/features/diamond.svg"
                      alt=""
                    />
                    <h1 className="features-h1 ">Useful Symbol Components</h1>
                    <h2 className="features-h2">
                      Samples will show you the feeling on how to play around
                      using the components.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div
                className="section w-full transition duration-500 h-[600px] pt-12"
                id="section2"
              >
                <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5 max-lg:text-3xl">
                  We Create Something
                </div>
                <div className="subtitle mb-16 max-lg:mb-4">
                  We have created a new product that will help designers,
                  developers and companies create websites for their startups
                  quickly and easily.
                </div>

                <div className="flex font-dm">
                  <div className="mr-8">
                    <img
                      className="mb-7"
                      src="img/features/fa-commenting-o.svg "
                      alt=""
                    />
                    <h1 className="features-h1 ">30 New feature pages</h1>
                    <h2 className="features-h2">
                      Startup Framework contains components and complex blocks
                      which can easily.
                    </h2>
                  </div>

                  <div className="">
                    <img
                      className="mb-7"
                      src="img/features/diamond.svg"
                      alt=""
                    />
                    <h1 className="features-h1">Useful Symbol Components</h1>
                    <h2 className="features-h2">
                      Samples will show you the feeling on how to play around
                      using the components.
                    </h2>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div
                className="section w-full transition duration-500 h-[600px] pt-14 "
                id="section3"
              >
                <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5 max-lg:text-3xl">
                  We Create New
                </div>
                <div className="subtitle mb-16 max-lg:mb-4">
                  We have created a new product that will help designers,
                  developers and companies create websites for their startups
                  quickly and easily.
                </div>

                <div className="flex font-dm">
                  <div className="mr-8">
                    <img
                      className="mb-7"
                      src="img/features/fa-commenting-o.svg "
                      alt=""
                    />
                    <h1 className="features-h1">30 New feature pages</h1>
                    <h2 className="features-h2">
                      Startup Framework contains components and complex blocks
                      which can easily.
                    </h2>
                  </div>

                  <div className="">
                    <img
                      className="mb-7"
                      src="img/features/diamond.svg"
                      alt=""
                    />
                    <h1 className="features-h1">Useful Symbol Components</h1>
                    <h2 className="features-h2">
                      Samples will show you the feeling on how to play around
                      using the components.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation circles */}

          <div className="w-10 h-12 flex flex-col justify-center self-center bg-purple3 relative">
            {Array.from({ length: sectionsRef.current.length }).map(
              (_, index) => (
                <div
                  key={index}
                  className={`circles cursor-pointer ${
                    currentSectionIndex === index ? "circles-active" : ""
                  }`}
                  onClick={() => setCurrentSectionIndex(index)}
                ></div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
