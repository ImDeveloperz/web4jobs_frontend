"use client"
import { isOpenProfileAtom } from '@/providers/atoms';
import { useAtom, useAtomValue } from 'jotai';
import React, { useEffect, useRef, useState } from 'react'
import { FaUser } from "react-icons/fa";
const Profile = ({ user, logout }: { user: any, logout: any }) => {

  const [isOpenProfile, setIsOpenProfile] = useState(false);

  const openProfile = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openProfile.current && !openProfile.current.contains(event.target as Node)) {
        setIsOpenProfile(false);
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
      setIsOpenProfile(isOpenProfile => !isOpenProfile)
    }}>
      <div  className="flex items-center border rounded-full w-12 h-12 justify-center" >
        <FaUser size={20} />
      </div>
      {isOpenProfile && (
        <div
        onClick={() => {
          setIsOpenProfile(true)
        }}
        >
          <div className="absolute min-w-72 text-black bg-white rounded-lg shadow-md w-48 top-14 right-0">
            <div className="p-2 w-full">
              <div className="flex items-center w-full">
                <div className="ml-2 flex gap-2 flex-col items-center w-full justify-center  text-xs">
                <div className="triangle absolute  w-full -top-2 right-0"></div>
                <p>Welcome to your account </p>
                  <div className='flex items-center justify-center w-full gap-1'>
                  
                  <p className='uppercase'>{user?.first_name}</p>
                  <p className='uppercase'>{user?.last_name}</p>
                  </div>
                  <p className='text-center w-full'>{user?.email}</p>
                </div>
              </div>
            </div>
            <div className="border-t flex justify-center items-center">
              <button onClick={logout} className="w-full text-left p-2 flex justify-center items-center ">Logout</button>
            </div>
            <div className="border-t flex justify-center items-center">
              <button className="w-full text-left p-2 flex justify-center items-center ">Settings</button>
            </div>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default Profile