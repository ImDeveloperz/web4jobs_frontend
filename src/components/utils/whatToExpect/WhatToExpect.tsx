import React from 'react'
import CardStrategy from '../cardStrategy/CardStrategy';


interface cardWhatToExpectProps {
  title: string;
  description: string;
  color: string;
}

interface WhatToExpectProps {
  title: string;
  subTitle: string;
  cards: cardWhatToExpectProps[];
}

const WhatToExpect = ({ title, subTitle, cards }: WhatToExpectProps) => {
  return (
    <div className={` text-primary-color lg:py-24 flex flex-col gap-10 `}>
      <div className='flex flex-col gap-1'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='font-normal text-xs md:text-base '>{subTitle}</h3>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6'>
        {
          cards.map((card, index) => (
            <CardStrategy key={index} color={card.color} description={card.description} title={card.title} />
          ))
        }
      </div>

    </div>
  )
}

export default WhatToExpect