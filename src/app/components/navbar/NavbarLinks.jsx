"use client"

import { navbarMenu } from '../../libs/navbar-menu'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavArrowDown } from '../icon'
import ContactUsButton from '../button/ContactUsButton'

const NavbarLinks = ({ handleOpenMobileNav }) => {
  const [openSubmenu, setOpenSubmenu] = useState("")

  return (
  <>
      <ul className="hidden md:flex items-center justify-center gap-x-8">
        {navbarMenu.map((eachMenu, index) => {
          return (
            <li key={index} className="py-4 flex gap-x-1 items-center justify-center cursor-pointer group">
              {eachMenu.name === 'Subscription Plans' ? <Link href={"/subscription-plans"}>{eachMenu.name}</Link> : eachMenu.name}
              {eachMenu.showArrow && <span className="group-hover:transition-transform group-hover:rotate-180 duration-300 group-hover:duration-300">
                <NavArrowDown size={24} hexColor={"#E8E6DE"} />
              </span>}
              {eachMenu.subMenu && 
              // <div className="absolute border border-green-500 w-full max-w-xl top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 hidden group-hover:block transition-all duration-300">
              <div className="absolute w-full max-w-xl top-48 left-1/2 transform -translate-x-1/2 -translate-y-28 z-50 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                <ul className="w-full bg-opacity-90 p-2 bg-black grid grid-cols-2 row-auto text-center rounded-xl custom-box-shadow">
                  {eachMenu.submenuList.map((eachSubmenu, index) => (
                    <Link href={eachSubmenu.link} key={index} className="py-4">
                      <p className="hover:text-highlight duration-300">
                        {eachSubmenu.name.toUpperCase()}
                      </p>
                    </Link>
                  ))}
                </ul>
              </div>}
            </li>
          )
        })}
      </ul>

      {/* Mobile */}
      <div className="flex flex-col md:hidden items-center justify-center w-full mt-4 py-4 px-8">
        <ul className="flex flex-col items-start justify-between gap-x-8 w-full">
          {navbarMenu.map((eachMenu, index) => {
            return (
              <li key={index} className="mb-8 w-full">
                <div className="flex items-center justify-between" onClick={() => openSubmenu !== eachMenu.name ? setOpenSubmenu(eachMenu.name) : setOpenSubmenu("")}>
                  {eachMenu.name === 'Subscription Plans' ? <Link href={"/subscription-plans"} onClick={handleOpenMobileNav}>{eachMenu.name}</Link> : eachMenu.name}
                  {eachMenu.showArrow && <span className="">
                    <NavArrowDown size={24} hexColor={"#E8E6DE"} />
                  </span>}
                </div>
                {eachMenu.subMenu && openSubmenu && openSubmenu === eachMenu.name &&
                <div className="mt-2 border-l-2">
                  <ul className="">
                    {eachMenu.submenuList.map((eachSubmenu, index) => (
                      <Link href={eachSubmenu.link} key={index} onClick={() => {handleOpenMobileNav(); setOpenSubmenu("")}}>
                        <p className="py-2 ms-5">
                          {eachSubmenu.name.toUpperCase()}
                        </p>
                      </Link>
                    ))}
                  </ul>
                </div>}
              </li>
            )
          })}
        </ul>
        <div className="w-full flex items-center justify-center mt-4">
          <span className="bg-accent h-0.5 w-full"></span>
          <span className="mx-2">||</span>
          <span className="bg-accent h-0.5 w-full"></span>
        </div>
        <div className="mt-10">
          <ContactUsButton />
        </div>
      </div>
    </>
  )
}

export default NavbarLinks