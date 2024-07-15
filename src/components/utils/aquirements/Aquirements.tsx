import Image from 'next/image';
import React from 'react'



interface AquirementsProgramProps {
    title: string;
    subTitle: string;
    list: string[];
    imageUrl: string;
}
const Aquirements = ({ title, subTitle, list, imageUrl }: AquirementsProgramProps) => {
    return (
        <div className='flex w-full pt-8 '>
            <div className='flex flex-col gap-10 lg:w-[58%] w-full  '>
                <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <h3 className='font-normal text-xs md:text-base '>{subTitle}</h3>
                </div>
                <div className='flex border rounded-lg px-14 py-5 flex-col gap-0.5'>
                    {list.map((item, index) => (
                        <li key={index} className='text-base list-outside list-disc font-normal'>{item}</li>
                    ))}
                </div>
            </div>
            <div className=' lg:w-[42%] items-end justify-end hidden lg:flex'>
                <Image src={imageUrl} alt={title} width={464} height={464} />
            </div>
        </div>
    )
}

export default Aquirements