import React from 'react'
import CardSchedule from '../cardSchedule/CardSchedule';


interface listScheduleProps {
  subTitle: string;
  list: string[];
}
interface CardScheduleProps {
  title: string;
  title2: string;
  color: string;
  list: listScheduleProps[];
  bg: string;
  hover: string;
  colorButtonText: string;
}

interface ScheduleProps {
  title: string;
  subTitle: string;
  subTitle2: string;
  link : string;
  cards: CardScheduleProps[];
}

const Schedule = ({ title, subTitle, subTitle2,link ,cards }: ScheduleProps) => {
  return (
    <div className={` text-primary-color pb-6 flex flex-col  gap-10 `}>
      <div className='flex flex-col gap-1'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='font-normal text-xs md:text-base '>{subTitle} <a href={link} className='text-secondary-color hover:underline cursor-pointer '>{subTitle2}</a></h3>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {cards.map((card, index) => (
          <CardSchedule key={index} title={card.title} title2={card.title2} color={card.color} list={card.list} bg={card.bg} hover={card.hover} textColorButton={card.colorButtonText} />
        ))}
      </div>
    </div>
  )
}

export default Schedule