import '../styles/globals.css'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {

  //usestates 
  //  const [cart, setCart] = useState({})
  //  const [subTotal, setSubTotal] = useState(0)

  //  const addTocart = (itemCode, qty, size , name, prise , variant)=>{
      
  //  }


  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
