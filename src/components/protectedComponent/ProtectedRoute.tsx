import { redirect } from 'next/navigation'
import React from 'react'

interface ProtectedRouteProps {
    isAuth: boolean
    children: React.ReactNode
}

const ProtectedRoute = ({isAuth,children} : ProtectedRouteProps ) => {
  return (
    <div>
        {isAuth ? children : redirect('/login')}
    </div>
  )
}

export default ProtectedRoute