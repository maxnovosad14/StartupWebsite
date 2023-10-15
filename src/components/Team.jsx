import React from "react";
import TeamPeople from "./TeamPeople";

import avatar1 from "../img/main/callToAction/Mask.svg";
import avatar2 from "../img/main/callToAction/Mask2.svg";
import avatar3 from "../img/main/callToAction/Mask3.svg";
import avatar4 from "../img/main/callToAction/Mask4.svg";
import avatar5 from "../img/main/callToAction/Mask5.svg";

import twitter from "../img/main/callToAction/fa-twitter.svg";
import facebook from "../img/main/callToAction/fa-facebook-square.svg";
import dribble from "../img/main/callToAction/fa-dribbble.svg";
import instagram from "../img/main/callToAction/fa-instagram.svg";
import skype from "../img/main/callToAction/fa-skype.svg";
import medium from "../img/main/callToAction/fa-medium.svg";
import git from "../img/main/callToAction/fa-git.svg";

function Team() {
  const socialMedias1 = [twitter, facebook, dribble, instagram];
  const socialMedias2 = [twitter, dribble];
  const socialMedias3 = [skype, medium, git];
  const socialMedias4 = [twitter, instagram];
  const socialMedias5 = [twitter];

  return (
    <div className="w-screen bg-purple overflow-hidden">
      <div className="my-[100px] mx-[115px]">
        <h1 className="title text-4xl capitalize leading-[52px] mb-8">
          startup crew
        </h1>
        <p className="text-[22px] font-medium mb-16 max-w-[754px]">
          The most important part of the Startup Framework is the samples. The
          samples form a set of 25 usable pages you can use as is or you can add
          new blocks from UI Kit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-40">
        <TeamPeople
          imageUrl={avatar1}
          name="Leah Salomon"
          position="UI designer"
          socialImages={socialMedias1} // Pass the array of social media icons
        />
         <TeamPeople
          imageUrl={avatar2}
          name="colin salomon"
          position="UX Designer"
          socialImages={socialMedias2} // Pass the array of social media icons
        />
         <TeamPeople
          imageUrl={avatar3}
          name="Miguel Osborne"
          position="Front-end Developer"
          socialImages={socialMedias3} // Pass the array of social media icons
        />
         <TeamPeople
          imageUrl={avatar4}
          name="Taylor Simon"
          position="Product Manager"
          socialImages={socialMedias4} // Pass the array of social media icons
        />
         <TeamPeople
          imageUrl={avatar5}
          name="Steven MacAlister"
          position="Copyrighter"
          socialImages={socialMedias5} // Pass the array of social media icons
        />
        </div>
      </div>
    </div>
  );
}

export default Team;
