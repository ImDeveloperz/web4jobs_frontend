import { Text} from '@/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonCssPrimary, screenWidth } from '../navbar/Navbar'
import heroImg from '@/../public/heroImg.svg'

const Hero = () => {
  return (
    <div className={`${screenWidth} flex lg:flex-row flex-col-reverse w-full `}>
      <div className='lg:w-[50%] w-full flex-col lg:py-14 pb-12 md:pt-10 pt-4 text-primary-color flex gap-9 '>
        <div className='flex flex-col gap-3'>
          <h1 className='font-bold text-primary-color md:text-4xl text-2xl lg:w-full md:w-3/4'>
            {Text.pages.Acceuil.Hero.title} <span className='text-tertiary-color'>{Text.pages.Acceuil.Hero.title2}</span>
          </h1>
          <h3 className='font-bold text-secondary-color text-xs md:text-[26px]  '>
            {Text.pages.Acceuil.Hero.subTitle}
          </h3>
        </div>
        <div>
          <ul className='flex flex-col md:text-base font-normal text-xs  lg:gap-2 gap-1'>
            {Text.pages.Acceuil.Hero.listAdvantages.map((item, index) => (
              <li className='ml-3 list-disc' key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <Link href="/signup">
            <button className={buttonCssPrimary}>
              {Text.pages.Acceuil.Hero.button}
            </button>
        </Link>
      </div>
      <div className='lg:w-[50%] hidden lg:flex items-left justify-end  '>
        <Image src={heroImg} alt='hero' layout="intrinsic" className=' rounded-lg' width={680} height={560} />
      </div>
    </div>
  )
}

export default Hero