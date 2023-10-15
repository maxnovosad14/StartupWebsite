import React from "react";
import check from "../img/main/pricing/check.svg";

const PlansAndPricing = ({ plan, price, include, linesWithCheck }) => {
  return (
    <div
      className="w-[370px] h-[730px] border-2 border-[#FFF] flex flex-col
     border-opacity-20 rounded-lg pt-16  text-left cursor-pointer hover:bg-purple3 hover:bg-opacity-10 hover:px-8 duration-300 max-lg:w-[300px]"
    >
      <section className="pl-[44px]">
        <h2 className="text-[22px] mb-[22px] capitalize ml-[25px]">{plan}</h2>
        <h1 className="title flex ml-[25px] mb-[42px]">
          {price} <span className="text-base font-normal ml-2 mt-2">$</span>
        </h1>
        <ul className="text-white">
          {include.map((option, index) => (
            <li
              key={index}
              className={index < linesWithCheck ? "checked" : "unchecked"}
            >
              {index < linesWithCheck ? (
                <img src={check} className="mr-4" />
              ) : (
                <span className="mr-[27px] "></span> // Empty space for lines beyond the first 4
              )}
              {option}
            </li>
          ))}
        </ul>
      </section>
      <button className="w-[230px] h-[60px] mt-[30px] self-center capitalize border-2 border-[#FFF] rounded-[100px] border-opacity-20 duration-300 hover:bg-[#E93A7D] hover:border-opacity-0">
        get started
      </button>
    </div>
  );
};

export default PlansAndPricing;
