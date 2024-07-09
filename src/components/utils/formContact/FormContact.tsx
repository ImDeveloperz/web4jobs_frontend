"use client";
import { Text } from '@/constant'
import React, { useState } from 'react'

const FormContact = () => {
    const [city, setCity] = useState('')
    const [role, setRole] = useState('')

    return (
        <div className='mx-auto font-normal md:text-base text-xs max-w-[610px]'>
            <form className='flex flex-col gap-2 w-full '>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-2 w-full'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='name'>First Name</label>
                        <input type='text' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' id='name' placeholder='First name here...' />
                    </div>
                    <div className='flex flex-col   gap-2'>
                        <label htmlFor='name'>Last Name</label>
                        <input type='text' id='name' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' placeholder='Last name here...' />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'>Email Adress</label>
                    <input type='email' id='email' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' placeholder='Type your email here...' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='' placeholder='Type your phone number...' className='py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none' id='phone' />
                </div>
                <div className='flex gap-2 flex-col  '>
                    <div>
                        <h4>City</h4>
                    </div>
                    <div className='flex cursor-pointer rounded-lg px-6 py-3 border border-quaternary-color text-quaternary-color w-full justify-between items-center' >
                        Choose your city...
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h4>Who Are You?</h4>
                        </div>
                        <div className='flex  cursor-pointer rounded-lg px-6 py-3 w-full border border-quaternary-color text-quaternary-color justify-between items-center ' >
                            <p>Select your role...  </p>
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div>
                    <button className='py-3 mt-2 w-full border-none flex items-center md:text-base text-xs justify-center border rounded-lg bg-action-primary font-bold '>
                        {Text.pages.Acceuil.Contact.button}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormContact