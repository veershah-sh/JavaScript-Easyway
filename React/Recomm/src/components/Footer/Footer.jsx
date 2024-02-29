import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Categories
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="/"
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mens"
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Mens
                  </Link>
                </li>
                <li>
                  <Link
                    to="/womens"
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Womens
                  </Link>
                </li>
                <li>
                  <Link
                    to="/kids"
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Kids
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Company
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="#"
                    
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    
                    Works
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Help
              </p>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link
                    to="#"
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    
                    className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                  >
                    
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
              <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
                Subscribe to newsletter
              </p>
              <form action="#" method="POST" className="mt-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <hr className="mt-16 mb-10 border-gray-200" />
          <p className="text-sm text-center text-gray-600">
            © Copyright 2024, All Rights Recomm | Developed by <Link to="">Name</Link>
          </p>
        </div>
      </section>
    </div>
  )
}

export default Footer