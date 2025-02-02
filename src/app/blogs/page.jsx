import React from 'react'
import { subscriptionPlansContent } from '../libs/subscription-plans-content'
import SubscriptionPlansCard from '../components/card/subscription-plans-card/SubscriptionPlansCard'
import Head from 'next/head';


const blogs = () => {
  return (
    <>
      <title>Blogs - Cutting Edge Correction</title>
      <meta name="description" content="Read our latest blogs on professional vehicle detailing, expert car care tips, and industry insights. Stay informed and keep your ride in top condition with Cutting Edge Correction." />

      <div
        style={{ backgroundImage: `url(/carbon_background.png)`, backgroundPosition: 'center' }}
        className="h-full w-full px-8 md:px-12 xl:px-0 pt-28 pb-8"
      >
        <div className="relative w-full mt-12">
          <div className="text-center text-5xl lg:text-6xl font-extrabold mb-12">
            <h1>
              OUR{" "}
              <span className="bg-radial-gradient bg-clip-text text-transparent">
                BLOGS
              </span>
            </h1>
            <p className="text-sm font-light mt-8 mx-auto max-w-[566px]">
              Welcome to our blog section, where we share in-depth articles, expert insights, and the latest trends on a variety of topics. Whether you're looking for industry news, helpful tips, or inspiring stories, you'll find valuable content to keep you informed and engaged!
            </p>
          </div>
          {/* this is for each card blog */}


        </div>
      </div>
    </>

  )
}

export default blogs