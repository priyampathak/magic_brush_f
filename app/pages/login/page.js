"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'

export default function Page() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [tokenNotFound, setTokenNotFound] = useState(false);
  const router = useRouter();

  useEffect(()=>{
    const token = getTokenFromCookie();
   
        if (token!=null) {
          redirect("/pages/profile");
        }
  })

  function getTokenFromCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'token') { // Assuming the cookie name is 'token'
        return value;
      }
    }
    return null; // Token not found
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://project.mbn.priyam.tech/api/magic_brush/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include',
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to dashboard or wherever you want upon successful login
       router.push('/')
        
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      setError(error.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen pt-24">
        <div className="bg-rose-100 w-2/5 h-auto pl-20 pt-16 pb-16">
          <h1 className="text-4xl font-semibold pb-8">Login</h1>
          {error && <p className="text-red-600">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 h-12 pl-4 rounded-md w-4/5 border border-rose-800"
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
              LOGIN
            </button>
          </form>
          <h1 className="text-md pt-4 text-centerm">
            New User? <Link href='/pages/signup/selection' className="text-blue-700">Create an account</Link>
          </h1>
        </div>
      </div>
    </>
  );
}