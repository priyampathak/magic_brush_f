"use client";
import Navbar from "@/app/components/Navbar";
import React, { useEffect } from "react";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/slider1.webp";
import slider2 from "../../assets/slider 2.webp";
import fi1 from "../../assets/makeup.jpeg";
import fi2 from "../../assets/mehndi.jpg";
import fi3 from "../../assets/hair do.jpg";
import fi4 from "../../assets/drapping.webp";
import bs1 from "../../assets/bs1.webp";
import model from "../../assets/model.png";

export default function page() {
  const images = [slider1, slider2]; // Array of image URLs or components
  const bsimages = [bs1, bs1, bs1, bs1, bs1, bs1]; // Array of image URLs or components
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="pt-28 w-auto justify-center flex items-center">
        <Slider {...settings} className="w-screen overflow-hidden max-h-screen">
          {images.map((image, index) => (
            <div key={index} className="flex pl-4 pr-4 mb-12">
              <Image
                src={image}
                alt={`Slide ${index}`}
                height={1200}
                width={1800}
                className="h-96 w-full rounded-md"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div>
        <div className="flex justify-center font-light text-3xl h-16 pb-12 items-center">
          <h1>FEATURED</h1>
        </div>
        <div className="flex justify-between items-center font-normal text-3xl w-auto pl-28 pr-28 pb-8">
          <div className="text-center text-xl font-normal">
            <Link href="/">
              <Image
                src={fi1}
                height={450}
                width={450}
                className="h-48 w-48 rounded-full mb-4 shadow-lg shadow-slate-400"
              />
              <h1>Makeup</h1>
            </Link>
          </div>
          <div className="text-center text-xl font-normal">
            <Link href="/">
              <Image
                src={fi2}
                height={450}
                width={450}
                className="h-48 w-48 rounded-full mb-4 shadow-lg shadow-slate-400"
              />
              <h1>Mehndi</h1>
            </Link>
          </div>
          <div className="text-center text-xl font-normal">
            <Link href="/">
              <Image
                src={fi3}
                height={450}
                width={450}
                className="h-48 w-48 rounded-full mb-4 shadow-lg shadow-slate-400"
              />
              <h1>Hair Do</h1>
            </Link>
          </div>
          <div className="text-center text-xl font-normal">
            <Link href="/">
              <Image
                src={fi4}
                height={450}
                width={450}
                className="h-48 w-48 rounded-full mb-4 shadow-lg shadow-slate-400"
              />
              <h1>Draping</h1>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center shadow-slate-400 shadow-lg h-auto w-auto transition-transform hover:scale-105 mx-24 my-8 rounded-xl">
          <div className="pl-24 mt-4">
            <h1 className="text-4xl font-bold">Elevate your everyday fashion to new heights</h1>
            <h1 className="text-4xl font-bold"></h1>
            <h1 className="text-lg text-wrap w-5/5 mt-8 ">
              "Discover a realm where fashion meets distinction and elevate your everyday 
              styling to an unparalleled level of sophistication.
              Embrace a fusion of timeless elegance and contemporary flair as
              you transcend mundane routines and redefine your wardrobe with
              elevated refinement."
            </h1>
            <button className="w-52 h-12 bg-rose-900 my-10 rounded-lg text-white">Explore Now</button>
          </div>
          <div className="w-screen">
            <Image
              src={model}
              height={5000}
              width={5000}
              className="pt-0 h-6/6 w-6/6"
            />
          </div>
        </div>

        <div className="flex justify-center font-light text-3xl h-16 pb-12 items-center">
          <h1>New Launches</h1>
        </div>
      </div>
    </div>
  );
}
