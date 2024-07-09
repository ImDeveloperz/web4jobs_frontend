import { Text } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { screenWidth } from '../navbar/Navbar'

const Prep = () => {
  return (
    <div className={`${screenWidth} text-primary-color w-full lg:py-20 flex flex-col py-6 g `}>
      <div className='flex flex-col '>
        <h1 className='font-bold tracking-wider leading-9 md:text-[32px] text-balance text-2xl '>
          {Text.pages.Acceuil.Prep.title}
        </h1>
        <h3 className="font-medium tracking-wider leading-4 md:text-[16px] text-xs">
          {Text.pages.Acceuil.Prep.subTitle}, 
        </h3>
      </div>
      <div>
        {Text.pages.Acceuil.Prep.list.map((item, index) => (
          <div key={index} className={`flex  ${item.reversed ? "md:flex-row-reverse" : "md:flex-row"} flex-col-reverse w-full md:gap-0 gap-9`}>
            <div className='lg:w-[50%]  w-full flex-col text-primary-color flex md:gap-8 gap-5 justify-center ' >
              <h1 className='text-secondary-color font-bold text-2xl' >
                {item.title}
              </h1>
              <p className='text-base font-normal' >
                {item.discription}
              </p>
            </div>
            <div className='w-[50%]  '>
            <div className= {`lg:w-full lg:h-[464px] hidden relative lg:flex ${item.isLayoutCentered && "items-center  justify-center"}`} >
              <Image src={item.image} 
                alt={item.title} layout="intrinsic" width={464} height={464} />
            </div>
            <div className= {`lg:w-full lg:h-[464px] lg:hidden hidden relative items-center  md:flex ${item.isLayoutCentered && " justify-center"}`} >
              <Image src={item.image} 
                alt={item.title} layout="intrinsic" width={289} height={289} />
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Prep