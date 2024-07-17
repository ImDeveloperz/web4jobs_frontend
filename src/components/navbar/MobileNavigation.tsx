"use client";

import { Text } from "@/constant";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp, FaBars, FaTimes } from "react-icons/fa";

const MobileNavigation = ({ }) => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);  

 
    const handleNavToggle = () => setIsOpenMenu(!isOpenMenu);

    useEffect(() => {
        if (isOpenMenu) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [isOpenMenu]);
    return (
        <>
            <div
                onClick={handleNavToggle}
                className="cursor-pointer pr-4 z-50 text-primary-color lg:hidden"
            >
                {isOpenMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <div className={`fixed top-0 left-0  w-full h-screen overflow-y-hidden bg-gradient-to-b bg-secondary-color text-primary-color transition-all duration-500 transform ${isOpenMenu ? "translate-x-0" : "translate-x-full"} lg:hidden z-40`} >
                <ul className="flex font-bold w-full flex-col items-center h-full justify-center text-xs  gap-2.5 min-h-[250px]">
                    {Text.Navbar.listMenu.map((item, index) => (
                        <li className='cursor-pointer border-secondary-color flex border items-center justify-center w-[200px] rounded-md py-3 hover:font-bold' onClick={() => {
                            setIsOpenMenu(false)
                        }} key={index}>{item}</li>
                    ))}
                     <Link href="/signup">
                        <button className='bg-action-primary cursor-pointer  rounded-md font-bold flex  items-center justify-center w-[200px]  py-3'  >{Text.Navbar.button}</button>
                </Link>
                </ul>
               
            </div>
        </>
    );
};

export default MobileNavigation;