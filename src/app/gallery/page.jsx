"use client";
import React, { useEffect, useState } from "react";
import { ParallaxScroll } from "../components/ui/parrallax-scroll";
import {images} from '../libs/gallery-images'
import axios from "axios";

const Gallery = () => {

  const [picture, setPicture] = useState([]);


  useEffect(() => {
    const fetchPict = async () => {
      const reviewData = await axios.get("/api/v1/pictures");
      setPicture(reviewData.data.data);
    };

    fetchPict();
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(carbon_background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full px-8 md:px-12 xl:px-0 py-28"
    >
      <div className="flex flex-col items-center justify-center h-screen mt-12">
        <h1 className="text-center text-5xl lg:text-6xl font-extrabold mb-12">
          WORKSHOP{" "}
          <span className="bg-radial-gradient bg-clip-text text-transparent">
            GALLERY
          </span>
        </h1>
        <ParallaxScroll
          images={images}
          className="overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-800"
        />
      </div>
    </div>
  );
};


export default Gallery;
