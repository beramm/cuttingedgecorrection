import React from 'react'
import { ArrowUpCircleSolid } from '../icon'
import Link from 'next/link'

const ViewPricesButton = () => {
  return (
    <Link href={"https://book.squareup.com/appointments/iq47nvq85sr04e/location/L9TNDRGG0S0AS/services"} className="w-76 text-l cursor-pointer hover:border-highlight duration-300 flex items-center justify-center gap-x-2 border-2 border-accent rounded-full p-1 pl-4">
      <p>VIEW PRICES AND BOOK</p>
      <ArrowUpCircleSolid size={24} hexColor={"#E8E6DE"} />
    </Link>
  )
};


export default ViewPricesButton