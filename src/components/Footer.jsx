import React from "react";
import twitter from "../img/main/callToAction/fa-twitter.svg";
import facebook from "../img/main/callToAction/fa-facebook-square.svg";
import google from "../img/main/callToAction/fa-google-plus.svg";

function Footer() {
  return (
    <div className="w-screen overflow-hidden">
      <div className="max-w-[1169px] mx-auto mt-[54px] mb-[44px] flex flex-col capitalize ">
        <section className="flex flex-wrap items-center justify-between">
          <h2 className="subtitle text-2xl font-bold tracking-[-0.293px]">
            Startup 3
          </h2>
          <div className="flex">
            <p>privacy policy</p>
            <p className="mx-[30px]">terms</p>
            <img src={twitter} alt="twitter" className="cursor-pointer"/>
            <img src={facebook} alt="facebook" className="mx-[30px] cursor-pointer" />
            <img src={google} alt="google" className="cursor-pointer" />
          </div>
        </section>
        <hr className="max-w-[1169px] opacity-40 my-[46px] " />
        <section className="flex flex-wrap">
          <p>tour</p>
          <p className="mx-[27px]">features</p>
          <p>pricing plans</p>
          <p className="mx-[27px]">our works</p>
          <p className="mr-[27px]">brands</p>
          <p>contacts</p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
