import React from "react";
import PlansAndPricing from "./plansAndPricing";

import background from "../img/main/pricing/Mask.png";
function Pricing() {
  const options = [
    "2 GB of space",
    "14 days of backups",
    "Social integrations",
    "Client billing",
    "Remote access",
    "Custom domain",
    "24 hours support",
    "Admin tools",
    "Collaboration tools",
    "User management",
  ];

  return (
    <div className="w-screen bg-purple h-[1130px] overflow-hidden">
      <img
        src={background}
        alt="background"
        className="opacity-60 w-screen h-[1130px] absolute"
      />
      <div className="my-[100px] relative text-center flex items-center flex-col">
        <div className="title capitalize text-4xl mb-5">pricing & plans</div>
        <div className="subtitle max-w-[586px] mb-[54px]">
          Startup Framework is free forever — you only pay for custom domain
          hosting or to export your site.
        </div>

        <section>
          <div className="flex gap-[30px]">
            <PlansAndPricing plan="starter" price="9.99" include={options} linesWithCheck = {4}  />
            <PlansAndPricing plan="professional" price="19.99" include={options} linesWithCheck = {6}  />
            <PlansAndPricing plan="team" price="49.99" include={options} linesWithCheck = {10}  />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pricing;
