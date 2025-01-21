"use client";

import React, { useRef } from "react";
import { Navigation, Pagination, A11y, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useIsVisible } from "../../hooks/useIsVisible"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import Image from "next/image";
import Link from "next/link";


const ServicesCarousel = () => {
  const services = [
    {
      title: "Ceramic Coatings",
      description:
        "The ultimate in paint protection and gloss enhancement. Dirt, water, and scratches don't stand a chance.",
      image: "/services/Ceramic Coatings.jpg",
    },
    {
      title: "Paint Correction",
      description:
        "Removes oxidation, eliminates scratches, and results in your paint looking flawless. Perfection is guaranteed. ",
      image: "/services/Paint Correction.jpg",
    },
    {
      title: "Engine Bay Detail",
      description:
        "There's no better way to show your superiority than having an absolutely mint powerplant under the bonnet.",
      image: "/services/Engine Bay Detail.jpg",
    },
    {
      title: "Headlight Restoration",
      description:
        "Give yourself a powerful presence on the road by restoring your headlights to crystal-clear perfection.",
      image: "/services/Headlight Restoration.jpg",
    },
    {
      title: "Interior Detailing",
      description:
        "The place you'll spend most of your time. We can keep it spotless for you.",
      image: "/services/Interior Detailing.jpg",
    },
    {
      title: "Decontamination",
      description:
        "Eliminate stubborn grime and iron from the surface of your paint, permanently. Leaving behind a sleek, sexy finish.",
      image: "/services/Decontamination.jpg",
    },
  ];

  return (

    <div className="w-full mx-auto max-w-[1700px]">
      {/* Swiper Container */}
      <div className="relative h-[500px]">
        <Swiper
          modules={[Navigation, Pagination, A11y, Parallax]}
          spaceBetween={16}
          loop={true} // Enable looping
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 42,
            },
          }}
          navigation
          pagination={{
            el: ".custom-pagination", // Link to the custom pagination container
            clickable: true,
          }}
          className="h-full w-full custom-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="relative">
              <Link
                href={`/services/${service.title
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                passHref
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Parallax Image */}
                  <div
                    data-swiper-parallax="-300"
                    className="relative w-full h-full cursor-pointer"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover brightness-75 transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  {/* Content Box */}
                  <div className="absolute bottom-8 left-4 sm:left-8 cursor-pointer bg-primary p-4 rounded-lg shadow-lg z-10 w-[240px] h-[160px] sm:w-[320px] sm:h-[200px] text-foreground border-t-highlight border-t-4 flex flex-col justify-center">
                    <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">
                      {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-light">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Container */}
      <div className="bg-black py-4">
        <div className="custom-pagination flex justify-center"></div>
      </div>
    </div>

  );
};

export default ServicesCarousel;
