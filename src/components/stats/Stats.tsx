"use client";
import React, { useEffect, useRef } from 'react'
import { Text } from '@/constant'
import CardStat from '../utils/cardStat/CardStat'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { screenWidth } from '../navbar/Navbar';


const Stats = () => {
    const ref = useRef<HTMLDivElement>(null);
    {/*useEffect(() => {
        const el = ref.current;
        gsap.from(el, {
            scale: 0, 
            ease: 'none',
            delay: 5,
          });
      
          gsap.fromTo(el, {
            scale: 0
          }, {
            duration: 0.5, 
            scale: 1,
            scrollTrigger: {
              trigger: el,
              start: 'top center+=100',
              toggleActions: 'play none none reverse'
            }
          });
             
    }, []);*/}
  return (
    <div ref={ref} className={`${screenWidth}  text-primary-color lg:py-20 flex flex-col py-10 gap-10 `}>
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold tracking-wider leading-9 md:text-[32px] text-balance text-2xl '>
                {Text.pages.Acceuil.Stats.title}
            </h1>
            <h3 className='font-medium tracking-wider leading-4 md:text-[16px] text-xs '>
                {Text.pages.Acceuil.Stats.subTitle}
            </h3>
        </div>
        <div>
            <div className='grid lg:grid-cols-3 grid-cols-1 tracking-wider gap-6'>
                {Text.pages.Acceuil.Stats.cards.map((item, index,) => (
                   <CardStat  key={index} title={item.title} description={item.description} color={item.color} />
                ))}
            </div>
        </div>
    </div>
  )
}
export default Stats