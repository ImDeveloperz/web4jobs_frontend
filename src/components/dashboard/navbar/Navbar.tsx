'use client'
import { useAuth } from '@/hooks/auth'
import React, { ReactNode, use, useEffect } from 'react'


const Navbar = () => {
  const { user, logout } = useAuth({ middleware: 'auth' });
  const onLogout = async () => {
    await logout()
  }
  return (
    <div className='bg-secondary-color rounded-b-xl p-6 w-full '>
      Navbar {user?.email}
      <button className='' onClick={() => {
        onLogout()
      }}>
        Logout
      </button>
    </div>
  )
}

export default Navbar