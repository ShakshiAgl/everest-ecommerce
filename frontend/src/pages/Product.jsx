import { assets } from '@/assets/frontend_assets/assets';
import RelatedProducts from '@/components/RelatedProducts';
import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Product = () => {
  const { productId } = useParams(); // this is actually the slug now
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    // Find product by slug
    const product = products.find(item => item.slug === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    } else {
      setProductData(null);
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Product not found</h2>
      </div>
    );
  }

  return (
    <div className="border-t-2 pt-4 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Images */}
        <div className="product-gallery flex-1 flex flex-col-reverse gap-3 sm:flex-row sm:items-start">
          <div
            className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.5%] w-full focus:outline-none"
            tabIndex={-1}
          >
            {productData.image.map((item, index) => (
              <motion.img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                whileTap={{ scale: 0.95 }}
                className={`w-[30%] sm:w-[115px] sm:h-[114px] sm:mb-3 object-cover flex-shrink-0 cursor-pointer border rounded-md transition-all duration-300 ${
                  image === item
                    ? 'border-orange-500 shadow-md scale-105'
                    : 'border-gray-300 hover:border-orange-400 hover:shadow-sm'
                }`}
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%] flex justify-center items-start">
            <AnimatePresence mode="wait">
              <motion.img
                key={image}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                src={image}
                alt=""
                className="max-w-[500px] max-h-[500px] w-full h-auto object-contain border rounded-md"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5" />
            <p>(122)</p>
          </div>

          <p className="mt-5 text-2xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-sm text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="size-selector flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-1 px-3 bg-gray-100 ${
                    item === size ? 'border-orange-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size)}
            className="bg-black text-white px-6 py-2 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-5 sm:w:4/5" />
          <div className="text-sm text-gray-500 mt-3 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />

      {/* Description & Review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>{productData.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;