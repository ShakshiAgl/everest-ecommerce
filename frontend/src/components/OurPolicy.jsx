import React from 'react';
import { assets } from '@/assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center gap-12 sm:gap-4 text-center py-20 px-4 text-xs sm:text-sm md:text-base text-gray-700'>
      <div
        className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 w-full sm:w-60'
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange Icon" />
        <p className='font-semibold mb-1'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle-free exchange policy</p>
      </div>

      <div
        className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 w-full sm:w-60'
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Return Icon" />
        <p className='font-semibold mb-1'>7 Days Return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>

      <div
        className='bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 w-full sm:w-60'
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support Icon" />
        <p className='font-semibold mb-1'>Best Customer Support</p>
        <p className='text-gray-400'>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
