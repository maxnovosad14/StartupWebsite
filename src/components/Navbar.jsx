import React, { useEffect, useState } from "react";
import dribble from "../img/main/fa-dribbble.svg";
import be from "../img/main/fa-behance.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(window.innerWidth >= 768);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="font-medium text-lg relative md:pt-[85px] max-md:flex max-md:flex-col max-md:items-center menu duration-300">
      <div className="md:hidden z-50">
        <button
          className="text-white hover:opacity-30 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="p-4 space-y-2 bg-gray-600 rounded flex flex-col mb-10 ">
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
            <span className="block w-8 h-0.5 bg-white animate-pulse"></span>
          </div>
        </button>
      </div>
      <div className="flex items-center justify-center z-40">
        <ul
          className={`${
            menuOpen
              ? "max-md:w-full max-md:h-screen max-md:absolute max-md:bg-purple3 max-md:mt-[100%] transition-all duration-300"
              : "hidden"
          } flex items-center justify-center max-md:flex-col capitalize md:mb-36`}
        >
          <li className="mr-10 hover:opacity-30 nav-link max-md:mr-0">
            <a href="#">home</a>
          </li>
          <li className="mr-10 hover:opacity-30 duration-100 nav-link max-md:mr-0 max-md:my-2">
            <a href="">features</a>
          </li>
          <li className="mr-10 hover:opacity-30 duration-100 nav-link max-md:mr-0">
            <a href="#">pricing</a>
          </li>
          <li className="mr-10 hover:opacity-30 duration-100 nav-link max-md:mr-0 max-md:my-2">
            <a href="#">blog</a>
          </li>
          <li className="mr-10 hover:opacity-30 duration-100 nav-link max-md:mr-0 max-md:mb-2">
            <a href="#">
              <img src={dribble} alt="drible" />
            </a>
          </li>
          <li className="hover:opacity-30 duration-100 nav-link max-md:my-2">
            <a href="#">
              <img src={be} alt="dribble" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
