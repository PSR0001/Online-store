import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div>
        
                <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src='/logo.png' height={35} width={35}  />
            <span className="ml-3 text-xl text-blue-900">Online Store</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 font-bold hover:text-gray-900">Tsharts</a>
            <a className="mr-5 hover:text-gray-900">Hoodies</a>
            <a className="mr-5 hover:text-gray-900">Stickers</a>
            <a className="mr-5 hover:text-gray-900">Mugs</a>
            </nav>
            <AiOutlineShoppingCart className='text-3xl'/>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            
        </div>
        </header>
    </div>
  )
}

export default Navbar