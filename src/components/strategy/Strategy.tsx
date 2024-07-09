import { Text } from '@/constant'
import React from 'react'
import CardStrategy from '../utils/cardStrategy/CardStrategy'
import { screenWidth } from '../navbar/Navbar'

const Strategy = () => {
  return (
    <div className={`${screenWidth} text-primary-color lg:py-24 flex flex-col py-14 gap-16 `}>
    <div className='flex flex-col gap-2'>
        <h1 className='font-bold tracking-wider leading-9 md:text-[32px] text-balance text-2xl '>
            {Text.pages.Acceuil.Strategy.title}
        </h1>
        <h3 className='font-medium tracking-wider leading-4 md:text-[16px] text-xs '>
            {Text.pages.Acceuil.Strategy.subTitle}
        </h3>
    </div>
    <div>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
            {Text.pages.Acceuil.Strategy.cards.map((item, index,) => (
               <CardStrategy key={index} title={item.title} description={item.description} color={item.color} />
            ))}
        </div>
    </div>
</div>
  )
}

export default Strategy