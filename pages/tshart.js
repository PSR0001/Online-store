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
         
            {Object.keys(Products).map((item) => {
              
              // console.log("object",item);
              return <div key={Products[item]._id} className=" bg-white lg:w-1/5 border-2 md:w-1/2 p-2 m-2  w-full">
                <a className="block relative h-72 rounded overflow-hidden">
                  <Link href={`Product/${Products[item].slug}`}><img alt="ecommerce" className="object-cover object-center w-full h-full block" src={Products[item].img} /></Link>
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500  tracking-widest title-font mb-1">{Products[item].category}</h3>
                  <div><h2 className="text-black title-font text-lg font-medium">The Catalyzer</h2> <span>
                     {Products[item].size.includes('S') && <span className='border border-sm mx-2 p-1'>S</span>}
                     {Products[item].size.includes('M') && <span className='border border-sm mx-2 p-1'>M</span>}
                     {Products[item].size.includes('L') && <span className='border border-sm mx-2 p-1'>L</span>}
                     {Products[item].size.includes('XL') && <span className='border border-sm mx-2 p-1'>XL</span>}
                     {Products[item].size.includes('XXL') && <span className='border border-sm mx-2 p-1'>XXL</span>}
                     
                     </span></div>
                  <p className="mt-1">
                    
                    
                  </p>
                </div>
              </div>
               })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

//use getserversideprops to fetch from DB
export async function getServerSideProps(context) {
  // console.log("hi guys");

  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL)
    // console.log("fggfjfjhg")
  }
  let Products = await Product.find({category: 'T-Shart'})
  
  let tshart = {}
  // console.log(Products)
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
    // console.log(tshart);

  }
    return {
      props: { Products: JSON.parse(JSON.stringify(tshart)) }
    }
  
}
export default Tsharts


