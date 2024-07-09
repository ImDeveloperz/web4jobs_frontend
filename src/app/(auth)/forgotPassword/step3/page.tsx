import NewPassword from '@/components/auth/3-forgotPassword/NewPassword'
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import BackLink from '@/components/utils/backLink/BackLink'
import React from 'react'

const page = () => {
  return (
    <div className='h-full flex w-full flex-col'>
      <NavbarAuth />
      <BackLink />
      <NewPassword />
    </div>
  )
}

export default page