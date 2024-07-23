"use client"
import NavbarAuth from '@/components/auth/navbar/NavbarAuth'
import Footer from '@/components/footer/Footer';
import { buttonCssPrimary } from '@/components/navbar/Navbar';
import BackLink from '@/components/utils/backLink/BackLink';
import Link from 'next/link';
import React from 'react'
const screenWidth = "2xl:max-w-[1200px] mx-auto xl:max-w-[1300px] lg:max-w-[1000px] md:max-w-[1000px] max-w-[700px] px-6";

const page = () => {
  return (
    <div className={`bg-primary-color text-primary-color `} >
      <div>
        <NavbarAuth />
        <div >
          <div className={`${screenWidth}`} >
            <BackLink />
          </div>
          <div className={` flex items-center  justify-center flex-col gap-3 `}>
              <h1 className="text-5xl ">Entry Quiz</h1>
              <p className='text-sm' >Play the game to help us know your level!</p>
            {/*irframe*/}
            <div className={`w-full h-[800px] md:flex hidden ${screenWidth} `} >
              <iframe src="https://logic-game.qwasar.io/" width="100%" height="100%" frameBorder="0" allowFullScreen={true} allow="autoplay; fullscreen" title="quiz"></iframe>
            </div>
            <div className={`w-full  h-[800px] md:hidden flex `} >
              <iframe src="https://logic-game.qwasar.io/" width="100%" height="100%" frameBorder="0" allowFullScreen={true} allow="autoplay; fullscreen" title="quiz"></iframe>
            </div>
            <div className={`justify-end  w-full flex w-full md:items-end p-6 ${screenWidth}`} >
              <Link href="/" className={buttonCssPrimary} >
                I Give Up!
              </Link>
            </div>
            {/*tips and trics*/}
            <div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default page