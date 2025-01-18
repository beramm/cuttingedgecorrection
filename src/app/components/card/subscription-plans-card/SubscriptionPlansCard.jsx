"use client"

import React from 'react'
import { GearIcon } from '../../icon'

const SubscriptionPlansCard = ({ data }) => {
  const handleSubscribe = () => {
    // ...
  }

  return (
    <div className="w-full max-w-80 h-[560px] rounded-[40px] flex flex-col items-center relative">
      <div className={`flex flex-col items-center justify-center w-full h-[140px] ${data.bgColor} rounded-t-[40px]`}>
        <h1 className="text-4xl font-bold">{data.type.toUpperCase()}</h1>
        <div className="flex items-end justify-center text-2xl font-bold relative">
          <p className="relative top-1.5 font-light">$</p>
          <p className="text-5xl mx-1">{data.price}</p>
          <p className="relative top-2.5 font-light">/mo</p>
        </div>
      </div>
      <div className="bg-[#1F1F22] w-full h-[356px] flex flex-col p-6">
      {data.content.map((eachContent, index) => {
          const words = eachContent.split(" ");

          const firstWord = words.slice(0, 1).join(" ");
          const remainingWords = words.slice(1).join(" ");

          const highlightWords = ["free", "priority", "15%"];
          const isHighlighted = highlightWords.some((word) => firstWord.includes(word));

          return (
            <div key={index} className="flex items-start mb-3">
              <div className="w-[24px]">
                <GearIcon size={24} hexColor={"#E8E6DE"} />
              </div>
              <p className="ms-2 text-lg">
                {isHighlighted ? (
                  <span className={`${data.highlightTextColor}`}>{firstWord.toUpperCase()}</span>
                ) : (
                  <span>{firstWord.toUpperCase()}</span>
                )}{" "}
                {remainingWords.toUpperCase()}
              </p>
            </div>
          );
        })}
      </div>
      <button onClick={handleSubscribe} className={`text-xl font-bold absolute bottom-0 w-full h-full max-h-16 ${data.bgColor} rounded-b-[40px]`}>
        SUBSCRIBE
      </button>
    </div>
  )
}

export default SubscriptionPlansCard