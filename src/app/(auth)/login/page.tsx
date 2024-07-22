"use client"
import Login from '@/components/auth/login/Login'
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import Loading from '@/components/loading/Loading'
import BackLink from '@/components/utils/backLink/BackLink'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const Page = () => {
  const { isLoading,isLoading2 } = useAuth({ middleware: 'guest' })
  if(isLoading || isLoading2) return <Loading/>
  return (
    <div>
      <NavbarAuth />
      <Login />
    </div>
  )
}

export default Page