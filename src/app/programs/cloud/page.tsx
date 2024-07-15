"use client"
import Loading from '@/components/loading/Loading'
import Navbar from '@/components/navbar/Navbar'
import Program from '@/components/program/Program'
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const page = () => {
  const { user, isLoading,logout } = useAuth({ middleware: 'auth' })
  if (isLoading || !user) return <Loading />
  return (
    <div>
        <Navbar user={user} logout={logout} />
        <Program item={Text.Programs.Cloud} />
    </div>
  )
}

export default page