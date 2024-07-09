"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Text } from '@/constant'
import { useAtom } from 'jotai';
import { isOpenMenuAtom } from '@/providers/atoms';
import Link from 'next/link';
export const buttonCssPrimary = "bg-action-primary px-6 focus:bg-focus-primary rounded-md font-bold text-[14px] hover:bg-hover-primary py-3"
export const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6 "

const Navbar = () => {
    
    const [isOpenMenu, setIsOpenMenu] = useAtom(isOpenMenuAtom);
    return (
        <div className={`py-10 mx-auto flex items-center justify-between w-full text-primary-color ${screenWidth} `} >
            <div className={`md:flex hidden w-full justify-between `}>
                <div className='lg:hidden'>
                    <Image src='/logo.svg' className=' ' layout="intrinsic" alt='logo' width={166} height={61} />
                </div>
                <div className='lg:flex hidden'>
                    <Image src='/logo.svg' className=' ' alt='logo' width={150} height={200} />
                </div>
                <div className='flex gap-16  justify-between items-center'>
                    <div>
                        <ul className='flex font-normal gap-7  items-center '>
                            {Text.Navbar.listMenu.map((item, index) => (
                                <li className='cursor-pointer   hover:font-bold' key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/signup">
                        <button className={buttonCssPrimary}>{Text.Navbar.button}</button>
                    </Link>
                </div>
            </div>
            <div className={`items-center md:hidden flex w-full  justify-between `}>
                <div>
                    <Image src='/logo.svg' layout="intrinsic" alt='logo' width={144} height={41} />
                </div>
                <section className="MOBILE-MENU flex lah rh nwi n9dha knt angolk chnu ndiro fiha mzl mkmlna ms n7yduha nite dbg:hidden">
                    <div
                        className="HAMBURGER-ICON space-y-2 cursor-pointer p-1 rounded-sm"
                        onClick={() => setIsOpenMenu((prev) => !prev)}
                    >
                        <span className="block h-[4px] w-8 rounded-md  bg-white"></span>
                        <span className="block h-[4px] w-8 rounded-md  bg-white"></span>
                        <span className="block h-[4px] w-8 rounded-md  bg-white"></span>
                    </div>

                    <div className={` ${isOpenMenu ? "showMenuNav" : "hideMenuNav"}`}>
                        <div className='bg-primary-color w-full h-screen flex relative items-center justify-center'>
                            <div className=''>
                                <div
                                    className={`h-screen px-8 absolute top-0 mx-auto p-auto flex justify-between w-full pt-8 cursor-pointer`}
                                    onClick={() => setIsOpenMenu(false)}
                                >
                                    <div>
                                        <Image src='/logo.svg' layout="intrinsic" alt='logo' width={144} height={41} />
                                    </div>
                                    <svg
                                        className="h-10 w-10  "
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                            </div>
                            <ul className="flex font-bold w-full flex-col items-center text-xs  gap-2.5 min-h-[250px]">
                                {Text.Navbar.listMenu.map((item, index) => (
                                    <li className='cursor-pointer border-secondary-color flex border items-center justify-center w-[200px] rounded-md py-3 hover:font-bold' key={index}>{item}</li>
                                ))}
                                <Link href="/signup">
                                    <button className='bg-action-primary  rounded-md font-bold flex  items-center justify-center w-[200px]  py-3'>{Text.Navbar.button}</button>
                                </Link>
                            </ul>

                        </div>
                    </div>
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
        background: white;
        z-index: 10;
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