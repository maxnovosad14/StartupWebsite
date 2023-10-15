import React from 'react'

const TeamPeople = ({imageUrl, name, position, socialImages})  => {
  return (
<div className="team mb-[60px] w-[196px] cursor-pointer">
    <img src={imageUrl} alt="team" />
    <p className='text-[22px] font-medium mt-4 mb-2 capitalize'>{name}</p>
    <p className='mb-5'>{position}</p>
    <div className="social-media flex">
        {socialImages.map((socialImage, index) => (
          <img
            key={index}
            src={socialImage}
            alt={`socialmedia-${index}`}
            className='mr-[30px]'
          />
        ))}
      </div>
</div>
  );
};

export default TeamPeople