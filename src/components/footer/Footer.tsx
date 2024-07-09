import { Text } from '@/constant'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
   const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6 "
  return (
    <div className='bg-secondary-color '>
      <div className={`${screenWidth} py-8  mx-auto w-full flex flex-col md:gap-12 gap-8`}>
        <div className='flex md:hidden md:justify-start w-full items-center justify-center flex-col gap-2 '>
          <Image alt="logo" layout="intrinsic" src={Text.Footer.logo3} width={124} height={41} />
        </div>
        <div className='md:grid md:grid-cols-4 flex items-center justify-center flex-col md:text-left text-center gap-5 grid-cols-1 w-full text-primary-color'>
          <div className='lg:flex hidden flex-col gap-2 '>
            <Image alt="logo" layout="intrinsic" src={Text.Footer.logo2} width={166} height={61} />
          </div>
          <div className='md:flex lg:hidden hidden flex-col gap-2 '>
            <Image alt="logo" layout="intrinsic" src={Text.Footer.logo2} width={166} height={61} />
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold md:text-2xl text-lg'>{Text.Footer.title1}</h1>
            <ul className='text-md w-full  flex flex-col gap-5 font-light leading-3 '>
              {Text.Footer.list1.map((item, index) => (
                <li className='md:text-base text-xs cursor-pointer  font-normal underline tracking-wider' key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold md:text-2xl text-lg'>{Text.Footer.title2}</h1>
            <ul className='text-md w-full  flex flex-col gap-5 font-light leading-3 '>
              {Text.Footer.list2.map((item, index) => (
                <li className='md:text-base text-xs cursor-pointer font-normal underline tracking-wider' key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-4' >
            <h1 className='font-bold md:text-2xl text-lg'>{Text.Footer.title3}</h1>
            <ul className='text-md w-full flex flex-col gap-5 font-light leading-3 '>
              {Text.Footer.list3.map((item, index) => (
                <div key={index} className='flex gap-2'>
                  <Image src={item.icon} className='lg:flex hidden' layout="intrinsic" alt={item.link} height={20} width={22} />
                  <Image src={item.icon} className='lg:hidden md:flex hidden ' layout="intrinsic" alt={item.link} height={14} width={18} />
                  <Image src={item.icon} className='md:hidden  flex' layout="intrinsic" alt={item.link} height={12} width={12} />
                  <li className='md:text-base  text-xs cursor-pointer decoration-solid underline font-normal tracking-wider' key={index}>{item.link}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex gap-2 font-bold md:text-base text-xs  text-primary-color items-center justify-center' >
          {Text.Footer.iconCopyRight}
          <p>
            {Text.Footer.copyRight}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer