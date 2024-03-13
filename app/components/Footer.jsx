import Image from 'next/image'
import React from 'react'
import logo from "../assets/logo.png";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="px-28 py-4 my-2 bg-rose-900 text-white mx-2">
      <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            className="ml-16 h-22 w-36"
            src={logo}
            alt="Logo"
            width={800}
            height={800}
          />
        </Link>
        <div className="flex py-4 justify-evenly">
            <div>
                <h1 className="font-bold w-72 py-4 text-3xl">Company</h1>
                <h1 className="text-lg py-2">About us</h1>
                <h1 className="text-lg py-2">Terms and conditions</h1>
                <h1 className="text-lg py-2">Privacy policy</h1>
                <h1 className="text-lg py-2">Anti-discrimination policy</h1>
                <h1 className="text-lg py-2">Careers</h1>
            </div>
            <div>
                <h1 className="font-bold w-72 py-4 text-3xl">For customers</h1>
                <h1 className="text-lg py-2">MB reviews</h1>
                <h1 className="text-lg py-2">Services near you</h1>
                <h1 className="text-lg py-2">Blogs</h1>
                <h1 className="text-lg py-2">Contact us</h1>
            </div>
            <div>
                <h1 className="font-bold w-72 py-4 text-3xl">For partners</h1>
                <h1 className="text-lg py-2">Register as a professional</h1>
                
            </div>
            <div>
                <h1 className="font-bold w-72 py-4 text-3xl">Social links</h1>
                <h1 className="text-lg py-2"></h1>
                
            </div>
        </div>
    </div>
  )
}
