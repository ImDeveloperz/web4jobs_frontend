import { Text } from '@/constant'
import Image from 'next/image'
import React from 'react'
import CardProgram from '../utils/cardProgram/CardProgram'
import { screenWidth } from '../navbar/Navbar'

const Programs = () => {
  return (
    <div className={`${screenWidth} text-primary-color w-full lg:py-20 flex flex-col py-10 md:gap-10 gap-6 `}>
      <div className='flex flex-col gap-2'>
        <h1 className="font-bold tracking-wider leading-9 md:text-[32px]  text-[24px]">
          {Text.pages.Acceuil.Programs.title}
        </h1>
        <h3 className='font-medium tracking-wider leading-4 md:text-[16px] text-xs'>
          {Text.pages.Acceuil.Programs.subTitle},<span className='text-secondary-color pl-1 uppercase  font-bold'>{Text.pages.Acceuil.Programs.subTitle1}</span>,<span className='text-tertiary-color uppercase pl-1 font-bold'>{Text.pages.Acceuil.Programs.subTitle2}</span> and the <span className='text-secondary-color font-bold'>{Text.pages.Acceuil.Programs.subTitle3}</span>!
        </h3>
      </div>
     
      <div className='grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3'>
        {Text.pages.Acceuil.Programs.cards.map((item, index) => (
          <CardProgram key={index}  buttonText={item.buttonText} link={item.link} imageUrl={item.image} description={item.description} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Programs