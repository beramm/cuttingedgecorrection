"use client";

import React, { useRef } from "react";
import { GearIcon } from "../../icon";
import Image from "next/image";
import { useIsVisible } from "../../../hooks/useIsVisible";
import { useRouter } from "next/navigation";

const SubscriptionPlansCard = ({ data }) => {
  const router = useRouter();
  const handleSubscribe = () => {
    const redirectPayment =
      data.type === "Basic"
        ? "https://checkout.square.site/merchant/ML6CXJF39N1F8/checkout/VPXZ2MS7U4WY6I4YLYWMCYYK"
        : data.type === "Standard"
        ? "https://checkout.square.site/merchant/ML6CXJF39N1F8/checkout/LCGAYWSNFIFQPRSDEPXWFYCW"
        : "https://checkout.square.site/merchant/ML6CXJF39N1F8/checkout/CORBIMNKMTKZUQEXTUJEMLVQ";

    router.push(redirectPayment);
  };

  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`
    transition-all 
    ease-in 
    duration-500 
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="w-full max-w-80 h-[560px] rounded-[40px] flex flex-col items-center relative">
        <div
          className={`flex flex-col items-center justify-center w-full h-[150px] ${data.bgColor} rounded-t-[40px]`}
        >
          <h1 className="text-4xl font-bold">{data.type.toUpperCase()}</h1>
          <div className="flex items-end justify-center text-2xl font-bold relative">
            <p className="relative top-1.5 font-base">$</p>
            <p className="text-5xl mx-1 mt-2">{data.price}</p>
            <p className="relative top-2.5 font-light">/mo</p>
          </div>
        </div>
        <div className="bg-[#1F1F22] w-full h-[346px] flex flex-col p-6">
          {data.content.map((eachContent, index) => {
            const words = eachContent.split(" ");

            const firstWord = words.slice(0, 1).join(" ");
            const remainingWords = words.slice(1).join(" ");

            const highlightWords = ["free", "priority", "15%"];
            const isHighlighted = highlightWords.some((word) =>
              firstWord.includes(word)
            );
            
            return (
              <div key={index} className="flex items-start mb-3">
                <div className="w-[24px]">
                  <GearIcon size={24} hexColor={"#E8E6DE"} />
                </div>
                <p className="ms-2 text-lg">
                  {isHighlighted ? (
                    <span className={`${data.highlightTextColor}`}>
                      {firstWord.toUpperCase()}
                    </span>
                  ) : (
                    <span>{firstWord.toUpperCase()}</span>
                  )}{" "}
                  {remainingWords.toUpperCase()}
                </p>
              </div>
            );
          })}
        </div>
        <button
          onClick={handleSubscribe}
          className={`text-xl font-bold absolute bottom-0 w-full h-full max-h-16 ${data.bgColor} rounded-b-[40px] hover:opacity-80`}
        >
          SUBSCRIBE
        </button>
        {data.bestValue && (
          <div className="absolute -top-10 -right-10">
            <Image
              src={"/bestvalue_banner.png"}
              width={120}
              height={120}
              alt="bestvalue_banner"
              className="w-auto h-auto"
            />
            <div className="relative">
              <p
                className={`text-[#B53534] text-xl absolute -top-[80px] right-[30px] leading-5 rotate-[30deg] text-center font-black`}
              >
                BEST
              </p>
              <p
                className={`text-[#B53534] text-xl absolute -top-[60px] right-[38px] leading-5 rotate-[30deg] text-center font-black`}
              >
                VALUE
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubscriptionPlansCard;
