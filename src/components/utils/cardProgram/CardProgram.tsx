import React from 'react'
import Image from 'next/image'
import Link from 'next/link';


interface CardProgramProps {
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
    link : string;
}

const CardProgram = ({ imageUrl, title, description, buttonText,link }: CardProgramProps) => {
    return (
        <Link href={link} className='flex transform transition duration-500 cursor-pointer 
        hover:scale-105 shadow-lg flex-col justify-between gap-2 border rounded-lg p-7' >
            <div className=' flex w-full items-center ' >
                <Image alt={title} className='rounded-lg ' src={imageUrl} width={200} height={200} />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-2xl tracking-wider'>
                    {title}
                </h1>
                <p className='w-full '>
                    {description}
                </p>
            </div>
            <div>
                <button className='py-3 w-full border-none flex items-center justify-center border rounded-lg bg-action-primary font-bold '>
                    {buttonText}
                </button>
            </div>
        </Link>
    )
}

export default CardProgram