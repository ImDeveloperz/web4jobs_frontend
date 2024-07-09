'use client'
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react'

const styleInput = 'py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none';
const SignUp = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/login',
    })
    const [isChecked, setIsChecked] = useState(false);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState<string[]>([]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!isChecked) {
            setErrors(["You must agree to the terms and conditions"]);
            return;
        }
        register({
            setErrors,
            props: {
                first_name : firstName,
                last_name : lastName,
                birthdate,
                email,
                password,
                password_confirmation : passwordConfirmation
            }
        })
    };
    return (
        <div className="flex lg:pt-4 md:pt-6 pt-8   w-full  flex-col text-primary-color items-center justify-center ">
            <div className='w-full' >
                <div className='w-full' >
                    <div className="w-full">
                        <div className="flex w-full flex-col gap-6">
                            <div className="text-center ">
                                <h3 className='text-3xl font-bold'>{Text.SignUp.title}</h3>
                                <p className='text-sm font-normal'>{Text.SignUp.subTitle}</p>
                            </div>
                            <div className="flex md:text-sm text-xs items-center justify-center w-full flex-col">
                                <form onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)} className='lg:w-[40%] gap-2 flex items-center justify-center flex-col md:w-[80%]'>
                                    <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="first name">{Text.SignUp.input1}</label>
                                            <input onChange={(e) => setFirstName(e.target.value)} className={`${styleInput}`} type="text" id='first name' placeholder={Text.SignUp.placeholder1} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="last name">{Text.SignUp.input2}</label>
                                            <input onChange={(e) => setLastName(e.target.value)} className={`${styleInput} w-full`} type="text" id='first name' placeholder={Text.SignUp.placeholder2} />
                                        </div>
                                    </div>
                                    <div className='flex w-full gap-2 flex-col'>
                                        <label htmlFor="birth date">{Text.SignUp.input3}</label>
                                        <input  onChange={(e) => setBirthdate(e.target.value)} className={`${styleInput} py-2 md:px-4 px-4 w-full`} type="date" placeholder={Text.SignUp.placeholder3} />
                                    </div>
                                    <div className='flex w-full gap-2 flex-col'>
                                        <label htmlFor="email">{Text.SignUp.input4}</label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" className={`${styleInput}`} placeholder={Text.SignUp.placeholder4} />
                                    </div>
                                    <div className='flex gap-2 w-full flex-col'>
                                        <label htmlFor="password">{Text.SignUp.input5}</label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" className={`${styleInput}`} placeholder={Text.SignUp.placeholder5} />
                                    </div>
                                    <div className='flex gap-2 flex-col w-full' >
                                        <label htmlFor="password">{Text.SignUp.input6}</label>
                                        <input  onChange={(e) => setPasswordConfirmation(e.target.value)} type="password" className={`${styleInput}`} placeholder={Text.SignUp.placeholder6} />
                                    </div>                                        {/*check*/}
                                        <div className="flex items-center justify-start w-full  ">
                                            <label
                                                className="relative flex items-center p-2 rounded-full cursor-pointer"
                                                htmlFor="checkbox-1"
                                                data-ripple-dark="true"
                                            >
                                                <input type="checkbox" id="checkbox-1"
                                                    name="checkbox"
                                                    onChange={(e) => setIsChecked(e.target.checked)}
                                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500"
                                                />
                                                <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-3.5 w-3.5"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        strokeWidth="1"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </label>
                                            <p className='md:text-sm text-xs'>{Text.SignUp.check} <span className="text-tertiary-color md:text-sm text-xs hover:underline cursor-pointer  font-medium "> {Text.SignUp.link}</span> {Text.SignUp.check2}</p>
                                        </div>
                                    <button className='py-3 w-full border-none flex items-center text-sm justify-center border rounded-lg bg-action-primary font-bold '>{Text.SignUp.button} </button>
                                </form>
                                <div className='p-6'>
                                    <p className='md:text-sm text-xs'>{Text.SignUp.text} <Link href="/login" className="text-tertiary-color  hover:underline cursor-pointer  font-medium "> {Text.SignUp.link2}</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp