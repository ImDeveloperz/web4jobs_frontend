import InsertEmail from '@/components/auth/1-forgotPassword/InsertEmail'
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import BackLink from '@/components/utils/backLink/BackLink'
import React from 'react'

const page = () => {
  
  return (
    <div className='h-full   flex w-full flex-col'>
      <NavbarAuth />
      <BackLink />
      <InsertEmail />
    </div>
  )
}

export default page