import Login from '@/components/auth/login/Login'
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import BackLink from '@/components/utils/backLink/BackLink'
import React from 'react'

const page = () => {
  return (
    <div>
      <NavbarAuth />
      <BackLink />
      <Login />
    </div>
  )
}

export default page