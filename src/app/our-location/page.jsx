"use client";

import React, { useRef } from "react";
import { MailIconSolid, MapPinIcon, PhoneIconSolid } from "../components/icon";
import MapComponent from "../components/map/MapComponent";
import { useIsVisible } from "../hooks/useIsVisible";

const OurLocation = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div
      style={{
        backgroundImage: `url(/carbon_background.png)`,
        backgroundPosition: "center",
      }}
      className="h-full w-full px-8 md:px-12 xl:px-0 py-28 overflow-x-hidden" // Added overflow-x-hidden to avoid horizontal scrolling
    >
      {/* Content Wrapper */}
      <div className="max-w-screen-xl m-auto mt-12">
        {/* Title Section */}
        <h1 className="text-5xl lg:text-6xl font-extrabold text-foreground">
          WHERE THE{" "}
          <span className="bg-radial-gradient bg-clip-text text-transparent">
            MAGIC
          </span>{" "}
          HAPPENS
        </h1>

        <div className="mt-16 text-foreground flex lg:flex-row flex-col relative overflow-hidden"> {/* Added overflow-hidden */}
          {/* Map Section */}
          <div className="flex-1 justify-end">
            <MapComponent />
          </div>

          {/* Description Contact Section */}
          <div
            ref={ref}
            className={`flex-1 flex flex-col justify-center lg:pl-32 lg:pt-0 pt-16 transition-all duration-500 ease-in-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-40 opacity-0"
            }`}
          >
            {/* Content */}
            <div className="flex flex-col gap-10">
              {/* Address */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <MapPinIcon size={20} hexColor={"#E8E6DE"} />
                  <h1 className="text-4xl font-bold">ADDRESS</h1>
                </div>
                <p className="hover:underline text-sm font-light mt-2">
                  <a
                    href="https://www.google.com/maps/place/Cutting+Edge+Correction/@-38.1167031,144.3417704,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad4118fa7bfd889:0x19eba5f83ed455b3!8m2!3d-38.1167031!4d144.3443453!16s%2Fg%2F11pwphknv6?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm font-light"
                  >
                    67 Walsgott Street, North Geelong, VIC 3215
                  </a>
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <PhoneIconSolid size={20} hexColor={"#E8E6DE"} />
                  <h1 className="text-4xl font-bold">PHONE</h1>
                </div>
                <p className="hover:underline text-sm font-light mt-2">
                  0450 649 257
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <MailIconSolid size={20} hexColor={"#E8E6DE"} />
                  <h1 className="text-4xl font-bold">EMAIL</h1>
                </div>
                <p className="hover:underline text-sm font-light mt-2">
                  <a
                    href="mailto:cuttingedgecorrection@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-sm font-light"
                  >
                    cuttingedgecorrection@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLocation;
