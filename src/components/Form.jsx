import React, { useState } from "react";
import image from "../img/main/form/bg-image2.png";

const Form = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [activeButton, setActiveButton] = useState("signup");

  const handleSignUpClick = () => {
    setIsLoginClicked(false);
    setActiveButton("signup");
  };

  const handleLoginClick = () => {
    setIsLoginClicked(true);
    setActiveButton("login");
  };

  return (
    <div className="w-full h-full bg-purple z-10 absolute">
      <img
        className="opacity-80 max-w-8xl w-full h-full absolute"
        src={image}
        alt=""
      />
      <div className=" h-screen relative flex items-center justify-center max-lg:flex  max-lg:flex-col">
        <div className="mr-32 max-lg:text-center max-lg:mr-0 max-lg:mb-4">
          <div className="title mb-8 text-4xl leading-[52px] tracking-[-0.4px] max-md:text-2xl ">
            We solve digital <br />
            problems with an <br />
            outstanding <br />
            creative flare
          </div>

          <div className="text-dm text-white max-md:text-xs ">
            We have created a new product that will help <br />
            designers, developers and companies create <br />
            websites for their startups quickly and easily.
          </div>
        </div>

        <div className="bg-grey-lighter flex flex-col text-black max-md:mx-9 max-md:mb-2">
          <div className="container w-[470px] flex flex-col items-center justify-center max-md:w-[300px]">
            <div className="bg-white  pt-[25px] pb-[79px] rounded shadow-md text-black w-full flex flex-col items-center max-md:pb-5">
              <div className="flex justify-between text-[#15143966] font-bold text-sm max-md:text-xs ">
                <button
                  className={`pb-4 mb-8 w-[235px] tracking-[2px] uppercase border-b-[3px] border-[#EBEAED] max-md:w-[150px] ${
                    activeButton === "signup"
                      ? "border-b-[3px] border-purple3 text-purple3"
                      : ""
                  }`}
                  id="defaultButton"
                  onClick={handleSignUpClick}
                >
                  Sign up
                </button>

                <button
                  className={`pb-4 mb-8 w-[235px] tracking-[2px] uppercase border-b-[3px] border-[#EBEAED] text-center ${
                    activeButton === "login"
                      ? "border-b-[3px] border-purple3 text-purple3 max-md:w-[150px]"
                      : "max-md:w-[150px]"
                  }`}
                  id="otherButton"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </div>

              <input
                type="text"
                className="py-3 pl-6 mb-8 mt-16 form-element font-medium focus:outline-purple3 text-purple3  max-md:w-[260px] max-md:mb-3 max-md:mt-0"
                name="email"
                placeholder="Your Email"
              />

              <input
                type="password"
                className="px-3 pl-6 mb-10 form-element font-medium focus:outline-purple3 text-purple3 max-md:w-[260px] max-md:mb-3"
                name="password"
                placeholder="Password"
              />

              {!isLoginClicked && (
                <input
                  type="password"
                  className="px-3 pl-6 mb-10 form-element font-medium focus:outline-purple3 text-purple3 max-md:w-[260px] max-md:mb-3"
                  name="confirm password"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  required
                  minLength="5"
                />
              )}

              {!isLoginClicked ? (
                <button
                  type="submit"
                  className="py-3 bg-[#25dac5] font-dm text-white border-none form-element hover:bg-[#23c9b5] max-md:w-[260px]"
                  id="create"
                >
                  Create Account
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 bg-[#25dac5] font-dm text-white border-none form-element hover:bg-[#23c9b5] max-md:w-[260px]"
                  id="loginBtn"
                >
                  Log In
                </button>
              )}

              <div className="flex flex-row items-center w-full my-[19px] max-md:my-2">
                <hr className="opacity-10 bg-purple w-[100%] h-[2px]" />
                <h1 className="font-nunito mx-[14px] opacity-30">or</h1>
                <hr className="opacity-10 bg-purple w-[100%] h-[2px]" />
              </div>

              <button
                type="submit"
                className="py-3 bg-[#1DA1F2] font-dm text-white border-none form-element hover:bg-[#4a98c9] max-md:w-[260px]"
              >
                Login via Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
