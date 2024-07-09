'use client'
import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidbar from '@/components/dashboard/sidbar/Sidbar'
import ProtectedRoute from '@/components/protectedComponent/ProtectedRoute'
import { useAuth } from '@/hooks/auth'
import React from 'react'

const Page = () => {
  let isAuth: boolean = false;
  const { user, isLoading } = useAuth({ middleware: 'auth' })

  console.log("user : ", user)
  if (user) {
    isAuth = true
  }
  console.log('isAuth', isAuth)
  if (isLoading) return <div>Loading...</div>
  return (
    <ProtectedRoute isAuth={isAuth}  >
      <div className="flex text-primary-color xl:gap-12 lg:gap-10 md:gap-6 gap-4 bg-primary-color h-screen">
        <Sidbar />
        <div className="flex xl:gap-12 lg:gap-10 md:gap-6 gap-4 h-screen w-full flex-col">
          <Navbar />
          <div className='w-full h-full p-6 bg-secondary-color rounded-xl'>
            myorders
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Page