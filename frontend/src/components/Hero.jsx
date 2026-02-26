import { assets } from '@/assets/frontend_assets/assets';
import React from 'react';

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${assets.about})` }}
    >
      {/* Dark Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-red-900/30 to-black/60"></div>

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 sm:px-12"
        data-aos="fade-up"
      >
        <p className="text-red-200 tracking-[4px] uppercase text-lg mb-6">
          Maa Kripa Trendz Pvt Ltd
        </p>

        <h1 className="prata-regular text-4xl sm:text-6xl lg:text-5xl text-white leading-tight drop-shadow-lg">
          Draped in Royalty,
          <br />
          Woven with Tradition
        </h1>

        {/* <p className="mt-6 text-red-100 max-w-2xl mx-auto text-lg sm:text-xl">
          Discover handcrafted sarees that celebrate Indian heritage,
          grace, and feminine beauty in every fold.
        </p> */}

        <div className="mt-10 flex justify-center gap-6 flex-wrap">

   {/* View Collection button  */}
         <button
  onClick={() => {
    const section = document.getElementById("latest-collection");
    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset - 100;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1800; // same luxury speed

    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;

      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }}
  className="px-8 py-3 rounded-full text-sm tracking-widest font-semibold 
             border border-white text-white 
             bg-white/10 backdrop-blur-md
             hover:bg-white hover:text-[#8B1E3F] 
             transition-all duration-500"
>
  VIEW COLLECTION
</button>

    {/* SHOP NOW button  */}
       <button
  onClick={() => {
    const section = document.getElementById("best-sellers");
    if (!section) return;

    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset - 100;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1800; // ⬅ Increase for slower scroll (2000 = very slow)

    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;

      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }}
  className="bg-[#8B1E3F] text-white px-6 py-3 rounded-full tracking-widest hover:bg-[#6f1833] transition duration-300"
>
  SHOP NOW
</button>

        </div>
      </div>
    </section>
  );
};

export default Hero;