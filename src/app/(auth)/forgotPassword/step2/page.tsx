import InsertCode from '@/components/auth/2-forgotPassword/InsertCode'
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import BackLink from '@/components/utils/backLink/BackLink'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarAuth />
      <BackLink />
      <div className='h-full items-center justify-center flex w-full flex-col'>
        <InsertCode />
      </div>
    </div>
  )
}

export default page