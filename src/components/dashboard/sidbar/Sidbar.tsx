"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const listMenu = [
  {
    title: 'My Courses',
    icon: '/mycourses.svg',
    link: '/mycourses'
  },
  {
    title: 'My Certificats',
    icon: '/mycertification.svg',
    link: '/mycertificats'
  },
  {
    title: 'My Calendar',
    icon: '/calendar.svg',
    link: '/mycalendar'
  },
  {
    title: 'My Training',
    icon: '/forums.svg',
    link: '/myforums'
  },
  {
    title: 'My Orders',
    icon: 'myorders.svg',
    link: '/myorders'
  },
]
const listFooter = [
  {
    title: 'Settings',
    icon: '/settings.svg',
    link: '/settings'
  },
  {
    title: 'Sign Out',
    icon: '/signout.svg',
    link: ''
  },
 
]
const Sidbar = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className='bg-secondary-color overflow-hidden h-screen md:p-6 p-1 lg:pt-10  pt-6 flex text-center items-center flex-col justify-between rounded-r-xl xl:w-[20%] lg:w-[20%]  w-[20%] '>
      <div className='flex items-center justify-center flex-col w-full'>
        <div className='md:flex hidden'>
          <Image src='/leftLogo.svg' width={40} height={40} alt='logo' />
        </div>
        <div className='md:hidden '>
          <Image src='/leftLogo.svg' width={32} height={32} alt='logo' />
        </div>
        <div className='pt-10 w-full flex-col flex gap-4 items-center justify-center'>
          {
            listMenu.map((item, index) => (
              <Link href={item.link} key={index} className={`flex items-center justify-center font-bold cursor-pointer text-sm gap-2 w-full  text-primary-color  rounded-lg  py-4 ${pathname === item.link ? 'bg-action-primary ' : 'bg-[#3A3A3A] '} `}>
                <Image src={item.icon} width={20} height={20} alt='icon' />
                <span className='lg:flex hidden'>{item.title}</span>
              </Link>
            ))
          }
        </div>
      </div>
      <div className='flex flex-col items-center md:pb-2 pb-16 justify-center w-full'>
        <div className='w-full flex items-center gap-2 justify-center flex-col'>
        {
            listFooter.map((item, index) => (
              <Link href={item.link} key={index} className={`flex items-center justify-center font-bold cursor-pointer text-sm gap-2 w-full  text-primary-color  rounded-lg  py-4 ${pathname === item.link ? 'bg-action-primary ' : 'bg-[#3A3A3A] '} `}>
                <Image src={item.icon} width={20} height={20} alt='icon' />
                <span className='lg:flex hidden'>{item.title}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Sidbar