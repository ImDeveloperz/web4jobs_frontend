import { Text, } from '@/constant'
import React from 'react'
import CardWhoAreYou from '../utils/cardWhoAreYou/CardWhoAreYou'
import { screenWidth } from '../navbar/Navbar'

const WhoAreYou = () => {
  return (
    <div className={`${screenWidth} text-primary-color lg:py-20 flex flex-col py-10 gap-10 `}>
      <div className='flex flex-col gap-2'>
        <h1 className="font-bold tracking-wider leading-9 md:text-[32px]  text-[24px]">
          {Text.pages.Acceuil.About.title}
        </h1>
        <h3 className='font-medium tracking-wider leading-4 md:text-[16px] text-xs'>
          {Text.pages.Acceuil.About.subTitle}
        </h3>
      </div>
      <div className='grid lg:mx-20 md:mx-10  grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3'>
        {Text.pages.Acceuil.About.cards.map((item, index) => (
          <CardWhoAreYou link={item.link} key={index} buttonText={item.buttonText} imageUrl={item.image} description={item.description} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default WhoAreYou