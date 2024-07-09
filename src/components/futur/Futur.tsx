import { Text } from '@/constant'
import Image from 'next/image'
import React from 'react'
import { screenWidth } from '../navbar/Navbar'


const Futur = () => {
    return (
        <div className={`${screenWidth} flex flex-col  lg:flex-row `}>
            <div className='tracking-wider text-white lg:py-36 md:py-28 py-20 lg:w-[50%] w-full flex flex-col md:gap-8 gap-4 '>
                <h1 className='font-bold text-[32px]  lg:w-full md:w-3/4 w-full '>
                    {Text.pages.Acceuil.Futur.title} <span className='md:text-[46px] text-[32px] text-secondary-color'>{Text.pages.Acceuil.Futur.title2}</span>
                </h1>
                <p className='text-base ' >
                    {Text.pages.Acceuil.Futur.discription}
                </p>
            </div>
            <div className='lg:flex  items-center justify-center hidden lg:w-[50%] '>
                <Image src="/futur.svg" alt='futur' width={460} height={460} />
            </div>
        </div>
    )
}

export default Futur