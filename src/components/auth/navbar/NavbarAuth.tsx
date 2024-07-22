"use client"
import { Text } from '@/constant';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const NavbarAuth = () => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [selectedLang, setSelectedLang] = React.useState('English (UK)');const [lastScrollY, setLastScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                // Scroll down
                setIsHidden(true);
            } else {
                // Scroll up
                setIsHidden(false);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [lastScrollY]);

    return (
        <nav className={`py-4  backdrop-blur-sm top-0  mx-auto fixed transition-transform duration-300 z-10  w-full text-primary-color  ${isHidden ? '-translate-y-full' : 'translate-y-0'} `}>
                <div className='lg:hidden'>
                    <Image src='/logo.svg'  alt='logo' width={166} height={61} priority/>
                </div>
                <div className='lg:flex hidden'>
                    <Image src='/logo.svg' alt='log:pt-4 md:pt-6 pt-8 go' width={150} height={200} priority />
                </div>
            <div>
                {/*langue
                <div className='relative ' onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                    <div className="flex gap-1 cursor-pointer items-center" onClick={() => setIsDropdownOpen((prev) => !prev)} >
                        <span>{selectedLang}</span>
                        {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
                    </div>
                   {/* <div
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
                */}
            </div>
        </nav>
    )
}

export default NavbarAuth