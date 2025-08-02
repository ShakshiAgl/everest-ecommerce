import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

const LatestCollection = () => {

  const {products} = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(()=>{
     setLatestProducts(products.slice(0,10));
     Aos.init({ duration: 1000 })
  }, [])

  return (
    <div className="my-10">
    <div className='text-center py-8 text-3xl' data-aos='fade-up'> 
      <Title text1={'LATEST '} text2={'COLLECTION'}/>
      <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci repellat alias </p>
    </div>

    {/* Rendering Products  */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
      {
        latestProducts.map((item, index) => (
          <div
          data-aos="zoom-in"
          data-aos-duration="1200"
          className="transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
          key={index}
          >
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
          </div>
        )) 
      }
    </div>
    </div>
  )
}

export default LatestCollection 