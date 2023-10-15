import React from "react";
import { useEffect, useState } from "react";

import ShowcaseWork from "./ShowcaseWork";

import image1 from "../img/main/Showcase/Mask.png";
import image2 from "../img/main/Showcase/Mask2.png";
import image3 from "../img/main/Showcase/Mask3.png";
import image4 from "../img/main/Showcase/Mask4.png";

function Showcase() {
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
    <div className="w-screen bg-purple overflow-hidden mt-[100px]">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-around mb-[53px] max-lg:flex-col">
          <div className="title text-4xl mr-[600px] max-lg:mr-0 max-lg:mb-4">
            Last works
          </div>
          <button className="w-[170px] h-[50px] border-2 border-opacity-30 rounded-[100px]">
            View all Works
          </button>
        </div>

        <section
          id="container"
          className={`grid grid-cols-2 gap-7 max-lg:grid-cols-1  ${
            isVisible ? "fade-in visible" : "fade-in"
          }`}
        >
          <ShowcaseWork
            imagePath={image1}
            moduleName="ui kit"
            place="Mozar Project"
          />
          <ShowcaseWork
            imagePath={image2}
            moduleName="framework"
            place="Startup Framework 2.0"
          />
          <ShowcaseWork
            imagePath={image3}
            moduleName="photos"
            place="From the Skyt"
          />
          <ShowcaseWork
            imagePath={image4}
            moduleName="pictures"
            place="Air Forces"
          />
        </section>
      </div>
    </div>
  );
}

export default Showcase;
