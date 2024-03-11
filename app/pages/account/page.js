"use client"
import Navbar from '@/app/components/Navbar';
import React, { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';

export default function Page() {
  const [n, setN] = useState(0)
  
  // Function to delete the token cookie

  useEffect(()=>{
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, _] = cookie.trim().split('=');
      if (name != 'token') {
        redirect("/pages/login")
      }
    }
  })

  function deleteTokenCookie() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, _] = cookie.trim().split('=');
      if (name === 'token') {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        setN(1)
        redirect("/pages/login");
        
        
      }
    }
  }

  

  return (
    <>
      <Navbar />
      <div className="pt-28">
        Account
        <button onClick={deleteTokenCookie}>Logout</button>
      </div>
    </>
  );
}
