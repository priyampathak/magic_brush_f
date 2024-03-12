"use client"
import Navbar from '@/app/components/Navbar'
import React, {useState} from 'react'
import Link from 'next/link';

export default function page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen mt-28">
        <div className="bg-rose-100 w-2/5 h-auto pl-20 pt-16 pb-16">
          <h1 className="text-4xl font-semibold pb-8">Sigup</h1>
          {/* {error && <p className="text-red-600">{error}</p>} */}
          <form onSubmit={''}>
            <input
              type="text"
              placeholder="First Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 pl-4 rounded-md w-4/5 border border-rose-800"
            />
             <input
              type="text"
              placeholder="Last Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800"
            />
             <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800"
            />
            <br />
            <button type="submit" className="w-4/5 bg-rose-950 text-white mt-10 h-12 rounded-md font-medium">
              SIGNUP
            </button>
          </form>
          <h1 className="text-md pt-4 text-centerm">
            Already a user? <Link href='/pages/login' className="text-blue-700">Login here</Link>
          </h1></div>
        </div>
    </div>
  )
}
