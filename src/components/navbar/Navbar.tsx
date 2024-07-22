"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text } from '@/constant';
import Link from 'next/link';
import Profile from '../dashboard/utils/profile/Profile';
import MobileNavigation from './MobileNavigation';
import { useRouter } from 'next/navigation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

export const buttonCssPrimary = "bg-action-primary px-6 focus:bg-focus-primary rounded-md font-bold text-[14px] hover:bg-hover-primary py-3";
export const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6";

interface NavbarProps {
    user: any;
    logout: any;
}

const Navbar: React.FC<NavbarProps> = ({ user, logout }) => {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const [targetSection, setTargetSection] = useState('');
    const [activeSection, setActiveSection] = useState('home');
    const router = useRouter();

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setIsHidden(true); // Scroll down
            } else {
                setIsHidden(false); // Scroll up
            }
            setLastScrollY(window.scrollY);
        }
    };

    const trackSections = () => {
        const sections = document.querySelectorAll<HTMLElement>('section');
        let current = "home";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id") || "home";
            }
        });

        setActiveSection(current);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            window.addEventListener('scroll', trackSections);
            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('scroll', trackSections);
            };
        }
    }, [lastScrollY]);

    useEffect(() => {
        if (targetSection) {
            document.getElementById(targetSection)?.scrollIntoView({ behavior: 'smooth' });
            setTargetSection(''); // Reset after scrolling
        }
    }, [targetSection]);

    return (
        <nav className={`py-6 mx-auto z-10 backdrop-blur-sm top-0 fixed transition-transform duration-300 w-full text-primary-color ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className={`${screenWidth} flex items-center justify-between`}>
                <div className={`md:flex hidden w-full justify-between`}>
                    <div className='lg:hidden cursor-pointer'>
                        <Image src='/logo.svg' alt='logo' width={166} height={61} />
                    </div>
                    <div className='lg:flex hidden cursor-pointer'>
                        <Image src='/logo.svg' alt='logo' width={150} height={200} />
                    </div>
                    <div className='flex gap-16 justify-between items-center'>
                        <div>
                            <ul className='flex font-normal gap-7 items-center'>
                                {Text.Navbar.listMenu.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer hover:font-bold ${activeSection === item.link.slice(1) ? 'underline font-bold underline-offset-8' : ''}`}
                                        onClick={async () => {
                                            if (item.name === 'Blogs') {
                                                //show sweet alert
                                                const MySwal = withReactContent(Swal);
                                                 MySwal.fire({
                                                    title: 'Coming Soon!',
                                                    text: 'Blogs are not yet available.',
                                                    icon: 'info',
                                                    confirmButtonText: 'Okay'
                                                });

                                            } else {
                                                if (window.location.pathname !== '/') {
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
                            </ul>
                        </div>
                        {user ? (
                            <div className='flex items-center gap-4'>
                                <Link href="/game" className='font-bold text-tertiary-color hover:underline cursor-pointer ' >Try Our Logic Game!</Link>
                                <Profile user={user} logout={logout} />
                            </div>
                        ) : (
                            <Link href="/signup">
                                <button className={buttonCssPrimary}>{Text.Navbar.button}</button>
                            </Link>
                        )}
                    </div>
                </div>
                <div className={`items-center md:hidden flex w-full justify-between`}>
                    <div>
                        <Image src='/logo.svg' layout="intrinsic" alt='logo' width={144} height={41} />
                    </div>
                    <section className="MOBILE-MENU flex lg:hidden">
                        <MobileNavigation />
                    </section>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
