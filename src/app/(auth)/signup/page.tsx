import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import SignUp from '@/components/auth/signup/SignUp'
import { screenWidth } from '@/components/navbar/Navbar'
import BackLink from '@/components/utils/backLink/BackLink'
import React from 'react'

const page = () => {
  return (
    <div className='bg-secondary-color'>
      <div className={` ${screenWidth}  mx-auto `}>
        <NavbarAuth />
        <BackLink />
        <SignUp />
      </div>
    </div>
  )
}

export default page