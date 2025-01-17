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

const ServicesCarousel = () => {
  const services = [
    {
      title: "Ceramic Coatings",
      description:
        "Paint correction, superior UV & scratch resistance, and extremely hydrophobic.",
      image: "/randomServices.webp",
    },
    {
      title: "Paint Correction",
      description: "Eliminates scratches, brings back a smooth, glossy finish.",
      image: "/randomServices.webp",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Detail service 3 ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/randomServices.webp",
    },
    {
      title: "Ceramic Coatings",
      description:
        "Paint correction, superior UV & scratch resistance, and extremely hydrophobic.",
      image: "/randomServices.webp",
    },
    {
      title: "Swirl Removal",
      description: "Eliminates scratches, brings back a smooth, glossy finish.",
      image: "/randomServices.webp",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Detail service 3 ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/randomServices.webp",
    },
  ];

  return (
    <div className="w-full mx-auto h-[500px] relative max-w-[1700px]">
      <Swiper
        modules={[Navigation, Pagination, A11y, Parallax]}
        spaceBetween={16}
        breakpoints={{
          // For mobile
          0: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          // For tablets
          640: {
            slidesPerView: 1.5,
            spaceBetween: 12,
          },
          // For desktops
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 42,
          },
        }}
        centeredSlides={false}
        navigation
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-white",
        }}
        className="h-full w-full custom-swiper"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index} className="relative">
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
              <div className="absolute bottom-8 left-4 sm:left-8 cursor-pointer bg-primary p-4 rounded-lg shadow-lg z-10 max-w-[240px] sm:max-w-[280px] text-foreground border-t-highlight border-t-4 h-[130px]">
                <h2 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  {service.title}
                </h2>
                <p className="text-xs sm:text-sm font-light">
                  {service.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCarousel;
