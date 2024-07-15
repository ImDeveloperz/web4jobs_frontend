"use client"

import Loading from '@/components/loading/Loading'
import Navbar from '@/components/navbar/Navbar'
import WhoAreYouDetails from '@/components/whoAreYouDetails/WhoAreYouDetails'
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const page = () => {
  const { user, isLoading, logout } = useAuth({ middleware: 'auth' })
  if (isLoading || !user) return <Loading />
  return (
    <div >
      <Navbar user={user} logout={logout} />
      <WhoAreYouDetails item={Text.WhoAreYou.Student} />
    </div>
  )
}

export default page