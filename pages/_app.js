import '../styles/globals.css'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
function MyApp({ Component, pageProps }) {

  //usestates 
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  useEffect(() => {
    //under try catchconsole

    try {
      // console.log("Hey giys")
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }
      else {

      }
    } catch (error) {
      console.log(error);
      localStorage.clear()
    }


  }, [])


  //save the cart in local storage
  const saveToLocalStorage = (myCart) => {
    localStorage.setItem('cart', myCart)

    //sub total
    let subt = 0;
    let key = Object.keys(cart)
    for (let i = 0; key.length; i++) {
      subt += myCart[key[i]].prise * myCart[key[i]].qty
    }

    setSubTotal(subt);
  }

  const addToCart = (itemCode, qty, size, name, prise, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty + qty;

    }
    else {
      newCart[itemCode] = { qty: 1, size, name, prise, variant }
    }
    setCart(newCart);
    saveToLocalStorage(newCart)
  }

  //clear cart function
  const clearCart = () => {
    setCart({});
    saveToLocalStorage({})
    console.log("YOur Cart Has been cleared");
    //Note: saveToLocalStorage(cart)---> this is wrong because in React when we run usestate set state may some time to execute !important
  }

  //delete from cart
  const deleteFromCart = (itemCode, qty, size, name, prise, variant) => {
    let newCart = cart
    if (itemCode in cart) {
      newCart[itemCode].qty = newCart[itemCode].qty - qty;

    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode]
    }
    setCart(newCart);
    saveToLocalStorage(newCart)
  }

  return <>
    <Navbar cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} subTotal={subTotal} />
    <Component cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
