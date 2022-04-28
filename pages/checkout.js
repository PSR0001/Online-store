import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'


const Checkout =  ({ cart, addToCart, deleteFromCart, subTotal }) => {
  // console.log(cart,addToCart,deleteFromCart , subTotal);

  const initiatePayment = async() => {
    
    let amount;
    let oid = Math.floor(Math.random()* Date.now());

    const data = { cart, subTotal , oid,email:"email"};

    //setup the url
    let url = (window.location.href).split('/checkout')

    let a = await fetch(`${url[0]}/api/pretransaction`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    let txnToken = await a.json()
    console.log(txnToken);


    let config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
        "orderId":oid, 
        "token": txnToken, 
        "tokenType": "TXN_TOKEN",
        "amount": amount 
      },
      "handler": {
        "notifyMerchant": function (eventName, data) {
          console.log("notifyMerchant handler function called");
          console.log("eventName => ", eventName);
          console.log("data => ", data);
        }
      }
    };


    // initialze configuration using init method 
    window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
      // after successfully updating configuration, invoke JS Checkout
      window.Paytm.CheckoutJS.invoke();
    }).catch(function onError(error) {
      console.log("error => ", error);
    });

  }



  return (
    <div>

      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

      <Script type="application/javascript" crossorigin="anonymous" src={`${process.env.PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.PAYTM_MID}.js`}  />





      <div className="bg-slate-200">
        <div className="py-12">
          <div className="max-w-md  bg-white shadow-lg rounded-lg md:max-w-xl mx-auto">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="flex flex-row">
                  <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                    <Image src="/logo.png" alt="logo" height={30} width={30} />
                    <span className="ml-3 text-xl text-blue-800"><strong>Online Store</strong></span>
                  </div>
                </div>
                <div className="flex flex-row  text-xs pt-6 pb-5"> <span className="font-bold">Information</span> <small className="text-gray-400 ml-1">
                </small> <span className="text-gray-400 ml-1">Shopping</span> <small className="text-gray-400 ml-1">

                  </small> <span className="text-gray-400 ml-1">Payment</span> </div> <span>Customer Information</span>
                <div className="relative pb-5"> <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="E-mail" />

                </div> <span>Shipping Address</span>
                <div className="grid md:grid-cols-2 md:gap-2">
                  <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="First name*" />
                  <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Last name*" /> </div>
                <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Company (optional)" />

                <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Address*" />
                <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Apartment, suite, etc. (optional)" />
                <div className="grid md:grid-cols-3 md:gap-2">
                  <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Zipcode*" />
                  <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="City*" />
                  <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="State*" />
                </div>
                <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Country*" />
                <input type="text" name="mail" className="border rounded h-10 w-full focus:outline-none focus:border-green-200 px-2 mt-2 text-sm" placeholder="Phone Number*" />

                <div className="flex justify-between items-center pt-2">
                  <button type="button" className="h-12 w-24 text-blue-500 text-xs font-medium">Return to cart</button>

                  <Link href={'/order'}><button type="button" className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Continue to Shipping</button></Link> </div>
                <Link href={'/checkout'}><button onClick={initiatePayment} type="button" className="h-12 w-48 rounded font-medium text-xs bg-blue-500 text-white">Pay { }</button></Link> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>

  )
}

export default Checkout
