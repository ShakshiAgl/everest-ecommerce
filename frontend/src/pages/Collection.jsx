import { assets } from '@/assets/frontend_assets/assets';
import ProductItem from '@/components/ProductItem';
import Title from '@/components/Title';
import { ShopContext } from '@/context/ShopContext';
import React, { useContext, useEffect, useState } from 'react';

const sareeCategories = [
  'Banarasi', 'Kanjeevaram', 'Chanderi', 'Paithani',
  'Patola', 'Bandhani', 'Tussar Silk', 'Muga Silk',
  'Pochampally', 'Bhagalpuri'
];

const fabrics = ['Silk', 'Cotton', 'Chiffon', 'Georgette', 'Tussar', 'Muga'];
const priceRanges = [
  { label: '₹1,000 - ₹5,000', min: 1000, max: 5000 },
  { label: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { label: '₹10,000+', min: 10000, max: Infinity },
];
const colors = ['#800000','#b35959','#f2dede','#ffd1a4','#c2a3ff','#5c3d2e'];
const occasions = ['Wedding', 'Festive', 'Casual', 'Office'];
const weaving = ['Brocade','Ikat','Tie-dye','Jacquard','Embroidered'];
const borders = ['Gold Zari','Temple Border','Plain','Printed'];
const length = ['Standard (5.5m)','Designer / Pre-stitched'];
const handloom = ['Handwoven','Machine-made'];
const newArrivals = ['Yes'];

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [fabric, setFabric] = useState([]);
  const [priceRange, setPriceRange] = useState(null);
  const [color, setColor] = useState([]);
  const [occasion, setOccasion] = useState([]);
  const [weave, setWeave] = useState([]);
  const [borderType, setBorderType] = useState([]);
  const [sLength, setSLength] = useState([]);
  const [hand, setHand] = useState([]);
  const [newArr, setNewArr] = useState(false);

  const [sortType, setSortType] = useState('relevant');

  // Toggle handler for array filters
  const toggleArrayFilter = (stateSetter, value) => {
    stateSetter(prev => prev.includes(value) ? prev.filter(i=>i!==value) : [...prev,value]);
  }

  const applyFilter = () => {
    let filtered = [...products];
    if(showSearch && search) filtered = filtered.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    if(category.length>0) filtered = filtered.filter(item=>category.includes(item.category));
    if(fabric.length>0) filtered = filtered.filter(item=>fabric.includes(item.fabric));
    if(priceRange) filtered = filtered.filter(item=>item.price>=priceRange.min && item.price<=priceRange.max);
    if(color.length>0) filtered = filtered.filter(item=>color.includes(item.color));
    if(occasion.length>0) filtered = filtered.filter(item=>occasion.includes(item.occasion));
    if(weave.length>0) filtered = filtered.filter(item=>weave.includes(item.weaving));
    if(borderType.length>0) filtered = filtered.filter(item=>borderType.includes(item.border));
    if(sLength.length>0) filtered = filtered.filter(item=>sLength.includes(item.length));
    if(hand.length>0) filtered = filtered.filter(item=>hand.includes(item.handloom));
    if(newArr) filtered = filtered.filter(item=>item.newArrival);
    setFilterProducts(filtered);
  }

  const sortProduct = () => {
    let fpCopy = [...filterProducts];
    switch(sortType){
      case 'low-high': setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price)); break;
      case 'high-low': setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price)); break;
      default: applyFilter(); break;
    }
  }

  useEffect(()=>{ applyFilter() }, [category,fabric,priceRange,color,occasion,weave,borderType,sLength,hand,newArr,search,showSearch]);
  useEffect(()=>{ sortProduct() }, [sortType]);

  const clearFilters = () => {
    setCategory([]); setFabric([]); setPriceRange(null); setColor([]);
    setOccasion([]); setWeave([]); setBorderType([]); setSLength([]);
    setHand([]); setNewArr(false);
  }

  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-12 pt-10 border-t border-gray-300'>

      {/* Filter Sidebar */}
      <div className='min-w-60 bg-[#f8d6d6] p-4 rounded-lg shadow-md'>
        <div className='flex justify-between items-center mb-3'>
          <p className='text-xl font-semibold text-[#800000]'>FILTERS</p>
          <button onClick={clearFilters} className='text-sm text-[#a33a3a] hover:underline'>Clear All</button>
        </div>

        <div className={`transition-all ${showFilter?'block':'hidden'} sm:block`}>

          {/* Saree Types */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>SAREE TYPES</p>
            <div className='flex flex-col gap-2'>
              {sareeCategories.map((cat,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={cat} onChange={(e)=>toggleArrayFilter(setCategory,e.target.value)}/>
                  {cat} Saree
                </label>
              ))}
            </div>
          </div>

          {/* Fabric */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>FABRIC</p>
            <div className='flex flex-col gap-2'>
              {fabrics.map((fab,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={fab} onChange={(e)=>toggleArrayFilter(setFabric,e.target.value)}/>
                  {fab}
                </label>
              ))}
            </div>
          </div>

          {/* Price */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>PRICE RANGE</p>
            <div className='flex flex-col gap-2'>
              {priceRanges.map((range,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="radio" name="price" className='w-4 h-4 accent-[#a33a3a]' onChange={()=>setPriceRange(range)}/>
                  {range.label}
                </label>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>COLOR</p>
            <div className='flex gap-2 flex-wrap'>
              {colors.map((c,idx)=>(
                <div key={idx} onClick={()=>toggleArrayFilter(setColor,c)} className={`w-6 h-6 rounded-full border-2 cursor-pointer ${color.includes(c)?'border-[#a33a3a]':'border-gray-300'}`} style={{backgroundColor:c}}/>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>OCCASION</p>
            <div className='flex flex-col gap-2'>
              {occasions.map((oc,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={oc} onChange={(e)=>toggleArrayFilter(setOccasion,e.target.value)}/>
                  {oc}
                </label>
              ))}
            </div>
          </div>

          {/* Weaving */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>WEAVING / TECHNIQUE</p>
            <div className='flex flex-col gap-2'>
              {weaving.map((w,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={w} onChange={(e)=>toggleArrayFilter(setWeave,e.target.value)}/>
                  {w}
                </label>
              ))}
            </div>
          </div>

          {/* Border Type */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>BORDER TYPE</p>
            <div className='flex flex-col gap-2'>
              {borders.map((b,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={b} onChange={(e)=>toggleArrayFilter(setBorderType,e.target.value)}/>
                  {b}
                </label>
              ))}
            </div>
          </div>

          {/* Length */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>LENGTH / STYLE</p>
            <div className='flex flex-col gap-2'>
              {length.map((l,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={l} onChange={(e)=>toggleArrayFilter(setSLength,e.target.value)}/>
                  {l}
                </label>
              ))}
            </div>
          </div>

          {/* Handloom / Machine */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>HANDLOOM</p>
            <div className='flex flex-col gap-2'>
              {handloom.map((h,idx)=>(
                <label key={idx} className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
                  <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' value={h} onChange={(e)=>toggleArrayFilter(setHand,e.target.value)}/>
                  {h}
                </label>
              ))}
            </div>
          </div>

          {/* New Arrivals */}
          <div className='mb-4'>
            <p className='text-sm font-medium mb-2 text-[#800000]'>NEW ARRIVALS</p>
            <label className='flex items-center gap-2 text-gray-800 text-sm cursor-pointer hover:text-[#a33a3a]'>
              <input type="checkbox" className='w-4 h-4 accent-[#a33a3a]' checked={newArr} onChange={()=>setNewArr(!newArr)}/>
              Show Only New Arrivals
            </label>
          </div>

        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4'>

          {/* Premium Heading */}
          <h2 
            className='text-3xl sm:text-3xl font-serif font-bold text-[#800000] tracking-wide cursor-default relative group'
          >
            All Collections
            <span className='absolute left-0 bottom-0 w-0 h-1 bg-[#a33a3a]'></span>
          </h2>

          {/* Sort Dropdown */}
          <select 
            onChange={(e)=>setSortType(e.target.value)}
            className='border-2 border-gray-300 px-3 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#a33a3a]'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>

        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {filterProducts.map((item,idx)=>(
            <ProductItem key={idx} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection;