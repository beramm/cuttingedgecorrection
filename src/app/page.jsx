"use client"

import ServicesCarousel from "./components/carousels/ServicesCarousel";
import ContactUsButton from "./components/button/ContactUsButton";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [review, setReview] = useState([])

  useEffect(() => {
    const fetchReviews = async () => {
      const reviewData = await axios.get('/api/v1/reviews')
      setReview(reviewData.data.data)
    }

    fetchReviews()
  }, [])
  
  return (
    <>
      <div className="h-dvh w-full flex items-center justify-start overflow-hidden 2xl:overflow-visible">
        <video 
          className="absolute top-0 md:left-0 right-0 object-cover 2xl:object-contain block mx-auto 2xl:mx-0 h-[1200px] 2xl:h-auto w-auto sm:w-full z-0" 
          src="/videoplayback.webm" autoPlay loop muted
        ></video>
        <div className="relative top-24 md:top-auto w-full mx-8 md:mx-16 lg:mx-36">
          <h1 className="hidden md:block text-6xl font-bold">CUTTING EDGE CORRECTION</h1>
          <div className="flex md:hidden text-5xl font-bold flex-col">
            <p>CUTTING</p>
            <p>EDGE</p>
            <p>CORRECTION</p>
          </div>
          <div className="text-base mb-8 mt-8 md:mt-0 w-full max-w-full md:max-w-xl">
            <p>
              At CEC, we provide exceptional car detailing services right here
              in Geelong. Our home-based business ensures personalized care
              and attention to detail, bringing top-tier results that exceed
              your expectations.
            </p>
          </div>
          <ContactUsButton />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[600px_auto] z-30 relative top-12 md:10 w-full max-w-screen-xl p-10 md:p-16 xl:p-0">
        <div className="flex flex-col items-start justify-start text-xl md:text-3xl font-bold gap-y-2">
          <h1>PASSION FOR CARS,</h1>
          <h1>EXCELLENCE IN DETAILLING.</h1>
          <h1 className="mt-8">EXPERIENCE THE CUTTING EDGE.</h1>
        </div>
        <div className="flex flex-col justify-between mt-10 md:mt-0">
          <p>Delivering a 5-star finish is our standard, and we never settle for less. Our unwavering dedication means your car&apos;s brilliance will stand the test of time.</p>
          <div>
            <p className="mb-4">Want to see what all the hype&apos;s about? Tap the button and let&apos;s chat.</p>
            <ContactUsButton />
          </div>
        </div>
      </div>

      {/* Transition between sections: Landing Page and Our Services */}
      <div className="relative w-full h-64 3xl:h-[560px] -top-48 3xl-top-12">
        <div
          className="absolute -top-4 inset-0 z-10 bg-gradient-to-b from-transparent to-black to-40%"
          // style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}
        ></div>
      </div>

      {/* Our Services */}
      <div className="relative w-full bg-black">
        <div className="text-center text-4xl md:text-5xl font-extrabold mb-12">
          <h1>
            OUR{" "}
            <span className="bg-radial-gradient bg-clip-text text-transparent">
              SERVICES
            </span>
          </h1>
        </div>
        <ServicesCarousel />

        {/* Transition between sections: Our Services and Our Commitment */}
        <div className="absolute w-full h-40 -bottom-40 z-20">
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-black to-40%"
            // style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}
          ></div>
        </div>
      </div>

      {/** Our Commitment */}
      <div className="mt-16 relative w-full flex flex-col lg:flex-rowmx-auto -z-2 h-[920px] justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={"/carbon_background.png"}
            width={1920}
            height={1080}
            alt="bg"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center w-full max-w-screen-2xl mx-auto">
          {/* Text Side */}
          <div className="flex-1 flex flex-col items-start justify-center py-12 p-10 md:p-0 lg:px-20">
            {/* Title */}
            <div className="text-left text-4xl md:text-5xl font-extrabold mb-8">
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
                single time. No shortcuts, no rush jobs&mdash;just high-quality
                results. Whether you&apos;re cruising along the coast or turning
                heads around town, we&apos;ll make sure your car gets the
                attention it deserves.
              </p>
            </div>
            {/* Button */}
            <div className="flex items-center justify-start mt-4 w-36">
              <ContactUsButton />
            </div>
            {/* Decorative Bar */}
            <div className="bg-foreground w-full h-1 mt-8"></div>
          </div>

          {/* Image Side */}
          <div className="w-full max-w-[800px] mt-6">
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
      <div>
        <div>
          {review && review.map((eachReview, index) => {
            return (
              <div key={index}>
                <h1>{eachReview.content}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
