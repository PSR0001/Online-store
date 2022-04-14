import React from 'react'
import Link from 'next/link'
import Product from '../models/Products'
import mongoose from "mongoose";


const Tsharts = ({Products}) => {
  // console.log(Products);

  return (
    <div className='bg-slate-100'>
      <section className="text-gray-400  body-font">
        <div className="container  px-5 py-24 lg:mx-40 mx-auto">
          <div className="flex  flex-wrap -m-4">
            {/* No:1 */}
            {Products.map((product) => (
              <div key={product._id} className=" bg-white lg:w-1/5 border-2 md:w-1/2 p-2 m-2  w-full">
                <a className="block relative h-72 rounded overflow-hidden">
                  <Link href={`Product/${product.slug}`}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.img} /></Link>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500  tracking-widest title-font mb-1">{product.category}</h3>
                  <h2 className="text-black title-font text-lg font-medium">The Catalyzer</h2>
                  <p className="mt-1">₹ {product.prise}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}

//use getserversideprops to fetch from DB
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("fggfjfjhg")
  }
  let Products = await Product.find()
  return {
    props: {Products:JSON.parse(JSON.stringify(Products))},
  }
}
export default Tsharts


