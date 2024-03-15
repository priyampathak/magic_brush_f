"use client"
import Navbar from '@/app/components/Navbar'
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { redirect } from 'next/navigation'

export default function Page() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLast_Name] = useState('');
    const [error, setError] = useState(null);

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
        const response = await fetch('/api/magic_brush/partners/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, first_name, last_name }),
          credentials: 'include',
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Redirect to dashboard or wherever you want upon successful login
         router.push('/')
          
        } else {
          throw new Error(data.message || 'Signup failed');
        }
      } catch (error) {
        setError(error.message || 'Signup failed. Please check your credentials.');
      }
    };
  


  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen mt-28">
        <div className="bg-rose-100 w-2/5 h-auto pl-20 pt-16 pb-16">
          <h1 className="text-4xl font-semibold pb-8">Sigup as Partner</h1>
          {error && <p className="text-red-600">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirst_Name(e.target.value)}
              className="mt-2 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"
            />
             <input
              type="text"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLast_Name(e.target.value)}
              className="mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"
            />
             <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-6 h-12 pl-4 rounded-md w-4/5 border border-rose-800 text-black"
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
