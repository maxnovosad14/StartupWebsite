import React from "react";

const ShowcaseWork = ({ imagePath, moduleName, place }) => {
  return (
    <div className="flex flex-col items-center mb-[64px]">
      <img src={imagePath} alt="team" className="w-[470px] h-[280px]" />
      <p className="mt-[30px] text-[14px]  font-bold uppercase">{moduleName}</p>
      <p className="text-[22px] capitalize">{place}</p>
    </div>
  );
};

export default ShowcaseWork;
