import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

import arrowRight from "../img/main/fa-angle-right.svg";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 3;

  function nextSlide() {
    setCurrentIndex((currentIndex + 1) % totalSlides);
  }

  function previousSlide() {
    setCurrentIndex((currentIndex - 1 + totalSlides) % totalSlides);
  }

  const updateCircles = () => {
    return Array.from({ length: totalSlides }, (_, index) => (
      <div
        key={index}
        className={`h-3 w-3 mr-2 rounded-full border-2 cursor-pointer circle ${
          index === currentIndex ? "filled" : ""
        }`}
      ></div>
    ));
  };

  return (
    <div className="flex flex-col relative">
      <div className="buttons flex justify-around">
        <img
          className="w-6 h-6 opacity-30 rotate-180 hover:opacity-100 hover:duration-150 cursor-pointer"
          id="leftArrow"
          src={arrowRight}
          onClick={previousSlide}
        />
        <img
          className="w-6 h-6 opacity-30 hover:opacity-100 hover:duration-150 cursor-pointer"
          id="rightArrow"
          src={arrowRight}
          onClick={nextSlide}
        />
      </div>

      <main className="font-bold flex flex-col items-center justify-center ">
        <div className="flex justify-around">
          {Array.from({ length: totalSlides }, (_, index) => (
            <div
              key={index}
              className={`absolute w-screen flex justify-center text-5xl transition-all ease-in-out duration-1000 ${
                index === currentIndex ? "translate-x" : "translate-x-full"
              } slide`}
            >
              {/* Slide content */}
              <div className="flex flex-col items-center max-md:mx-8">
                <div className="tracking-[-0.293px] text-2xl">
                  Startup {index + 1}
                </div>
                <div className="flex items-center">
                  <div className="capitalize text-7xl my-7 max-md:text-4xl max-md:my-4 text-center">
                    forget about code
                  </div>
                </div>
                <div className="text-xm text-center leading-8 font-medium max-w-[550px]">
                  Startup Framework gives you complete freedom over your
                  creative
                  process — you don’t have to think about any technical aspects.
                  There
                  are no limits and absolutely no coding.
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-[347px] max-md:mt-[370px]">
          <div className="flex mb-14 max-md:mb-6">{updateCircles()}</div>
          <Link to="/form">
              <button
                className="w-56 h-14 bg-purple2 rounded-full font-medium text-lg cursor-pointer hover:bg-opacity-80 hover:opacity-95 hover:duration-100"
              >
                Create an Account
              </button>
              
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Slider;
