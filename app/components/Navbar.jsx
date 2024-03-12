"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import menu_cross from "../assets/menu-cross.png";
import user from "../assets/user.png";

import Link from 'next/link';

export default function Navbar() {
  const [menutab, setMenutab] = useState(0);

  return (
    <nav className=" bg-fuchsia-100 shadow-lg shadow-fuchsia-200 fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 mb-20">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className=" h-22 w-32"
            src={logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="lg:flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse mr-6">
        <Link
          href="/pages/login"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className=" h-8 w-8 hidden lg:block"
            src={user}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <Link href='/pages/cart'>
            <Image
                className="h-8 w-16 pl-8 hidden lg:block"
                src={cart}
                alt="cart"
                width={100}
                height={100}
            />
        </Link>

          {menutab === 0 ? (
            <Image
              className="h-6 w-14 mb-6 pl-8 lg:hidden"
              src={menu}
              alt="menu"
              width={100}
              height={100}
              onClick={() => setMenutab(1)}
            />
          ) : (
            <Image
              className="h-6 w-14 mb-6 pl-8 lg:hidden"
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
              <Link href="/" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold ">
                Home
              </Link>
            </li>
            <li>
              <Link href='/pages/categories' className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/pages/services" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {menutab === 0 ? (
        <div className=" h-80 hidden justify-center items-center text-center">
          <ul className="p-4 font-medium border md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages/categories" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/pages/services" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages/login" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Login
              </Link>
            </li>
            <li>
              <Link href="/pages/cart" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className=" h-80 flex justify-center items-center text-center">
          <ul className="p-4 font-medium border md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/pages/categories" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/pages/about" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                About
              </Link>
            </li>
            <li>
              <Link href="/pages/services" className="block py-2 px-3 text-gray-600 rounded hover:text-gray-800 hover:font-semibold">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pages/contact" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/pages/login" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Login
              </Link>
            </li>
            <li>
              <Link href="/pages/cart" className="block py-2 px-3 text-gray-600 hover:text-gray-800 hover:font-semibold">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
