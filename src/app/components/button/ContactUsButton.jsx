import React from 'react'
import { ArrowUpCircleSolid } from '../icon'

const ContactUsButton = () => {
  return (
    <div className="cursor-pointer hover:border-highlight duration-300 flex items-center justify-center gap-x-2 border-2 border-accent rounded-full p-1 pl-2">
      <p>Contact Us</p>
      <ArrowUpCircleSolid size={24} hexColor={"#E8E6DE"} />
    </div>
  )
}

export default ContactUsButton