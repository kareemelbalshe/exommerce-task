import React from 'react'
import ProductSlider from '../product-slider/ProductSlider'

const Section4 = () => {
  return (
    <div className='pl-28 py-20 flex flex-col'>
      <h3 className='flex gap-1 justify-start items-center text-red-500'><span className='w-5 h-10 bg-red-500 rounded-md'></span> This month</h3>
      <div className="flex gap-5 justify-between items-center pr-28">
      <h1 className='h11'>Best selling products</h1>
        <div className="flex gap-5">
          <button className='btn'>view all</button>
      </div>
      </div>
      <ProductSlider/>      
    </div>
  )
}

export default Section4
