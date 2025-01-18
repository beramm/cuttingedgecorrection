"use client";

import React from "react";
import { Navigation, Pagination, A11y, Parallax } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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
        "Paint correction, superior UV & scratch resistance, and extremely hydrophobic.",
      image: "/services/Ceramic Coatings.jpg",
    },
    {
      title: "Paint Correction",
      description:
       "Eliminate imperfections for a flawless, mirror-like shine.",
      image: "/services/Swirl Removal.jpg",
    },
    {
      title: "Engine Bay Detail",
      description:
        "Revitalize your engine bay with a deep clean and shine, enhancing the overall appearance and performance of your vehicle.",
      image: "/services/Engine Bay Detail.jpg",
    },
    {
      title: "Headlight Restoration",
      description:
        "Improve nighttime visibility and restore clarity to your headlights with our expert restoration service.",
      image: "/services/Headlight Restoration.png",
    },
    {
      title: "Interior Detailing",
      description:
        "Transform your vehicle's interior with a thorough cleaning and detailing, leaving every surface spotless and refreshed.",
      image: "/services/Interior Detailing.jpg",
    },
    {
      title: "Decontamination",
      description:
        "Remove embedded contaminants from your car's paint, preparing the surface for a smooth and flawless finish.",
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
              <Link href={`/service/${service.title.replace(/\s+/g, "-").toLowerCase()}`} passHref>
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
                  <div className="absolute bottom-8 left-4 sm:left-8 cursor-pointer bg-primary p-4 rounded-lg shadow-lg z-10 max-w-[240px] sm:max-w-[280px] text-foreground border-t-highlight border-t-4 h-[170px]">
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
