import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '@/assets/frontend_assets/assets';
import NewsletterBox from '@/components/NewsletterBox';
import Title from '@/components/Title';

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT '} text2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[350px]'
         src={assets.about_img} 
         alt="" 
         data-aos="fade-right"
         data-aos-delay ="100"
         />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Everest was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our Mission at Everest is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 md:gap-10 px-4">
        {/* Card 1 */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-gray-700 px-8 py-10 flex-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">Quality Assurance</h3>
          <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>

        {/* Card 2 */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-gray-700 px-8 py-10 flex-1"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">Convenience</h3>
          <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>

        {/* Card 3 */}
        <div
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-gray-700 px-8 py-10 flex-1"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-lg font-semibold mb-2 text-indigo-600">Exceptional Customer Service</h3>
          <p>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
