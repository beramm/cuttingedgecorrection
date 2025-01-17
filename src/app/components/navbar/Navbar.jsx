"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ContactUsButton from '../button/ContactUsButton'
import NavbarLinks from './NavbarLinks'
import { CloseIcon, HamburgerIcon } from '../icon'

const Navbar = () => {
  return (
    <header className="w-full relative z-[999]">
      <nav className="h-28 w-full max-w-screen-xl mx-auto">
        <div className="w-full h-full px-8 md:px-4 xl:px-0 flex items-center justify-between">
          <Image src={"/cec_logo.png"} width={80} height={80} alt="CEC" />
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