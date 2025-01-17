import { navbarMenu } from '@/app/libs/navbar-menu'
import Link from 'next/link'
import React from 'react'
import { NavArrowDown } from '../icon'

const NavbarLinks = ({ open }) => {
  return (
    <>
      <ul className="flex items-center justify-center gap-x-8">
        {navbarMenu.map((eachMenu, index) => {
          return (
            <li key={index} className="py-4 flex gap-x-1 items-center justify-center cursor-pointer group">
              {eachMenu.name}
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
    </>
  )
}

export default NavbarLinks