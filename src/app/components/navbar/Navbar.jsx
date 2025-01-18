"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ContactUsButton from '../button/ContactUsButton'
import NavbarLinks from './NavbarLinks'
import { CloseIcon, HamburgerIcon } from '../icon'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full absolute z-[999]">
      <nav className="h-28 w-full max-w-screen-xl mx-auto">
        <div className="w-full h-full px-8 md:px-4 xl:px-0 flex items-center justify-between">
          <Link href={"/"} className="w-32">
            <Image src={"/cec_logo.png"} width={80} height={80} alt="CEC" />
          </Link>
          <div className="hidden md:block">
            <NavbarLinks />
          </div>
          <div className="hidden md:block">
            <ContactUsButton />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar