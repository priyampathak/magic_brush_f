"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import menu_cross from "../assets/menu-cross.png";

export default function Navbar() {
  const [menutab, setMenutab] = useState(0);

  return (
    <nav className=" bg-fuchsia-100 shadow-lg shadow-fuchsia-200 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className=" h-22 w-32"
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </a>

        <div className="lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white hidden lg:block bg-rose-800 hover:bg-rose-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Login
          </button>

          <Image
            className="h-8 w-16 pl-8 hidden lg:block"
            src={cart}
            alt="cart"
            width={100}
            height={100}
          />

          {menutab === 0 ? (
            <Image
              className="h-8 w-16 pl-8 lg:hidden"
              src={menu}
              alt="menu"
              width={100}
              height={100}
              onClick={() => setMenutab(1)}
            />
          ) : (
            <Image
              className="h-8 w-16 pl-8 lg:hidden"
              src={menu_cross}
              alt="menu"
              width={100}
              height={100}
              onClick={() => setMenutab(0)}
            />
          )}
        </div>

        <div
          className="hidden lt-lg:flex w-full lg:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded ">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {menutab === 0 ? (
        <div className=" h-80 hidden justify-center items-center text-center">
          <ul className="p-4 font-medium border md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded ">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Cart
              </a>
            </li>
          </ul>
        </div>
      ) : (
        <div className=" h-80 flex justify-center items-center text-center">
          <ul className="p-4 font-medium border md:border-0">
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded ">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black rounded">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Login
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black ">
                Cart
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
