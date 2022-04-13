import React from 'react'
import Link from 'next/link'
import Product from '../'


const Tsharts = () => {
  return (
    <div className='bg-slate-100'>

      <section className="text-gray-400  body-font">
        <div className="container  px-5 py-24 lg:mx-40 mx-auto">

          <div className="flex  flex-wrap -m-4">

            {/* No:1 */}
            <div className=" bg-white lg:w-1/5 border-2 md:w-1/2 p-2 m-2  w-full">
              <a className="block relative h-72 rounded overflow-hidden">
               <Link href='Product/howdy'><img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://rukminim2.flixcart.com/image/880/1056/kfoapow0-0/t-shirt/u/n/1/m-6555072-hrx-by-hrithik-roshan-original-imafw2ky4ewmgevh.jpeg?q=50" /></Link>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500  tracking-widest title-font mb-1">T-shart</h3>
                <h2 className="text-black title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">₹ 500.00</p>
              </div>
            </div>

            {/* No:2 */}
            <div className="lg:w-1/5 border-2 bg-white md:w-1/2 p-2 m-2 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://rukminim2.flixcart.com/image/880/1056/kfoapow0-0/t-shirt/u/n/1/m-6555072-hrx-by-hrithik-roshan-original-imafw2ky4ewmgevh.jpeg?q=50" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500  tracking-widest title-font mb-1">T-shart</h3>
                <h2 className="text-black title-font text-lg font-medium">The Catalyzer</h2>
                <p className="mt-1">₹ 500.00</p>
              </div>
            </div>
          {/* No:3 */}


          </div>
        </div>
      </section>
    </div>
  )
}


//use getserversideprops to fetch from DB
export async function getServerSideProps(context) {

  return {
    props: {}, 
  }
}
export default Tsharts