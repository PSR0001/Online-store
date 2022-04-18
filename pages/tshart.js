import React from 'react'
import Link from 'next/link'
import Product from '../models/Products'
import mongoose from "mongoose";


const Tsharts = ({ Products }) => {
  // console.log(Products);

  return (
    <div className='bg-slate-100'>
      <section className="text-gray-400  body-font">
        <div className="container  px-5 py-24 lg:mx-40 mx-auto">
          <div className="flex  flex-wrap -m-4">
            {/* No:1 */}
            {Object.keys(Products).map((product) => (
             <div passhref={true} key={Products[product]._id} className=" bg-white lg:w-1/5 border-2 md:w-1/2 p-2 m-2  w-full">
                <a className="block relative h-72 rounded overflow-hidden">
                  <Link href={`Product/${Products[product].slug}`}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Products[product].img} /></Link>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500  tracking-widest title-font mb-1">{Products[product].category}</h3>
                  <div><h2 className="text-black title-font text-lg font-medium">The Catalyzer </h2> <span>{Products[product].size}</span></div>
                  <p className="mt-1 text-gray-700">₹ {Products[product].prise}</p>
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
    // console.log("fggfjfjhg")
  }
  let Products = await Product.find({ category: 'T-shart' })

  let tshart = {}
  for (let item of Products) {
    if (item.userId in tshart) {
      if (!tshart[item.userId].color.includes[item.color] && item.availableQty > 0) {
        tshart[item.userId].color.push(item.color)
      }
      if (!tshart[item.userId].size.includes[item.size] && item.availableQty > 0) {
        tshart[item.userId].size.push(item.size)
      }
    }
    else {
      tshart[item.userId] = JSON.parse(JSON.stringify(item))
      if (item.availableQty > 0) {
        tshart[item.userId].color = [item.color]
        tshart[item.userId].size = [item.size]
      }
    }
    return {
      props: { Products: JSON.parse(JSON.stringify(tshart)) },
      // props: {tshart },
    }
  }     
    // add more

}
export default Tsharts


