"use client"
import React from 'react'
import NavbarAdmin from '../components/navbar/NavbarAdmin'

const AdminLayout = ({children}) => {
  return (
    <div
    style={{ backgroundImage: `url(/carbon_background.png)`, backgroundPosition: 'center' }}
    className='z-[1000] w-full absolute top-0 bottom-0 overflow-y-hidden min-h-screen'
    >
      <NavbarAdmin/>
      {children}</div>
  )
}

export default AdminLayout