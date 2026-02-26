import React, { useEffect } from 'react';
import { assets } from '@/assets/frontend_assets/assets';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurPolicy = () => {

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#FDF8F3] to-white overflow-hidden">

      {/* Gold Decorative Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#C6A75E]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#8B1E3F]/10 rounded-full blur-3xl"></div>

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif text-[#8B1E3F] tracking-wide">
          Our Promise of Elegance
        </h2>
        <div className="w-32 h-[3px] bg-gradient-to-r from-[#C6A75E] via-[#E6C77E] to-[#C6A75E] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">

        {/* Card 1 */}
        <div
          className="group relative bg-white p-8 rounded-3xl shadow-lg w-full md:w-72 text-center transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 rounded-3xl border border-[#E6C77E] opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <img src={assets.exchange_icon} className="w-14 m-auto mb-6 group-hover:scale-110 transition duration-500" alt="Exchange" />

          <h3 className="text-lg font-semibold text-[#8B1E3F] mb-2">
            Easy Exchange
          </h3>
          <p className="text-gray-500 text-sm">
            Seamless & graceful exchange experience crafted for your comfort.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="group relative bg-[#F8F1EA] p-8 rounded-3xl shadow-lg w-full md:w-72 text-center transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="absolute inset-0 rounded-3xl border border-[#C6A75E] opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <img src={assets.quality_icon} className="w-14 m-auto mb-6 group-hover:scale-110 transition duration-500" alt="Return" />

          <h3 className="text-lg font-semibold text-[#8B1E3F] mb-2">
            7 Days Return
          </h3>
          <p className="text-gray-600 text-sm">
            Because confidence in quality is our tradition.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="group relative bg-white p-8 rounded-3xl shadow-lg w-full md:w-72 text-center transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="absolute inset-0 rounded-3xl border border-[#E6C77E] opacity-0 group-hover:opacity-100 transition duration-500"></div>

          <img src={assets.support_img} className="w-14 m-auto mb-6 group-hover:scale-110 transition duration-500" alt="Support" />

          <h3 className="text-lg font-semibold text-[#8B1E3F] mb-2">
            24/7 Dedicated Support
          </h3>
          <p className="text-gray-500 text-sm">
            Always here to assist you — like family.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OurPolicy;