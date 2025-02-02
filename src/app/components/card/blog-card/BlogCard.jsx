"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import { ArrowRightCircleSolid } from '../../icon'
import { useIsVisible } from "../../../hooks/useIsVisible";


const BlogCard = ({ blogData }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div ref={ref} className={`w-[320px] h-[520px] flex flex-col items-start justify-start bg-[#1F1F22] rounded-lg cursor-pointer duration-300 transition-all ease-in-out duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="w-full h-[320px] relative overflow-hidden rounded-t-lg">
        <Image
          src={blogData.thumbnail}
          alt={`thumbnail ${blogData.title}`}
          fill
          sizes='auto'
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full p-6">
        <h1 className="font-black text-3xl">
          {blogData.title}
        </h1>
        <p className="font-normal text-sm mt-1 mb-4 text-highlight">
          {new Date(blogData.createdAt)
            .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
            .toUpperCase()}
        </p>
        <p className="line-clamp-3 text-sm">
          {blogData.content}
        </p>
        <button className="text-sm font-medium mt-4 flex items-center justify-between gap-x-2">
          <p>Read more</p>
          <ArrowRightCircleSolid size={20} hexColor={"#E8E6DE"} />
        </button>
      </div>
    </div>
  )
}

export default BlogCard