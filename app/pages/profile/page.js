"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import pu from "../../assets/pu.png";
import Footer from "@/app/components/Footer";
import Personal from "@/app/components/profile/Personal";
import Liked from "@/app/components/profile/Liked";
import Manage_orders from "@/app/components/profile/Manage_orders";
import Orders from "@/app/components/profile/Orders";
import Account_settings from "@/app/components/profile/Account_settings";

export default function Page() {
  const [userData, setUserData] = useState(null);
  const [tokenNotFound, setTokenNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selector, setSelector] = useState(1);
  const router = useRouter();
  useEffect(() => {
    const token = getTokenFromCookie();
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
        //console.log(token);
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
        console.error("Error fetching user data:", error);
        document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        router.push("/pages/login");
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
    <div className=" overflow-hidden">
      <Navbar />
      {/* entire page */}
      <div className="flex h-auto w-screen pt-28">
        {/* left part */}
        <div className="w-3/12 border border-r border-r-black h-full">
          <div className="flex flex-col justify-center items-center pt-6">
            <div>
              <Image src={pu} height={120} width={120} alt="img"/>
            </div>
            <div>
              <h1 className="pt-6 font-semibold text-center">
                {userData.first_name} {userData.last_name}
              </h1>
              <h1 className="pt-2 text-center">
                {userData.user_role_id == "1" && "Admin"}
                {userData.user_role_id == "2" && "Partner"}
                {userData.user_role_id == "3" && "User"}
              </h1>
            </div>
          </div>
          <div className="h-auto text-xl items-center justify-center flex mb-16">
            <div className="py-12">
              <button
                className={`text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex 
                  ${
                    selector === 1 ? "border-2 border-rose-800 border-l-8" : ""
                  }`}
                onClick={() => {
                  setSelector(1);
                }}
              >
                Personal information
              </button>
              <br />
              <button
                className={`text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex 
                  ${
                    selector === 2 ? "border-2 border-rose-800 border-l-8" : ""
                  }`}
                onClick={() => {
                  setSelector(2);
                }}>
                Manage Orders
              </button><br />
              <button
                className={`text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex 
                  ${
                    selector === 3 ? "border-2 border-rose-800 border-l-8" : ""
                  }`}
                onClick={() => {setSelector(3);}}>
                Orders
              </button>
              <br />
              <button
                className={`text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex 
                  ${
                    selector === 4 ? "border-2 border-rose-800 border-l-8" : ""
                  }`}
                onClick={() => {
                  setSelector(4);
                }}
              >
                Liked
              </button>
              <br />
              <button
                className={`text-black font-medium h-12 items-center rounded-lg pl-4 w-72 flex 
                  ${
                    selector === 5 ? "border-2 border-rose-800 border-l-8" : ""
                  }`}
                onClick={() => {
                  setSelector(5);
                }}
              >
                Account Settings
              </button>
              <br />
              <button
                className=" text-red-700 font-medium items-center rounded-lg pl-4 w-72 flex "
                onClick={deleteTokenCookie}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
        {/* right part */}
        <div>
          {selector === 1 && <Personal />}
          {selector === 2 && <Manage_orders />}
          {selector === 3 && <Orders />}
          {selector === 4 && <Liked />}
          {selector === 5 && <Account_settings />}
        </div>
      </div>
      <Footer />
    </div>
  );
}
