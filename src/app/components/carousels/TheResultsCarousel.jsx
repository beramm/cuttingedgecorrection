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

const TheResultsCarousel = ({ serviceImage }) => {
  const shouldEnableLoop = serviceImage.length > 2; // Ensure enough slides for loop mode

  return (
    <div className="w-full mx-auto max-w-[1700px]">
      {/* Swiper Container */}
      <div className="relative h-[400px]">
        {serviceImage.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, A11y, Parallax]}
            spaceBetween={16}
            loop={shouldEnableLoop} // Dynamically enable or disable looping
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
            {serviceImage.map((service, index) => (
              <SwiperSlide key={index} className="relative">
                <div className="h-full">
                  <div className="relative w-full h-full overflow-hidden">
                    {/* Parallax Image */}
                    <div
                      data-swiper-parallax="-300"
                      className="relative w-full h-full cursor-pointer"
                    >
                      <Image
                        src={service.url}
                        alt={service.service_name}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover brightness-75 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-lg font-semibold">
            No images available.
          </div>
        )}
      </div>

      {/* Custom Pagination Container */}
      {serviceImage.length > 0 && (
        <div className="bg-transparent py-4">
          <div className="custom-pagination flex justify-center"></div>
        </div>
      )}
    </div>
  );
};

export default TheResultsCarousel;
