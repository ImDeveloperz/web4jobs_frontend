import React from 'react'


interface CardStrategyProps {
    title: string;
    description: string;
    color: string;
}

const CardStrategy = ({title,description,color} : CardStrategyProps) => {
  return (
    <div className='border flex flex-col gap-4 rounded-lg px-8 py-6'>
        <h1 className={`${color} leading-8 text-2xl font-bold`}>
            {title}
        </h1>
        <p className='text-base leading-8 font-normal text-primary-color'>
            {description}
        </p>
    </div>
  )
}

export default CardStrategy