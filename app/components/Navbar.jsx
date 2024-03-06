import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

export default function Navbar() {
  return (
   <nav className=" bg-fuchsia-200 shadow-lg shadow-fuchsia-300 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image className=" h-22 w-32" src={logo} alt="Logo" width={100} height={100}/>

  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="text-white bg-rose-800 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center ">Login</button>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        
    </button>
    <Image className=" h-8 w-16 pl-8 " src={cart} alt="cart" width={100} height={100}/>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
      <li>
        <a href="#" className="block py-2 px-3 text-black ">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-black rounded ">Categories</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-black rounded ">About</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-black rounded">Services</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 text-black ">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
