import Image from 'next/image'
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
    title: 'My Forums',
    icon: '/forums.svg',
    link: '/myforums'
  },
  {
    title: 'My Settings',
    icon: '/icons/mysettings.svg',
    link: '/mysettings'
  },
]
const Sidbar = () => {
  return (
    <div className='bg-secondary-color p-6 pt-10 flex text-center items-center flex-col rounded-r-xl xl:w-[20%] lg:w-[20%] md:w-[30%] w-[15%] '>
      <div>
        <Image src='/logo3.svg' width={150} height={150} alt='logo' />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Sidbar