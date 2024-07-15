'use client'
import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidbar from '@/components/dashboard/sidbar/Sidbar'
import Courses from '@/components/dashboard/utils/courses/Courses'
import HeaderCourse from '@/components/dashboard/utils/headerCourses/HeaderCourse'
import Loading from '@/components/loading/Loading'
import { useAuth } from '@/hooks/auth'
import { isOpenMenuAtom, isOpenProfileAtom } from '@/providers/atoms'
import { useAtom, useAtomValue } from 'jotai'
import React from 'react'

const Page = () => {
  const { user, isLoading,logout } = useAuth({ middleware: 'auth' })
  if (isLoading || !user) return <Loading />
  return (
      <div className="flex text-primary-color xl:gap-12 md:pr-0 pr-1 lg:gap-10 md:gap-6 gap-4 bg-primary-color h-screen" >
        <Sidbar />
        <div className="flex gap-2  w-full flex-col">
          <Navbar logout={logout} user={user} />
          <div className='w-full h-full md:px-6   py-6  overflow-y-auto rounded-xl' >
            <div>
              <HeaderCourse/>
            </div>
            <div>
              <Courses/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Page