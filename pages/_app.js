import '../styles/globals.css'
import { Footer } from '../components/Footer'
import Navbar from '../components/Navbar'
import { useState, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar'
import { useRouter } from 'next/router'



function MyApp({ Component, pageProps }) {

  //usestates 
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)
  const [progress, setProgress] = useState(0)
  const [user, setUser] = useState({value:0})
  const [key, setKey] = useState(0)

  const router = useRouter()
  useEffect(() => {

    router.events.on('routeChangeStart', ()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete', ()=>{
      setProgress(100)
    })

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

    const token = localStorage.getItem('token')
    if (token) {
      setUser({value:token})
      setKey(Math.random())
    }

  }, [router.query])


// logout 
const logout=()=>{

localStorage.removeItem("token")
setKey(Math.random())
setUser({value:null})

}


  //save the cart in local storage
  const saveToLocalStorage = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))

    //sub total
    let subt = 0;
    let key = Object.keys(myCart)
    for (let i = 0; i<key.length; i++) {
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
    // console.log("YOur Cart Has been cleared");
    setCart({});
    saveToLocalStorage({})
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







    // console.log(cart, addToCart, deleteFromCart, clearCart, subTotal)
  return <>
      <LoadingBar
        color='#f11946'
        // color='#1f6feb'
        progress={progress}
        waitingTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar logout={logout} key={key} user={user}  cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} subTotal={subTotal} />
  
    
    <Component cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer />
  </>
}

export default MyApp
