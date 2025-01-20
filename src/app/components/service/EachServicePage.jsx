"use client";
import React, { useRef } from 'react'
import ContactUsButton from "../button/ContactUsButton"
import Image from "next/image"
import ServiceHeadline from '../text/ServiceHeadline'
import TheResultsCarousel from '../carousels/TheResultsCarousel'
import { useIsVisible } from '../../hooks/useIsVisible'

const EachServicePage = ({ service, serviceImage }) => {

  const ref1 = useRef();
  const isVIsible1 = useIsVisible(ref1);

  const ref2 = useRef();
  const isVIsible2 = useIsVisible(ref2);

  const ref3 = useRef();
  const isVIsible3 = useIsVisible(ref3);

  return (
    <>
      <div ref={ref1} className="h-dvh w-full flex items-center justify-end overflow-hidden 2xl:overflow-visible">


        <img
          className={`fixed top-0 md:left-0 right-0 object-cover block mx-auto 2xl:mx-0 h-[1200px] 2xl:h-auto 2xl:max-h-[3000px] w-auto sm:w-full -z-20 transition-opacity duration-500 ease-in ${isVIsible1 ? "opacity-100" : "opacity-0"
            }`}
          src={service.landingImage}
          alt="Background Image"
        />
        <div
          className={`relative top-24 md:top-auto w-full mx-8 md:mx-16 lg:mx-36 flex flex-col items-end transition-all duration-1000 ease-in-out ${isVIsible1 ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
        >          <h1 className="hidden md:block text-6xl font-black items-end">
            {service.name.toUpperCase()}
          </h1>
          <div className="flex md:hidden text-5xl font-black flex-col">
            {service.name.toUpperCase()}
          </div>
          <div className="text-base mb-8 mt-8 md:mt-0 w-full max-w-full md:max-w-xl text-right">
            <p>{service.description}.</p>
          </div>
          <ContactUsButton />
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full bg-black">

        {/* Transition between sections: Landing Page and Content */}
        <div className="absolute w-full h-64 md:h-96 3xl:h-[320px] -top-24 md:-top-[164px]">
          <div
            className="absolute -top-4 inset-0 z-10 bg-gradient-to-b from-transparent to-black to-40%"
          // style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}
          ></div>
        </div>

        <div className="text-center text-4xl md:text-5xl font-extrabold mt-40 mb-0 md:mb-8 lg:mb-4 p-8 relative z-10">
          <ServiceHeadline serviceName={service.name} />
        </div>

        {/* Content */}
        <div className="-mt-4 md:-mt-0 relative w-full flex flex-col lg:flex-row mx-auto -z-2 h-auto lg:h-[700px] justify-center items-center p-8 lg:p-0">

          <div ref={ref2} className="flex flex-col lg:flex-row items-center justify-start gap-x-16 h-full w-full max-w-screen-2xl">
            <div className={`w-full h-full flex flex-col justify-between mt-0 transition-all duration-700 ease-in-out ${isVIsible2 ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}>
              <div className="md:ms-12 mb-4 w-full max-w-md">
                <p className="mb-4">{service.content.firstDescription[0]}</p>
                <p>{service.content.firstDescription[1]}</p>
              </div>
              <div className="w-full h-[480px] relative overflow-hidden">
                <Image
                  src={service.firstContentImage}
                  alt={`image-${service.name}`}
                  fill
                  sizes='auto'
                  className="object-cover"
                />
              </div>
            </div>

            <div className={`w-full h-full flex flex-col justify-between transition-all duration-700 ease-in-out ${isVIsible2 ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}>
              {/* Mobile Decorative Bar */}
              <div className="flex md:hidden w-full justify-end my-12">
                <div className="bg-foreground w-full max-w-2xl h-1"></div>
              </div>

              <div className="w-full h-[400px] relative overflow-hidden">
                <Image
                  src={service.secondContentImage}
                  alt={`image-${service.name}`}
                  fill
                  sizes='auto'
                  className="object-cover"
                />
              </div>

              {/* Decorative Bar */}
              <div className="hidden md:flex w-full justify-end my-12">
                <div className="bg-foreground w-full max-w-2xl h-1"></div>
              </div>

              <div className="flex flex-col me-0 md:me-12 mt-8 md:mt-0">
                <div className="w-full flex flex-col items-end text-left md:text-right">
                  <p className="mb-4">{service.content.secondDescription[0]}</p>
                  <p>{service.content.secondDescription[1]}</p>
                </div>

                <div className="flex items-center mt-6 justify-start md:justify-end">
                  <ContactUsButton />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Transition between sections: Content and Results */}
        <div className="absolute w-full h-40 -bottom-40 z-20">
          <div
            className="absolute inset-0 bg-gradient-to-t from-transparent to-black to-40%"
          // style={{ background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 7), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 1))" }}
          ></div>
        </div>
      </div>

      <div ref={ref3}
        style={{
          backgroundImage: `url(/carbon_background.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-full w-full"
      >
        {/* The Results */}
        <div className={`mt-16 relative w-full flex flex-col mx-auto -z-2 h-[920px] items-center justify-center transition-all duration-700 ease-in-out ${isVIsible3 ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}>
          <div className="text-left text-4xl md:text-5xl font-extrabold mb-10">
            <h1>
              THE{" "}
              <span className="bg-radial-gradient bg-clip-text text-transparent">
                RESULTS
              </span>
            </h1>
          </div>
          <TheResultsCarousel serviceImage={serviceImage} />
        </div>
      </div>
    </>
  );
}

export default EachServicePage