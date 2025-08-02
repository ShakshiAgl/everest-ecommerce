import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

const BestSeller = () => {

  const {products} = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(()=>{
  const bestProduct = products.filter((item) => item.bestseller);
  setBestSeller(bestProduct.slice(0,5))
  Aos.init({duration: 1000})
  },[])

  return ( 
    <div className='my-10'>
     <div className='text-center text-3xl py-8 '  data-aos='fade-up'>
       <Title text1={'BEST '} text2={'SELLERS'}/>
       <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veniam impedit sed maiores incidunt
       </p>
     </div>
     <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
     {
      bestSeller.map((item, index) => (
      <div
        key={index}
        data-aos="zoom-in"
        data-aos-duration="800"
        className="transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
        data-aos-delay={index * 100}
      >
        <ProductItem 
        id={item._id} 
        name={item.name} 
        image={item.image}
         price={item.price} 
         />
        </div>

      ))
     }
     </div>
    </div>
  )
}

export default BestSeller