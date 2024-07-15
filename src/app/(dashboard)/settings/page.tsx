'use client'
import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidbar from '@/components/dashboard/sidbar/Sidbar'
import Loading from '@/components/loading/Loading'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const Page = () => {
  const { user, isLoading,logout } = useAuth({ middleware: 'auth' })
  if (isLoading || !user) return <Loading />
  return (
      <div className="flex text-primary-color xl:gap-12 lg:gap-10 md:gap-6 gap-4 bg-primary-color h-screen" >
        <Sidbar />
        <div className="flex xl:gap-12 lg:gap-10 md:gap-6 gap-4 h-screen w-full flex-col">
          <Navbar logout={logout} user={user} />
          <div className='w-full h-full p-6 bg-secondary-color rounded-xl'>
            Settings
          </div>
        </div>
      </div>
  )
}

export default Page