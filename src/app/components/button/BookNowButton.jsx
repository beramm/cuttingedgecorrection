import React from 'react'
import { ArrowUpCircleSolid } from '../icon'
import Link from 'next/link'

const BookNowButton = () => {
  return (
    <Link href={"/contact"} className="w-40 text-xl cursor-pointer hover:border-highlight duration-300 flex items-center justify-center gap-x-2 border-2 border-accent rounded-full p-1 pl-2">
      <p>Book Now</p>
      <ArrowUpCircleSolid size={24} hexColor={"#E8E6DE"} />
    </Link>
  )
};


export default BookNowButton