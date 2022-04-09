import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlinePoweroff } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useRef } from "react";
import Cart from "./Cart.js"


const Navbar = () => {

const toggleCart =()=>{
  // console.log("fff");
  if (ref.current.classList.contains('translate-x-full')){
    ref.current.classList.remove('translate-x-full')
    ref.current.classList.add('translate-x-0')
    
  }
 else if (!ref.current.classList.contains('translate-x-full')){
    ref.current.classList.add('translate-x-full')
    ref.current.classList.remove('translate-x-0')
  }
} 

const ref = useRef()


  return (
    <div>
      <header  className="text-gray-600 bg-white shadow-md  body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href='/'><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo.png" height={35} width={35} />
            <span className="ml-3 text-xl text-blue-900">Online Store</span>
          </a></Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href='/tshart'><a className="mr-5 font-bold hover:text-gray-900">Tsharts</a></Link>
            <Link href='/hoodies'><a className="mr-5 hover:text-gray-900">Hoodies</a></Link>
            <Link href='/sticker'><a className="mr-5 hover:text-gray-900">Stickers</a></Link>
            <Link href='/mugs'><a className="mr-5 hover:text-gray-900">Mugs</a></Link>
          </nav>
          <Link href="/login"><MdOutlineAccountCircle className="text-3xl mx-3 hover:text-indigo-700 cursor-pointer"/></Link>
          <span onClick={toggleCart} className="cursor-pointer hover:text-indigo-700 " ><AiOutlineShoppingCart className="text-3xl" /></span>
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </div>
      </header>

    {/* Sidebar */}
    <div ref={ref} className="sidebar rounded-bl-md z-50 transition-transform delay-500  duration-300 ease-out bg-slate-100 absolute top-0 right-0 p-10 translate-x-full transform ">
      <h2 className="font-bold text-xl">Shoping Cart
      <span onClick={toggleCart} className="absolute cursor-pointer top-8 right-8"><AiOutlinePoweroff className="hover:text-red-500"/></span></h2>
                
<Cart/>
    </div>


    </div>
  );
};

export default Navbar;
