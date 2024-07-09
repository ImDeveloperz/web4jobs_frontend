"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface args {
    title: string;
    description: string;
    color?: string;
}
const CardStat = ({title,description,color} : args  ) => {
  return (
    <div className='border rounded-lg  px-8 py-6' >
        <h1 className={`${color} leading-[130.94px]   text-8xl font-bold`}>
            {title}
        </h1>
        <p className='text-base font-normal text-primary-color'>
            {description}
        </p>
    </div>
  )
}

export default CardStat