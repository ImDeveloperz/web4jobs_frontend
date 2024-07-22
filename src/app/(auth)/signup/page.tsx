"use client"
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import SignUp from '@/components/auth/signup/SignUp'
import Loading from '@/components/loading/Loading'
import { screenWidth } from '@/components/navbar/Navbar'
import BackLink from '@/components/utils/backLink/BackLink'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const Page = () => {
  const { isLoading,isLoading2 } = useAuth({ middleware: 'guest' })
  if(isLoading || isLoading2) return <Loading/>
  return (
    <div className='bg-secondary-color'>
      <div >
        <NavbarAuth />
        <SignUp />
      </div>
    </div>
  )
}

export default Page