import CardProgram from '@/components/utils/cardProgram/CardProgram'
import { Text } from '@/constant'
import React from 'react'

const Courses = () => {
  return (
    <div className='flex flex-col gap-4 pt-4'>
        <h1 className='text-2xl font-bold'>
            My Courses
        </h1>
        <div className='grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3'>
        {Text.pages.Acceuil.Programs.cards.map((item, index) => (
          <CardProgram key={index}  buttonText={item.buttonText} link={item.link} imageUrl={item.image} description={item.description} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default Courses