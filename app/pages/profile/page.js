"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import pu from "../../assets/pu.png";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [tokenNotFound, setTokenNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = getTokenFromCookie();
    console.log("token", token);
    if (token == null) {
      redirect("/pages/login");
    }
    async function fetchData() {
      try {
        const token = getTokenFromCookie();
        if (!token) {
          redirect("/pages/login");
          setTokenNotFound(true);
          throw new Error("Token not found in cookie");
        }
        // Make the API call to fetch user data
        console.log(token);
        const response = await fetch(
          `http://localhost:4000/api/magic_brush/${token}`,
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
      } catch (error) {
        // console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Set loading to false after data fetching is complete
      }
    }
    fetchData();
  }, []);

  //extract token from cookies and pass to fetch for user data
  function getTokenFromCookie() {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === "token") {
        // Assuming the cookie name is 'token'
        return value;
      }
    }
    return null; // Token not found
  }

  //logout functionality
  function deleteTokenCookie() {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [name, _] = cookie.trim().split("=");
      if (name === "token") {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
    router.push("/pages/login");
  }

  // Show loading message when data is being fetched
  if (loading) {
    return (
      <>
        <Navbar />
        <h1>Loading...</h1>
      </>
    );
  }

  // Show only Navbar and loading message if userData is null
  if (!userData) {
    return (
      <>
        <Navbar />
        <h1>Loading...</h1>
      </>
    );
  }

  // If userData exists, render the entire page
  return (
    <>
      <Navbar />
      {/* entire page */}
      <div className="flex h-screen w-screen pt-28">
        {/* left part */}
        <div className="w-3/12 h-screen border border-r border-r-black">
          <div className="flex flex-col justify-center items-center pt-6">
            <div>
              <Image src={pu} height={120} width={120} />
            </div>
            <div>
              <h1 className="pt-6">
                {userData.first_name} {userData.last_name}
              </h1>
            </div>
          </div>
          <div className="pl-12 pr-6 pt-12 h-full text-xl">
            <button className="text-black font-medium pb-6">
              Personal Information
            </button>
            <br />
            <button className="text-black font-medium pb-6">
              Manage Orders
            </button>
            <br />
            <button className="text-black font-medium pb-6">Orders</button>
            <br />
            <button className="text-black font-medium pb-6">Liked Items</button>
            <br />
            <button className="text-black font-medium pb-6">
              Account Settings
            </button>
            <br />
            <button
              className=" text-red-700 font-medium pb-6"
              onClick={deleteTokenCookie}
            >
              Log out
            </button>
          </div>
        </div>
        {/* right part */}
        <div>{/* Right part content */}</div>
      </div>
    </>
  );
}
