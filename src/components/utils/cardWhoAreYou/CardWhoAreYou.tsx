import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


interface CardWhoAreYouProps {
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
    link : string;
}

const CardWhoAreYou = ({ imageUrl, title, description, buttonText,link }: CardWhoAreYouProps) => {
    return (
        <Link href={link} className='flex transform transition duration-500 cursor-pointer 
        hover:scale-105 shadow-lg flex-col justify-between gap-2 border rounded-lg p-5' >
            <div className=' flex items-center ' >
                <Image alt={title} className='rounded-lg ' src={imageUrl} width={150} height={200} />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-lg  tracking-wider'>
                    {title}
                </h1>
                <p className='w-full text-sm '>
                    {description}
                </p>
            </div>
            <div>
                <button className='py-3 w-full border-none flex items-center justify-center border rounded-lg bg-action-secondary text-black font-bold '>
                    {buttonText}
                </button>
            </div>
        </Link>
    )
}

export default CardWhoAreYou