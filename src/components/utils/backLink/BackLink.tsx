"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const BackLink = () => {
    const router = useRouter();
  return (
    <div>
        <button onClick={()=>{router.back()}} className=' border border-primary-color rounded-full p-2 opacity-95'>
            <FaArrowLeft className='text-primary-color' />
        </button>
    </div>
  )
}

export default BackLink