"use client";

import { Text } from "@/constant";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface MenuItem {
    name: string;
    link: string;
}

const MobileNavigation: React.FC = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);  
    const [activeSection, setActiveSection] = useState<string>('');
    const [targetSection, setTargetSection] = useState<string>('');
    const pathname = usePathname();
    const router = useRouter();

    const handleNavToggle = (): void => setIsOpenMenu(!isOpenMenu);

    useEffect(() => {
        if (isOpenMenu) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpenMenu]);

    const trackSections = (): void => {
        const sections = document.querySelectorAll<HTMLElement>('section');
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id") || "";
            }
        });

        setActiveSection(current);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', trackSections);
            return () => {
                window.removeEventListener('scroll', trackSections);
            };
        }
    }, []);

    useEffect(() => {
        if (targetSection) {
            document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
            setTargetSection(''); // Reset after scrolling
        }
    }, [targetSection]);

    return (
        <>
            <div
                onClick={handleNavToggle}
                className="cursor-pointer z-50 text-primary-color lg:hidden"
            >
                {isOpenMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            <div className={`fixed top-0 left-0 w-full h-screen overflow-y-hidden bg-gradient-to-b bg-secondary-color text-primary-color transition-all duration-500 transform ${isOpenMenu ? "translate-x-0" : "translate-x-full"} lg:hidden z-40`} >
                <ul className="flex font-bold w-full flex-col items-center h-full justify-center text-xs gap-2.5 min-h-[250px]">
                    {Text.Navbar.listMenu.map((item: MenuItem, index: number) => (
                        <li
                            key={index}
                            className={`cursor-pointer border-secondary-color flex border items-center justify-center w-[200px] rounded-md py-3 hover:font-bold ${window.location.hash === item.link ? 'bg-action-primary' : pathname === item.link ? 'underline font-bold underline-offset-8' : activeSection === item.link.slice(1) ? 'underline font-bold' : ''}`}
                            onClick={async () => {
                                setIsOpenMenu(false);
                                if (item.name === 'Blogs') {
                                    await router.push(item.link);
                                } else {
                                    if (pathname !== '/') {
                                        await router.push('/' + item.link);
                                        setTargetSection(item.link.slice(1));
                                    } else {
                                        document.getElementById(item.link.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                    <Link href="/signup">
                        <button className='bg-action-secondary text-black cursor-pointer rounded-md font-bold flex items-center justify-center w-[200px] py-3'>{Text.Navbar.button}</button>
                    </Link>
                </ul>
            </div>
        </>
    );
};

export default MobileNavigation;
