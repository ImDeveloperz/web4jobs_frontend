import { Text } from '@/constant'
import React from 'react'
import FormContact from '../utils/formContact/FormContact'
import { screenWidth } from '../navbar/Navbar'

const Contact = () => {
    return (
        <div className={`${screenWidth} text-primary-color lg:py-20 flex flex-col py-10 gap-10 `}>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold tracking-wider leading-9 md:text-[32px] text-balance text-2xl '>
                    {Text.pages.Acceuil.Programs.title}
                </h1>
                <h3 className='font-medium tracking-wider leading-4 md:text-[16px] text-xs '>
                    {Text.pages.Acceuil.Programs.subTitle}
                </h3>
            </div>
            {/* formulaire */}
            <div>
               <div>
                 <FormContact />
               </div>
        </div>
  </div >
  )
}

export default Contact