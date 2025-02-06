"use client"

import Image from 'next/image'
import React, { useRef } from 'react'
import { ArrowRightCircleSolid } from '../../icon'
import { useIsVisible } from "../../../hooks/useIsVisible";
import Link from "next/link";


const BlogCard = ({ blogData }) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <Link
      href={`/detailing-guides/${blogData.slug}`}
      passHref
      ref={ref}
      className={`w-full md:w-[280px] xl:w-[400px] h-[500px] flex flex-col items-start justify-start bg-[#1F1F22] rounded-lg cursor-pointer transform hover:scale-105 transition-all ease-in-out duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="w-full min-h-[256px] relative overflow-hidden rounded-t-lg">
        <Image
          src={blogData.thumbnail}
          alt={`thumbnail ${blogData.title}`}
          fill
          sizes='auto'
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-full h-full p-4">
        <h2 className="font-black text-2xl">
          {blogData.title}
        </h2>
        <p className="font-normal text-sm mt-1 mb-2 text-highlight">
          {new Date(blogData.created_at)
            .toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
            .toUpperCase()}
        </p>
        <p className="line-clamp-2 text-smc" dangerouslySetInnerHTML={{ __html: blogData.content }} />
        <div className='absolute bottom-4 flex gap-x-4'>
          <button className="text-sm font-medium mt-4 flex items-center justify-between gap-x-2">
            <p>Read more</p>
            <ArrowRightCircleSolid size={20} hexColor={"#E8E6DE"} />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard