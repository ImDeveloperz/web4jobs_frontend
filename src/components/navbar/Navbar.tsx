"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Text } from '@/constant'
import { useAtom } from 'jotai';
import { isOpenMenuAtom } from '@/providers/atoms';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import Profile from '../dashboard/utils/profile/Profile';
import MobileNavigation from './MobileNavigation';
export const buttonCssPrimary = "bg-action-primary px-6 focus:bg-focus-primary rounded-md font-bold text-[14px] hover:bg-hover-primary py-3"
export const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6 "

const Navbar = ({ user, logout }: { user: any, logout: any }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);  

    return (
        <div className={`py-10 mx-auto flex items-center justify-between w-full text-primary-color ${screenWidth} `} >
            <div className={`md:flex hidden w-full justify-between `}>
                <div className='lg:hidden'>
                    <Image src='/logo.svg' alt='logo' width={166} height={61} />
                </div>
                <div className='lg:flex hidden'>
                    <Image src='/logo.svg'  alt='logo' width={150} height={200} />
                </div>
                <div className='flex gap-16  justify-between items-center'>
                    <div>
                        <ul className='flex font-normal gap-7  items-center '>
                            {Text.Navbar.listMenu.map((item, index) => (
                                <li className='cursor-pointer   hover:font-bold' key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    {
                        user ? (
                            <Profile user={user} logout={logout} />
                        ) : (<Link href="/signup">
                            <button className={buttonCssPrimary}>{Text.Navbar.button}</button>
                        </Link>)
                    }
                </div>
            </div>
            <div className={`items-center md:hidden flex w-full  justify-between `}>
                <div>
                    <Image src='/logo.svg' layout="intrinsic" alt='logo' width={144} height={41} />
                </div>
                <section  className="MOBILE-MENU flex lg:hidden">
                    <MobileNavigation/>
                </section>
            </div>
            <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;

        top: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center
      }
    `}</style>
        </div>
    )
}

export default Navbar