"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import cart from "../assets/cart.png";
import menu from "../assets/menu.png";
import menu_cross from "../assets/menu-cross.png";
import user from "../assets/user.png";

import Link from 'next/link';

export default function Navbar() {
  const [menutab, setMenutab] = useState(0);
  const [tokens, setTokens] = useState(false)// token indicator
  const [loading, setLoading] = useState(true);//for fetching 
  const [userData, setUserData] = useState(null);// for store user data
  useEffect(() => {
    const token = getTokenFromCookie();
    if (token == null) {
      setTokens(true)
    }
    async function fetchData() {
      try {
        const token = getTokenFromCookie();
        if (!token) {
          setTokens(true);
          throw new Error("Token not found in cookie");
        }
        console.log(token)
        // Make the API call to fetch user data
        //console.log(token);
        const response = await fetch(
          `/api/magic_brush/${token}`,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        // Parse the response JSON
        const data = await response.json();
        
        setUserData(data);
       
        console.log("data is", data)
      } catch (error) {
        //console.warn("Error fetching user data:", error);
        
      } finally {
        setLoading(false); // Set loading to false after data fetching is complete
      }
    }
    fetchData();
  }, []);

  function getTokenFromCookie() {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "token") {
        // Assuming the cookie name is 'token'
        
        return value;
      }
    }
    console.log("no tokes")
    return null; // Token not found
  }
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
          {!tokens && !loading ? (
            <><h1>{userData.first_name}</h1>
            <Image
              className="h-8 w-8 hidden lg:block"
              src={user}
              alt="Logo"
              width={100}
              height={100}
            /></>
          ) : (
            <Image
              className="h-8 w-8 hidden lg:block"
              src={user}
              alt="Logo"
              width={100}
              height={100}
            />
          )}
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
