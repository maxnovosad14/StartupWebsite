import React from 'react'

import avatar1 from '../img/main/features/Mask4.png'
import avatar2 from '../img/main/features/Mask.png'
import avatar3 from '../img/main/features/mask2.png'
import avatar4 from '../img/main/features/Mask3.png'

function Testimonial() {
  return (
    <div className="w-full h-[800px] bg-purple3 max-lg:h-[1390px] overflow-hidden" id="clients">
    <div
      className="mx-auto py-[104px] max-w-[970px] flex flex-col justify-center items-center"
    >
      <div
        className="title self-start capitalize text-[42px] mb-10 -tracking-[0.4px] max-lg:self-center"
      >
        our happy clients
      </div>

      <div className="grid grid-cols-2 gap-8 max-lg:grid-cols-1" id="container3">
        <div className="testimonial-blocks">
          <img
            src={avatar1}
            className="w-[70px] h-[70px] mr-8 mb-3 bg-purple"
            alt=""
          />
          <div className="flex flex-col justify-between">
            <div className="testimonial-title">
              Get a fully retina ready site when you build with Startup
              Framework. Websites look sharper and more gorgeous on devices
              with retina display support
            </div>
            <div className="testimonial-name">Rayhan Curran</div>
          </div>
        </div>

        <div className="testimonial-blocks">
          <img
            src={avatar2}
            className="w-[70px] h-[70px] mr-8 mb-3 bg-purple"
            alt=""
          />

          <div className="flex flex-col justify-between">
            <div className="testimonial-title">
              As a business targeting high net worth individuals, we were
              looking for a slick, cool and mini-malistic design for our
              website
            </div>
            <div className="testimonial-name">Kayley Frame</div>
          </div>
        </div>

        <div className="testimonial-blocks border-opacity-10">
          <img
            src={avatar3}
            className="w-[70px] h-[70px] mr-8 mb-3 bg-purple"
            alt=""
          />

          <div className="w-[307px] flex flex-col justify-between">
            <div className="testimonial-title">
              The most important part of the Startup Framework is the samples
            </div>
            <div className="testimonial-name">Gene Whitfield</div>
          </div>
        </div>

        <div className="testimonial-blocks">
          <img
            src={avatar4}
            className="w-[70px] h-[70px] mr-8 mb-3 bg-purple"
            alt=""
          />

          <div className="w-[307px] flex flex-col justify-between">
            <div className="testimonial-title">
              I’ve built my website with Startup just in one day, and it was
              <br />ready-to-go.
            </div>
            <div className="testimonial-name">Allan Kim</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Testimonial