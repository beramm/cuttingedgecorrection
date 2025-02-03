"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowRightCircleSolid, PencilIcon, TrashSolidIcon } from '../../icon'
import { useIsVisible } from "../../../hooks/useIsVisible";
import axios from 'axios';


const BlogCardAdmin = ({ blogData , handleEdit , handleDelete}) => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);
  


  return (
    <div ref={ref} className={`w-full  md:w-[400px] lg:w-[400px] h-[450px] flex flex-col items-start justify-start bg-[#1F1F22] rounded-lg cursor-pointer transition-all ease-in-out duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      <div className="w-full h-[320px] relative overflow-hidden rounded-t-lg">
        <Image
          src={blogData.thumbnail}
          // src="/picture-loading-failed.png"
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
        <p className="line-clamp-3 text-smc" dangerouslySetInnerHTML={{ __html: blogData.content }}/>
        <button className="text-sm font-medium mt-4 flex items-center justify-between gap-x-2">
          <p>Read more</p>
          <ArrowRightCircleSolid size={20} hexColor={"#E8E6DE"} />
        </button>
        <div className='absolute bottom-4 right-4 flex gap-x-4'>
          <button  onClick={()=>handleEdit(blogData)}>
          <PencilIcon size={20} hexColor={"#FFFFFF"}/>
          </button>
          <button onClick={()=>handleDelete(blogData)}>
          <TrashSolidIcon size={20} hexColor={"#FFFFFF"} /> 
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlogCardAdmin;
