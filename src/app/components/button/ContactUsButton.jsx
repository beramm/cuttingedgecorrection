import React from 'react'
import { ArrowUpCircleSolid } from '../icon'
<<<<<<< HEAD

const ContactUsButton = () => {
  return (
    <div className="cursor-pointer hover:border-highlight duration-300 flex items-center justify-center gap-x-2 border-2 border-accent rounded-full p-1 pl-2">
      <p>Contact Us</p>
      <ArrowUpCircleSolid size={24} hexColor={"#E8E6DE"} />
    </div>
=======
import Link from 'next/link'

const ContactUsButton = () => {
  return (
    <Link href={"/contact"} className="cursor-pointer hover:border-highlight duration-300 flex items-center justify-center gap-x-2 border-2 border-accent rounded-full p-1 pl-2">
      <p>Contact Us</p>
      <ArrowUpCircleSolid size={24} hexColor={"#E8E6DE"} />
    </Link>
>>>>>>> d8224029669e6d35d790031f827ec1f6d5489420
  )
}

export default ContactUsButton