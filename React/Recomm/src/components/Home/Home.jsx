import React from 'react'
import Hero from './Hero'
import ProductCategory from './ProductCategory'

function Home() {
  return (
    <div>
        <Hero />
        <h1 className='text-center mt-10 text-5xl text-blue-600 font-bold'>Product Categories</h1>
        <div className="flex mt-10 mx-20 items-center justify-between">
            <ProductCategory/>
            <ProductCategory/>
            <ProductCategory/>
        </div>
    </div>
  )
}

export default Home