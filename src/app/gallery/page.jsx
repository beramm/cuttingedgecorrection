"use client";
import React from "react";
import { ParallaxScroll } from "../components/ui/parrallax-scroll";
import {images} from '../libs/gallery-images'

const Gallery = () => {
  return (
    <div
      style={{
        backgroundImage: `url(carbon_background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full px-8 md:px-4 xl:px-0 py-28"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-center text-5xl lg:text-[60spx] font-extrabold mt-20">
          WORKSHOP{" "}
          <span className="bg-radial-gradient bg-clip-text text-transparent">
            GALLERY
          </span>
        </h1>
        <ParallaxScroll
          images={images}
          className="overflow-y-scroll scrollbar-thin scrollbar-thumb-foreground scrollbar-track-transparent"
        />
      </div>
    </div>
  );
};


export default Gallery;
