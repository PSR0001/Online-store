import React from 'react'

import Image from 'next/image'

const Order = () => {
  return (
    <div>
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Online store</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order ID : <span className='text-indigo-600'>#84475</span></h1>
        <div className="flex mb-4 border-indigo-500 border-b-2">
          <a className="flex-grow py-2 text-lg px-1">Items Description</a>
          <a className="flex-grow  py-2 text-lg px-1">Quantity</a>
          <a className="flex  py-2 text-lg px-1">Total</a>
        </div>
    
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">T-shart(XL)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">599</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
        <span className="text-gray-500">T-shart(XL)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">499</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">T-shart(XL)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">399</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Total : ₹1900.00</span>
          
        </div>
          <button className="flex mt-5 text-white bg-indigo-500 border-0 py-2 px-12 focus:outline-none hover:bg-indigo-600 rounded">Pay</button>
      </div>
      <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src="/card.jpg" width={400} height={400}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Order