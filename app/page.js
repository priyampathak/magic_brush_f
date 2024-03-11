"use client";
import React, { useEffect } from 'react';

import { redirect } from 'next/navigation'

export default function Home() {
  
  useEffect(() => {
      redirect("/pages/home");
  }, []);
  
  return (
    <div className="bg-slate-500">
      {/* Content goes here */}
    </div>
  );
}
