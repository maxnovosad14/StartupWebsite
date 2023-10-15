import React from "react";

import background from "../img/main/Contacts/Image.png";
import phone from "../img/main/Contacts/fa-phone.svg";
import mail from "../img/main/Contacts/fa-envelope.svg";
import building from "../img/main/Contacts/fa-building-o.svg";

function Contacts() {
  // function copyTextOnClick(text) {
  //   const textarea = document.createElement("textarea");
  //   textarea.value = text;
  //   document.body.appendChild(textarea);
  //   textarea.select();
  //   document.execCommand("copy");
  //   document.body.removeChild(textarea);

  //   alert("Text copied to clipboard!");
  // }
  // const phoneElement = document.querySelector(".phone:nth-child(1)");
  // const mailElement = document.querySelector(".mail:nth-child(2)");
  // const addressElement = document.querySelector(".flex:nth-child(3)");

  // phoneElement.addEventListener("click", () => {
  //   copyTextOnClick(phoneElement);
  // });

  // mailElement.addEventListener("click", () => {
  //   copyTextOnClick(mailElement);
  // });

  // addressElement.addEventListener("click", () => {
  //   copyTextOnClick(addressElement);
  // });
  return (
    <div className="w-screen h-[770px] bg-purple overflow-hidden max-lg:h-[1100px]">
      <img
        src={background}
        alt="background"
        className="opacity-80 h-[770px] w-full absolute max-lg:h-[1100px] "
      />

      <div className="my-[100px] relative lg:flex lg:justify-center max-lg:my-0 max-lg:flex max-lg:flex-col max-lg:items-center ">
        <div className="max-w-[399px] lg:mr-[99px] ">
          <div className="title text-4xl leading-[52px] tracking-[-0.4px] mb-7">
            Let’s Keep in Touch
          </div>
          <div className="subtitle mb-[53px]">
            We have created a new product that will help designers, developers
            and companies create websites for their startups quickly and easily.
          </div>

          <div className="max-lg:flex max-lg:flex-col max-lg:items-center">
            <div className="flex cursor-pointer phone">
              <img src={phone} alt="phone" className="mr-[15px]" />
              +1 555 505 5050
            </div>
            <div className="flex my-[44px] cursor-pointer mail">
              <img src={mail} alt="mail" className="mr-[15px]" />
              info@designmodo.com
            </div>
            <div className="flex cursor-pointer">
              <img
                src={building}
                alt="building"
                className="mr-[15px] self-start"
              />
              San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              230909
            </div>
          </div>
        </div>
        <div
          className="form w-[470px] h-[570px] 
        rounded-[10px] px-[50px] py-[56px] bg-white contact-form max-lg:w-[370px] max-lg:h-[590px] max-lg:py-6
        "
        >
          <section className="flex flex-row mb-[35px] max-lg:flex-col">
            <div className="flex flex-col max-lg:mb-4">
              your name
              <input
                type="text"
                placeholder="First name"
                className="py-[10px] pl-6 mr-[30px] rounded-[100px] 
                outline outline-2 outline-lightgray focus:outline-2 focus:outline-purple3 focus:placeholder:text-purple3
                max-lg:mr-0 "
              />
            </div>
            <div className="flex flex-col max-lg:items-center">
              budget
              <select
                name="budget"
                id="budget"
                className="w-[140px] py-[12px] pl-3 rounded-[100px] outline outline-2 outline-lightgray focus:outline-2 focus:outline-purple3 
                focus:placeholder:text-purple3 max-lg:w-[200px]
              "
              >
                <option>Select Budget</option>
                <option>$500</option>
                <option>$400</option>
                <option>$300</option>
                <option>$200</option>
              </select>
            </div>
          </section>
          <div className="flex flex-col mb-[35px]">
            input field
            <input
              type="email"
              name=""
              id=""
              placeholder="name@mail.com"
              className="py-[10px] pl-6 mt-3 rounded-[100px] outline outline-2 outline-lightgray focus:outline-2 focus:outline-purple3 focus:placeholder:text-purple3"
            />
          </div>

          <div className="flex flex-col mb-[30px] max-lg:mb-3">
            your message
            <input
              placeholder="Message"
              type="text"
              className="w-[360px] h-[110px] 
              rounded-[10px] mt-4 pt-3 pl-5 pb-20 outline outline-2
               outline-lightgray focus:outline-2 focus:outline-purple3 focus:placeholder:text-purple3
               max-lg:w-[270px] max-lg:h-[110px] max-lg:mb-3"
            />
          </div>
          <section className="flex items-center justify-between">
            <section className="flex items-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-5 h-5 accent-[#25DAC5] mr-3"
              />
              <h2 className="text-4 capitalize tracking-normal text-[#15143966]">
                Send me a copy
              </h2>
            </section>
            <button className="bg-[#25DAC5] px-[38px] py-3 rounded-[100px] text-white capitalize">
              send
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
