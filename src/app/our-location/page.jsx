"use-client";
import React from "react";
import { MailIconSolid, MapPinIcon, PhoneIconSolid } from "../components/icon";
import MapComponent from "../components/map/MapComponent";

const OurLocation = () => {
  return (
    <div
      style={{
        backgroundImage: `url(carbon_background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-full w-full px-8 md:px-4 xl:px-0 py-28"
    >
      {/* Content Wrapper */}
      <div className="max-w-screen-xl m-auto">
        {/* Title Section */}
        <h1 className=" text-5xl lg:text-[60px] font-extrabold text-foreground">
          WHERE THE{" "}
          <span className="bg-radial-gradient bg-clip-text text-transparent">
            {" "}
            MAGIC
          </span>{" "}
          HAPPENS
        </h1>

        <div className="flex mt-16 text-foreground">
          {/* Map Section */}
          <div className="flex-1 justify-end">
            <MapComponent />
          </div>
          {/* Description Contact Section */}
          <div className="flex-1 flex flex-col justify-center pl-32">
            {/* Content */}
            <div className="flex flex-col gap-10">
              {/* Address */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <MapPinIcon size={20} hexColor={"#E8E6DE"} />
                  <h1 className="text-4xl font-bold">ADDRESS</h1>
                </div>
                <p className="hover:underline text-sm font-light mt-2">
                  67 Walsgott Street, North Geelong, VIC 3215
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
                  cuttingedgecorrection@gmail.com
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
