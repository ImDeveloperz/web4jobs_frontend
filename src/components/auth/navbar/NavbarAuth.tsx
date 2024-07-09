"use client"
import { Text } from '@/constant';
import Image from 'next/image'
import React from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const NavbarAuth = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [selectedLang, setSelectedLang] = React.useState('English (UK)');
    return (
        <div className='w-full  md:mb-5 py-6 text-primary-color flex justify-between items-center'>
                <div className='lg:hidden'>
                    <Image src='/logo.svg' className=' ' layout="intrinsic" alt='logo' width={166} height={61} />
                </div>
                <div className='lg:flex hidden'>
                    <Image src='/logo.svg' className=' ' alt='logo' width={150} height={200} />
                </div>
                
            <div>
                {/*langue*/}
                <div className='relative ' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                    <div className="flex gap-1 cursor-pointer items-center" onClick={() => setIsDropdownOpen((prev) => !prev)} >
                        <span>{selectedLang}</span>
                        {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                    <div
                        className={`absolute flex flex-col z-10 top-full left-0 mt-2 w-32 bg-white text-gray-500   shadow-lg rounded-md transition-all duration-300 ${isDropdownOpen
                            ? "opacity-100 max-h-screen"
                            : "opacity-0 max-h-0"
                            } overflow-hidden`}
                    >
                        {Text.Navbar.listLang.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    setSelectedLang(item);
                                    setIsDropdownOpen(false);
                                }}
                                className="p-2 cursor-pointer hover:text-black">
                                {item}
                            </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarAuth