"use client"
import React from 'react';
import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';

const page = () => {
    return (
        <div className='text-primary-color bg-primary-color fles flex-col gap-4' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1 className='text-2xl'>Blogs Coming Soon!</h1>
            <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'skyblue',
                animation: 'move 4s infinite'
            }} />
            <Link href="/" className='flex gap-2 rounded-lg bg-action-primary cursor-pointer  p-4 items-center'>
                <IoMdHome size={24} />

                <p>
                    Go back to Home
                </p>
            </Link>

            <style jsx>{`
        @keyframes move {
          0% { transform: translateX(0); }
          25% { transform: translateX(100px); }
          50% { transform: translateX(-100px); }
            75% { transform: translateX(100px); }
            100% { transform: translateX(0); }
        }
      `}</style>
        </div>
    );
};

export default page;