"use client";
import { Text } from '@/constant'
import React, { useState } from 'react'

const FormContact = () => {
    const [city, setCity] = useState('')
    const [role, setRole] = useState('')
    const cities = ["Casablanca", "Rabat", "Fes", "Marrakech", "Tangier", /* more cities here */];
    const roles = ["Student", "Teacher", "Parent", "Other", /* more roles here */];
    const programs = ["Full Stack Program", "DevOps & Cloud Program", "Data-Science Program", "Machine Learning Program", "Software Engeneering Program", /* more programs here */];
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
                    <div className='flex gap-2 flex-col'>
                        <div>
                            <h4>City</h4>
                        </div>
                        <div className='flex  rounded-lg pr-6 border border-quaternary-color text-quaternary-color w-full justify-between items-center'>
                            <select  className=' rounded-lg bg-transparent w-full py-3 cursor-pointer px-6 h-full border-none text-quaternary-color  focus:outline-none'>
                                <option value="">Choose your city...</option>
                                {cities.map((city, index) => (
                                    <option key={index} value={city}>{city}</option>
                                ))}
                            </select>
                        </div>
                    </div>
        
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h4>Who are you </h4>
                        </div>
                        <div className='flex  rounded-lg pr-6 border border-quaternary-color text-quaternary-color w-full justify-between items-center'>
                            <select  className=' rounded-lg bg-transparent w-full py-3 cursor-pointer px-6 h-full border-none text-quaternary-color  focus:outline-none'>
                                <option value="">Choose your role</option>
                                {roles.map((role, index) => (
                                    <option key={index} value={role}>{role}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div>
                            <h4>Program </h4>
                        </div>
                        <div className='flex  rounded-lg pr-6 border border-quaternary-color text-quaternary-color w-full justify-between items-center'>
                            <select  className=' rounded-lg bg-transparent w-full py-3 cursor-pointer px-6 h-full border-none text-quaternary-color  focus:outline-none'>
                                <option value="">Choose your program ...</option>
                                {programs.map((program, index) => (
                                    <option key={index} value={program}>{program}</option>
                                ))}
                            </select>
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