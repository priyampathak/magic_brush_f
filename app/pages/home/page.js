"use client";
import Navbar from '@/app/components/Navbar';
import React, { useEffect } from 'react'
import Slider from 'react-slick';
import Image from "next/image";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../assets/slider1.webp'
import slider2 from '../../assets/slider 2.webp'

export default function page() {
    const images = [slider1, slider2]; // Array of image URLs or components
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
        <div>
        <Navbar />
        <div className="pt-28 w-91">
            <Slider {...settings} className="w-screen overflow-hidden">
                {images.map((image, index) => (
                <div key={index} className="flex pl-4 pr-4">
                    <Image src={image} alt={`Slide ${index}`} height={900} width={1200} className="h-96 w-screen rounded-md"/>
                </div>
                ))}
            </Slider>
            <div className="pt-12 flex justify-center font-light text-3xl">
                <h1>
                    FEATURED
                </h1>
            </div>
            <div>

            </div>
        </div>
        </div>
    );
}
