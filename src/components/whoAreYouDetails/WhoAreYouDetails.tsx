import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import BackLink from '../utils/backLink/BackLink';

interface WhoAreYouDetailsProps {
  title: string;
  subTitle: string;
  title2: string;
  description1: string;
  title3: string;
  span1: string;
  description2: string;
  title4: string;
  span2: string;
  title5: string;
  description3: string;
  image: string;

}
interface Props {
  item: WhoAreYouDetailsProps;
}


const WhoAreYouDetails = ({ item }: Props) => {
  const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6 "

  return (
    <div className={`${screenWidth + ""} mx-auto  text-primary-color`}>
      <BackLink />
      <div className=' flex py-10'>
        <div className='flex flex-col lg:w-[50%] gap-10'>
          <div className='flex flex-col gap-1'>
            <h1 className="font-bold text-tertiary-color tracking-wider leading-9 md:text-[38px]  text-[24px]">
              {item.title}
            </h1>
            <h3 className='font-medium tracking-wider leading-4 text-xs'>
              {item.subTitle}
            </h3>
          </div>
          <div className='text-base font-normal flex gap-2 flex-col'>
            <h1 className="font-bold text-primary-color tracking-wider leading-9 md:text-2xl  text-[24px]">
              {item.title2}
            </h1>
            <p>{item.description1}</p>
          </div>
          <div className='text-base font-normal flex gap-2 flex-col'>
            <h1 className="font-bold text-primary-color tracking-wider leading-9 md:text-2xl  text-[24px]">
              <span className='text-tertiary-color'>{item.span1} </span> {item.title3}
            </h1>
            <p className=''>{item.description2}</p>
          </div>
          <div className='text-base font-normal flex gap-2 flex-col'>
            <h1 className="font-bold text-primary-color tracking-wider leading-9 md:text-2xl  text-[24px]">
              {item.title4} <span className='text-tertiary-color'>{item.span2}</span> {item.title5}
            </h1>
            <p>{item.description3}</p>
          </div>
        </div>
        <div className='w-[50%] lg:flex  hidden items-end justify-end' >
          <Image src={item.image} alt={item.title} layout="intrinsic" width={464} height={464} />
        </div>
      </div>
    </div>


  )
}

export default WhoAreYouDetails