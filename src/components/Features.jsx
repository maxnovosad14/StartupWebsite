import React, { useState, useEffect, useRef } from "react";

import backgroundImg from "../img/main/features/background.png";
import macbookImg from "../img/main/features/macbook.png";
import screenImg from "../img/main/features/Screen.png";
import fullSizeMac from "../img/main/features/Object.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const Features = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const sectionsRef = useRef([]);
  const circlesRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = document.querySelectorAll(".section");
    circlesRef.current = document.querySelectorAll(".circles");
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      if (!hovered) {
        const delta = event.deltaY;
        if (delta > 0) {
          if (currentSectionIndex < sectionsRef.current.length - 1) {
            setCurrentSectionIndex(currentSectionIndex + 1);
          }
        } else if (delta < 0) {
          if (currentSectionIndex > 0) {
            setCurrentSectionIndex(currentSectionIndex - 1);
          }
        }
      }
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
      section.style.transform = `translateY(-${currentSectionIndex * 480}px)`;
    });

    circlesRef.current.forEach((circle, index) => {
      if (index === currentSectionIndex) {
        circle.classList.add("circles-active");
      } else {
        circle.classList.remove("circles-active");
      }
    });
  };

  const changeSection = (index) => {
    if (index >= 0 && index < sectionsRef.current.length) {
      setCurrentSectionIndex(index);
    }
  };


  return (
    <div className="w-screen h-screen bg-purple overflow-hidden">
    <img src={backgroundImg} className="w-screen h-screen absolute" alt="bg-img" />

    <div className="h-full relative flex justify-around items-center max-lg:flex-col">
      <div className="flex items-center left-0 top-0 h-full w-[505px] absolute max-lg:hidden">
        <img src={macbookImg} alt="" className="" />
        <img src={screenImg} alt="" className="absolute mb-8" />
      </div>

      <div className="flex w-[505px] absolute lg:hidden">
        <img src={fullSizeMac} alt="" className="w-[512px] h-80" />
        <img src={screenImg} alt="" className="w-[412px] h-60 absolute" />
      </div>

      <div
      id="scrollable"
        className="inner-container max-w-[600px] w-[600px] ml-[475px] 
        h-[500px] overflow-hidden flex flex-col relative text-dm text-white text-5xl carousel-cont max-lg:ml-0"
      >
        {/* Section 1 */}
        <div className="section w-full transition duration-500 h-screen mb-4" id="section">
            <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5">
              We Create Something New
            </div>
            <div className="subtitle mb-16">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
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
                  Startup Framework contains components and complex blocks which
                  can easily.
                </h2>
              </div>

              <div className="">
                <img className="mb-7" src="img/features/diamond.svg" alt="" />
                <h1 className="features-h1">Useful Symbol Components</h1>
                <h2 className="features-h2">
                  Samples will show you the feeling on how to play around using
                  the components.
                </h2>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="section w-full my-24 transition duration-500 h-[80vh]">
            <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5">
              We Create Something New
            </div>
            <div className="subtitle mb-16">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
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
                  Startup Framework contains components and complex blocks which
                  can easily.
                </h2>
              </div>

              <div className="">
                <img className="mb-7" src="img/features/diamond.svg" alt="" />
                <h1 className="features-h1">Useful Symbol Components</h1>
                <h2 className="features-h2">
                  Samples will show you the feeling on how to play around using
                  the components.
                </h2>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="section w-full transition duration-500 h-[120vh] mb-24">
            <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5">
              We Create Something New
            </div>
            <div className="subtitle mb-16">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
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
                  Startup Framework contains components and complex blocks which
                  can easily.
                </h2>
              </div>

              <div className="">
                <img className="mb-7" src="img/features/diamond.svg" alt="" />
                <h1 className="features-h1">Useful Symbol Components</h1>
                <h2 className="features-h2">
                  Samples will show you the feeling on how to play around using
                  the components.
                </h2>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className="section w-full transition duration-500">
            <div className="title text-4xl leading-[52px] tracking-[-0.4px] font-bold mb-5">
              We Create Something New
            </div>
            <div className="subtitle mb-16">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
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
                  Startup Framework contains components and complex blocks which
                  can easily.
                </h2>
              </div>

              <div className="">
                <img className="mb-7" src="img/features/diamond.svg" alt="" />
                <h1 className="features-h1">Useful Symbol Components</h1>
                <h2 className="features-h2">
                  Samples will show you the feeling on how to play around using
                  the components.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* Navigation Circles */}
        <div className="flex flex-col justify-center self-center">
          {Array.from({ length: sectionsRef.current.length }).map(
            (_, index) => (
              <div
                key={index}
                className={`circles cursor-pointer ${
                  currentSectionIndex === index ? "circles-active" : ""
                }`}
                onClick={() => changeSection(index)}
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Features;
  