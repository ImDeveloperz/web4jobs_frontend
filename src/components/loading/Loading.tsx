import Image from 'next/image'
import React from 'react'

const Loading = () => {

  return (
    <div className='h-[100vh] bg-secondary-color relative w-full flex items-center justify-center overflow-hidden'>
        <Image src="/leftLogo.svg"  alt="loading" width={40} height={40} className='absolute top-1/2 left-1/2 loading transform -translate-x-1/2 -translate-y-1/2' />
    </div>
  )
}

export default Loading