import React from 'react'
import { ArrowUpCircleSolid } from '../icon'
import Link from 'next/link'

const OurWorkButton = () => {
  return (
    <Link href={"/gallery"} className="w-32 cursor-pointer hover:border-highlight duration-300 flex items-center justify-center gap-x-2 border-2 border-accent rounded-full p-1 pl-2">
      <p>Our Work</p>
      <ArrowUpCircleSolid size={24} hexColor={"#E8E6DE"} />
    </Link>
  )
}

export default OurWorkButton