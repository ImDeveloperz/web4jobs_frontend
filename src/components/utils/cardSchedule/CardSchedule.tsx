import Link from 'next/link';
import React from 'react'

interface listScheduleProps {
  subTitle: string;
  list: string[];
}
interface CardScheduleProps {
  title: string;
  title2: string;
  color: string;
  list: listScheduleProps[];
  bg : string;
  textColorButton : string;
  hover: string;
}


const CardSchedule = ({ title, title2, color, list,bg,textColorButton,hover }: CardScheduleProps) => {
  return (
    <div className='border rounded-lg flex justify-between  flex-col gap-2 p-8'>
      <div>
        <div className='flex font-bold justify-between items-center'>
          <h3 className='md:text-xl text-base'>{title}</h3>
          <h3 className={` ${color} md:text-base text-[10px] `}>{title2}</h3>
        </div>
        <div>
          <div className='flex flex-col gap-10'>
            {list.map((item, index) => (
              <div key={index} className='flex flex-col gap-5 '>
                <h3 className='text-sm'>{item.subTitle}</h3>
                <ul className="list-image-[url('/checkMark.png')] flex gap-5 flex-col  list-inside">
                  {item.list.map((listItem, index) => (
                    <li key={index} className='text-base font-bold'>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link href="/signup">
        <button className={`${bg+' '+textColorButton} ${hover === "hover:bg-hover-primary" ? hover : "hover:bg-hover-secondary"} w-full text-center font-bold mt-4 py-3.5 rounded-lg `} >Go For It</button>
      </Link>
    </div>
  )
}

export default CardSchedule