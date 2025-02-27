"use client";

import ServicesCarousel from "./components/carousels/ServicesCarousel";
import ContactUsButton from "./components/button/ContactUsButton";
import BookNowButton from "./components/button/BookNowButton";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./components/card/review-card/infinite-moviing-cards";
import { useRef } from "react";
import { useIsVisible } from "../app/hooks/useIsVisible";


export default function Home() {
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await axios.get("/api/v1/reviews");
      setReview(reviewData.data.data);
    };

    fetchReviews();
  }, []);

  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <>
      <title>Cutting Edge Correction</title>
      <meta
        name="description"
        content="Cutting Edge Correction - Geelong's Finest Car Detailing"
      />
      <div className="h-dvh w-full flex items-center justify-start overflow-hidden 2xl:overflow-visible">
        <video
          className="absolute top-0 md:left-0 right-0 object-cover 2xl:object-contain block mx-auto 2xl:mx-0 h-[60dvh] md:h-auto w-auto sm:w-full z-0"
          src="/montage_video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-20 top-24 md:top-auto w-full mx-8 md:mx-16 lg:mx-36">
          <h1 className="hidden md:block text-6xl font-black">
            CUTTING EDGE CORRECTION
          </h1>
          <div className="flex md:hidden text-5xl font-black flex-col">
            <p>CUTTING</p>
            <p>EDGE</p>
            <p>CORRECTION</p>
          </div>
          <div className="text-base mb-8 mt-8 md:mt-0 w-full max-w-full md:max-w-xl">
            <p>
              At CEC, we provide exceptional car detailing services right here
              in Geelong. Our home-based business ensures personalized care and
              attention to detail, bringing top-tier results that exceed your
              expectations.
            </p>
          </div>
          <BookNowButton />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-[600px_auto] z-30 relative top-24 md:top-12 w-full max-w-screen-xl px-10 md:p-16 xl:p-0">
        <div className="flex flex-col items-start justify-start text-xl md:text-3xl font-bold gap-y-2">
          <h1>PASSION FOR CARS,</h1>
          <h1>EXCELLENCE IN DETAILING.</h1>
          <h1 className="mt-8">EXPERIENCE THE CUTTING EDGE.</h1>
        </div>
        <div className="flex flex-col justify-between mt-10 md:mt-0">
          <p>
            Delivering a 5-star finish is our standard, and we never settle for
            less. Our unwavering dedication means your car&apos;s brilliance
            will stand the test of time.
          </p>
          <div>
            <p className="mb-4">
              Want to see what all the hype&apos;s about? Tap the button and
              let&apos;s chat.
            </p>
            <ContactUsButton />
          </div>
        </div>
      </div> */}

      {/* Our Services */}
      <div className="relative w-full bg-black">

        {/* Transition between sections: Landing Page and Our Services */}
        <div className="absolute w-full h-[200px] md:h-40 3xl:h-[100px] -top-[400px] md:-top-24 3xl:-top-32">
          <div
            className="absolute -top-4 inset-0 z-10 bg-gradient-to-b from-transparent to-black to-30%"
          // style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}
          ></div>
        </div>

        <div className="text-center text-4xl md:text-5xl font-extrabold mt-8 md:mt-24 mb-12">
          <h1>
            OUR{" "}
            <span className="bg-radial-gradient bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>
        </div>
        <ServicesCarousel />

        <div className="grid grid-cols-1 md:grid-cols-[600px_auto] z-30 relative mx-0 mb-24 md:mb-0 md:mx-40 top-24 md:top-12 w-full max-w-screen-xl px-10 md:p-16 xl:p-0">
          <div className="flex flex-col items-start justify-start text-xl md:text-3xl font-bold gap-y-2">
            <h1>PASSION FOR CARS,</h1>
            <h1>EXCELLENCE IN DETAILING.</h1>
            <h1 className="mt-8">EXPERIENCE THE CUTTING EDGE.</h1>
          </div>
          <div className="flex flex-col justify-between mt-10 md:mt-0">
            <p>
              Delivering a 5-star finish is our standard, and we never settle for
              less. Our unwavering dedication means your car&apos;s brilliance
              will stand the test of time.
            </p>
            <div>
              <p className="mb-4">
                Want to see what all the hype&apos;s about? Tap the button and
                let&apos;s chat.
              </p>
              <ContactUsButton />
            </div>
          </div>
        </div>
        
        {/* Transition between sections: Our Services and Our Commitment */}
        <div className="absolute w-full h-48 -bottom-48 z-20">
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-black to-40%"
          // style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}
          ></div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/carbon_background.png)`,
          backgroundPosition: "center",
        }}
        className="h-full w-full"
      >
        {/** Our Commitment */}
        <div ref={ref} className="mt-16 relative w-full flex flex-col lg:flex-rowmx-auto -z-2 h-[920px] justify-center z-20">
          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-screen-2xl mx-auto">
            {/* Text Side */}
            <div className={`flex-1 flex flex-col items-start justify-center py-12 p-10 md:p-0 lg:px-20 transition-all duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-40 opacity-0"}`}>
              {/* Title */}
              <div className="text-left text-4xl md:text-5xl font-extrabold mb-8 z-20">
                <h1>
                  OUR{" "}
                  <span className="bg-radial-gradient bg-clip-text text-transparent">
                    COMMITMENT
                  </span>
                </h1>
              </div>
              {/* Details */}
              <div className="flex flex-col gap-3 lg:gap-6 max-w-lg text-sm sm:text-base">
                <p>
                  At Cutting Edge Correction, we&apos;re not just about
                  cars&mdash;we&apos;re about the people of Geelong.
                </p>
                <p>
                  We understand that you want your vehicle to look its absolute
                  best, and we&apos;re committed to making that happen every
                  single time. No shortcuts, no rush jobs&mdash;just
                  high-quality results. Whether you&apos;re cruising along the
                  coast or turning heads around town, we&apos;ll make sure your
                  car gets the attention it deserves.
                </p>
              </div>
              {/* Button */}
              <div className="flex items-center justify-start mt-4">
                <ContactUsButton />
              </div>
              {/* Decorative Bar */}
              <div className="bg-foreground w-full h-1 mt-8"></div>
            </div>

            {/* Image Side */}
            <div className={`w-full max-w-[800px] mt-6 transition-all duration-700 ease-in-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-40 opacity-0"}`}>
              <Image
                src={"/our_commitment_image.webp"}
                width={1920}
                height={1080}
                alt="image"
                className="w-full lg:w-[1024px] h-[350px] lg:h-[650px] object-cover object-left"
              />
            </div>
          </div>
        </div>



        {/* Testimony */}
        <div className="h-full w-full">
          <div className="flex flex-col items-center mt-20 max-w-screen-3xl m-auto lg:mb-40 mb-20">
            <div className="text-left text-4xl md:text-5xl font-extrabold mb-8">
              <h1 className="text-center px-4">
                WHAT OUR{" "}
                <span className="bg-radial-gradient bg-clip-text text-transparent">
                  CUSTOMERS SAY
                </span>
              </h1>
            </div>

            <div className="w-full">
              <InfiniteMovingCards
                value={review}
                direction="right"
                speed="normal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}