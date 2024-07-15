"use client"
import { isOpenProfileAtom } from '@/providers/atoms';
import { useAtom, useAtomValue } from 'jotai';
import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
const Notification = () => {

  const [isOpenNotification, setIsOpenNotification] = useState(false);

const openProfile = useRef<HTMLDivElement>(null);

useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (openProfile.current && !openProfile.current.contains(event.target as Node)) {
            setIsOpenNotification(false);
            console.log('click inside')
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, [openProfile]);


  return (
    <div ref={openProfile} className='relative' onClick={() => {
        setIsOpenNotification(isOpenNotification => !isOpenNotification)
    }}>
      <div  className="flex items-center w-12 h-12 justify-center" >
        <IoMdNotificationsOutline size={30} />
      </div>
      {isOpenNotification && (
        <div
        >
          <div className="absolute min-w-72 text-black bg-white rounded-lg shadow-md w-48 top-14 right-0">
            <div className="p-2 w-full">
              <div className="flex items-center w-full">
                <div className="ml-2 flex gap-2 flex-col items-center w-full justify-center  text-xs">
                <div className="triangle absolute  w-full -top-2 right-0"></div>
                <p>No notifications for this moment </p>   
                </div>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Notification