"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import ContactUsButton from '../button/ContactUsButton'
import NavbarLinks from './NavbarLinks'
import { CloseIcon, HamburgerIcon } from '../icon'
import Link from 'next/link'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const handleOpenMobileNav = () => setOpen(!open)

  return (
    <>
      <div className="bg-gradient-to-t from-transparent to-black to-90% opacity-80 w-full h-28 absolute top-0 z-[99]"></div>
      <header className="w-full absolute z-[999]">
        <nav className="h-28 w-full max-w-screen-xl mx-auto">
          <div className="w-full h-full px-8 md:px-4 xl:px-0 flex items-center justify-between">
            <Link href={"/"} className="w-32">
              <Image src={"/cec_logo.png"} width={80} height={80} alt="CEC" unoptimized={true} />
            </Link>
            <div className="hidden md:block">
              <NavbarLinks handleOpenMobileNav={handleOpenMobileNav} />
            </div>
            <div className="hidden md:block">
              <ContactUsButton />
            </div>
            <div className="block md:hidden" onClick={handleOpenMobileNav}>
              <HamburgerIcon size={32} hexColor={"#E8E6DE"} />
            </div>
          </div>

          {/* Mobile Navbar */}
          <div className={`md:hidden bg-primary fixed w-full top-0 overflow-y-auto bottom-0 px-8 duration-300 ${open ? "left-0" : "left-[-100%]"}`}>
            <div className="h-28 flex items-center justify-between">
              <Link href={"/"} className="w-32">
                <Image src={"/cec_logo.png"} width={80} height={80} alt="CEC" unoptimized={true} />
              </Link>
              <div className="block md:hidden relative -right-1" onClick={handleOpenMobileNav}>
                <CloseIcon size={40} hexColor={"#E8E6DE"} />
              </div>
            </div>
            <div>
              <NavbarLinks handleOpenMobileNav={handleOpenMobileNav} />
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar