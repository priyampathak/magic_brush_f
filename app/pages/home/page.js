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
import haircutds from "../../assets/doorstep/haircut.jpg";
import makeupds from "../../assets/doorstep/makeups.jpg";
import mehndids from "../../assets/doorstep/Mehndi.jpg";
import model from "../../assets/model.png";
import Footer from "@/app/components/Footer";

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
                alt="img"
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
                alt="img"
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
                alt="img"
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
                alt="img"
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
              &quot;Discover a realm where fashion meets distinction and elevate your everyday 
              styling to an unparalleled level of sophistication.
              Embrace a fusion of timeless elegance and contemporary flair as
              you transcend mundane routines and redefine your wardrobe with
              elevated refinement.&quot;
            </h1>
            <button className="w-52 h-12 bg-rose-900 my-10 rounded-lg text-white">Explore Now</button>
          </div>
          <div className="w-screen">
            <Image
              src={model}
              height={5000}
              width={5000}
              className="pt-0 h-6/6 w-6/6"
              alt="img"
            />
          </div>
        </div>
        <div className="flex justify-center font-light text-3xl h-16 py-14 items-center">
          <h1>AT YOUR DOORSTEP</h1>
        </div>
        <div className="flex h-auto my-14 mx-40">
            <div className=" w-2/4 mb-28 mt-4">
                <Image src={mehndids} height={200} width={200} className="absolute ml-72 mt-48 shadow-lg shadow-gray-400 rounded-md" />
                <div className="flex">
                    <Image src={haircutds} height={300} width={600} className="h-52 w-96 mt-12
                    shadow-lg shadow-gray-400 rounded-md"/>
                    <Image src={makeupds} height={80} width={130} className="w-48 ml-10
                    shadow-lg shadow-gray-400 rounded-md" alt="Makeup" />
                </div>
            </div>
            <div className="w-2/4">
                <h1 className="font-semibold text-2xl">What we brings to your Doorsteps?</h1>
                <h1 className="text-xl mt-6 text-wrap">
                  `Our service brings the quintessence of beauty directly to your doorstep. With a touch of convenience and luxury, we specialize in offering exquisite services such as mehndi decoration, hairstyling, hairdos, and draping, all within the comfort of your own space. Whether you&apos;re preparing for a special occasion, a grand celebration, or simply indulging in self-care, our expert team is dedicated to enhancing your natural beauty and elevating your style effortlessly. From intricate mehndi designs to tailored hairstyling and elegant draping techniques, we ensure that every detail is meticulously crafted to reflect your individuality and personal preferences. Embrace the epitome of convenience without compromising on sophistication with our doorstep beauty services.`
                </h1>

            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
