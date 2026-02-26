import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Sparkles, Truck, Store } from "lucide-react"

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
    Aos.init({ duration: 1000 });
  }, [products])

  return (
    <div id="latest-collection" className="my-0 scroll-mt-28 bg-[#F8F4EF] py-14 px-4">

      {/* 🌸 Premium Heading Section */}
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">

        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide text-gray-800">
          Maa Kripa Trends
        </h2>

        <div className="w-24 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto my-4"></div>

        <p className="text-lg italic text-gray-700">
          A Legacy Woven in Tradition
        </p>

        <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed">
          Discover timeless sarees crafted with heritage and elegance.
          From royal Banarasi to graceful Chanderi weaves, each drape
          reflects tradition, craftsmanship, and celebration.
        </p>

        <p className="mt-3 font-medium text-gray-800">
          ✨ Shop Online & Visit Our Store ✨
        </p>
      </div>

      {/* 🌟 Feature Highlights */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 mb-14 text-center">

        <div data-aos="fade-up">
          <Sparkles className="mx-auto text-yellow-600" size={28} />
          <p className="mt-2 text-sm font-medium">Premium Quality</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <Truck className="mx-auto text-yellow-600" size={28} />
          <p className="mt-2 text-sm font-medium">Pan India Delivery</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <Store className="mx-auto text-yellow-600" size={28} />
          <p className="mt-2 text-sm font-medium">Offline Store Available</p>
        </div>

      </div>

      {/* 🛍 Products Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {
          latestProducts.map((item, index) => (
            <div
              data-aos="zoom-in"
              className="transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              key={index}
            >
              <ProductItem
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default LatestCollection