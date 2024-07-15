import Login from '@/components/auth/login/Login'
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import BackLink from '@/components/utils/backLink/BackLink'
import React from 'react'

const Page = () => {
  return (
    <div>
      <NavbarAuth />
      <BackLink />
      <Login />
    </div>
  )
}

export default Page