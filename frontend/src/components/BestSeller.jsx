import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const BestSeller = () => {

  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    Aos.init({ duration: 1200 });
  }, [products])

  return (
    <div
      id="best-sellers"
      className="my-0 scroll-mt-28 
                 bg-gradient-to-br 
                 from-[#F3E5D8] 
                 via-[#EAD7C5] 
                 to-[#E6CCB2] 
                 py-24 px-6"
    >

      {/* ✨ Heading Section */}
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">

        <p className="uppercase tracking-[6px] text-xs text-[#8B1E3F] mb-4">
          Timeless Elegance
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold text-[#5C1A1B] leading-tight">
          Our Royal Bestsellers
        </h2>

        {/* Gold Divider */}
        <div className="w-28 h-[3px] bg-gradient-to-r 
                        from-[#C6A75E] 
                        via-[#E6C77E] 
                        to-[#C6A75E] 
                        mx-auto my-6 rounded-full"></div>

        <p className="text-sm md:text-base text-[#5C4033] leading-relaxed px-4">
          Discover our most celebrated sarees — intricately crafted,
          richly detailed, and loved by women who cherish tradition
          with a touch of modern grandeur.
        </p>

      </div>

      {/* 🛍 Product Grid */}
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">

        {
          bestSeller.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative group"
            >

              {/* ✨ Golden Glow */}
              <div className="absolute inset-0 
                              bg-[#C6A75E] 
                              opacity-0 
                              group-hover:opacity-20 
                              blur-3xl 
                              transition duration-700 
                              rounded-3xl">
              </div>

              {/* 👑 Royal Badge */}
              <div className="absolute top-4 left-4 z-20 
                              bg-gradient-to-r 
                              from-[#8B1E3F] 
                              to-[#5C1A1B] 
                              text-white 
                              text-xs font-semibold 
                              px-4 py-1 rounded-full 
                              shadow-lg tracking-wide">
                Royal Choice
              </div>

              {/* 💎 Card */}
              <div className="relative z-10 
                              bg-white 
                              rounded-3xl 
                              p-5 
                              shadow-lg 
                              border border-[#EAD7C5]
                              group-hover:shadow-2xl 
                              transition duration-500 
                              transform group-hover:-translate-y-4">

                <ProductItem
                  id={item._id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                />

              </div>

            </div>
          ))
        }

      </div>

      {/* 🪔 Button Section */}
      <div className="text-center mt-20" data-aos="fade-up">
        <Link to='/collection'>
        <button className="px-10 py-3 
                           bg-gradient-to-r 
                           from-[#8B1E3F] 
                           to-[#5C1A1B] 
                           text-white 
                           font-semibold 
                           rounded-full 
                           tracking-wide
                           hover:scale-105
                           transition duration-300 
                           shadow-lg hover:shadow-2xl">
          Explore All Collections
        </button>
        </Link>
      </div>

    </div>
  )
}

export default BestSeller