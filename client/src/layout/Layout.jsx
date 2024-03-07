import React from 'react'
import { useLocation } from 'react-router-dom'
import UserRouter from '../Containers/routes/UserRouter'

function Layout() {
    const location = useLocation()
    const isAdmin = location.pathname.startsWith("/admin")
  return (
   <>
   {isAdmin?<h1>admin</h1>:<UserRouter/>}
   </>
  )
}

export default Layout