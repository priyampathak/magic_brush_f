import Navbar from '@/app/components/Navbar'
import React from 'react'
import Link from 'next/link';
import useric from '../../../assets/useric.png'
import handshake from '../../../assets/handshake.png'
import Image from 'next/image';

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen flex flex-wrap justify-center items-center">
        <Link href='/pages/signup/userSignup'>
          <div className="h-60 w-96 bg-rose-100 mx-4 rounded-lg hover:bg-rose-200 shadow-lg shadow-gray-300 flex justify-center items-center">
            <div>
              <Image src={useric} height={400} width={400} className="h-32 w-32" alt="img"/>
              <h1 className="font-semibold text-2xl pl-4">
                Signup as User
              </h1>
            </div>
          </div>
        </Link>
        <Link href='/pages/signup/partnerSignup'>
          <div className="h-60 w-96 bg-rose-100 mx-4 rounded-lg hover:bg-rose-200 shadow-lg shadow-gray-300 flex justify-center items-center">
            <div>
              <Image src={handshake} height={400} width={400} className="h-32 w-32" alt="img"/>
              <h1 className="font-semibold text-2xl">
                Signup as a Partner
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
