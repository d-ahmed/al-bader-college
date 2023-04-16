import React from 'react'
import { Outlet } from 'react-router-dom'
import Announcement from './Announcement'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Outlet />
    </>
  )
}

export default Layout
