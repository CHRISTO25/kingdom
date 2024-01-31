import React from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../Containers/pages/userPages/Home/Home'

function Layout() {
    const location = useLocation()
    const isAdmin = location.pathname.startsWith("/admin")
  return (
   <>
   {isAdmin?<h1>admin</h1>:<Home/>}
   </>
  )
}

export default Layout