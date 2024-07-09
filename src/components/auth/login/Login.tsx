"use client"
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useEffect, useState } from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";
const styleInput = 'py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none';

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/mycourses',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState<string | null>()

    const submitForm = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        login({
            setErrors,
            setStatus,
            props: {
                email,
                password,
                remember: shouldRemember
            }
        })
        console.log(errors)
}

return (
    <div className="flex lg:pt-4 md:pt-6 pt-8  w-full flex-col text-primary-color items-center justify-center ">
        <div className="container">
            <div >
                <div className="">
                    <div className="flex flex-col gap-10">
                        <div className="text-center ">
                            <h3 className='md:text-3xl text-2xl font-bold'>{Text.SignIn.title}</h3>
                            <p className='text-sm font-normal'>{Text.SignIn.subTitle}</p>
                        </div>
                        <div className="flex md:text-sm  text-xs items-center justify-center w-full flex-col">
                            <form onSubmit={(e: FormEvent<HTMLFormElement>) => submitForm(e)} className='lg:w-[40%] gap-3 flex items-center justify-center flex-col  w-full'>
                                <div className='flex w-full gap-2 flex-col'>
                                    <label htmlFor="email">{Text.SignIn.input1}</label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" className={`${styleInput}`} placeholder={Text.SignIn.placeholder} />
                                </div>
                                <div className='flex gap-2 w-full flex-col'>
                                    <label htmlFor="password">{Text.SignIn.input2}</label>
                                    <input onChange={(e) => { setPassword(e.target.value) }} type="password" className={`${styleInput}`} placeholder={Text.SignIn.placeholder2} />
                                </div>
                                {/*check*/}
                                <div className='flex w-full justify-between items-center'>
                                    <div className="flex items-center  justify-start w-full  ">
                                        <label
                                            className="relative flex items-center p-2 rounded-full cursor-pointer"
                                            htmlFor="checkbox-1"
                                            data-ripple-dark="true"
                                        >
                                            <input type="checkbox" id="checkbox-1"
                                                name="checkbox"
                                                onChange={(e) => setShouldRemember(e.target.checked)}
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
                                        <p className=' '>{Text.SignIn.check} </p>
                                    </div>
                                    <Link href="/forgotPassword/step1" className='w-full flex-end'>
                                        <p className=' hover:underline cursor-pointer text-end font-medium'>{Text.SignIn.link}</p>
                                    </Link>
                                </div>
                                <button className='py-3 w-full border-none flex items-center text-sm justify-center border rounded-lg bg-action-primary font-bold '>{Text.SignIn.button} </button>
                                <div className='w-full flex mt-4 items-center gap-2'>
                                    <div className='h-[1px]  w-[50%] bg-gray-300'></div>
                                    <p>OR</p>
                                    <div className='h-[1px]  w-[50%] bg-gray-300'></div>
                                </div>
                                <div className='flex md:flex-row flex-col gap-2 w-full text-tertiary-color'>
                                    <button className='py-2 gap-2 border-tertiary-color w-full border flex items-center  justify-center  rounded-lg bg-secondary-color font-bold '>
                                        <FaGoogle className='mr-2 w-6 h-6' /> {Text.SignIn.button2}
                                    </button>
                                    <button className='py-2 gap-2 w-full border-tertiary-color border flex items-center  justify-center  rounded-lg bg-secondary-color font-bold '>
                                        <FaApple className='mr-2 w-6 h-6' /> {Text.SignIn.button3}
                                    </button>
                                </div>
                            </form>

                            <div className='p-6'>
                                <p className='md:text-sm text-xs'>{Text.SignIn.text} <Link href="/signup" className="text-tertiary-color hover:underline cursor-pointer  font-medium "> {Text.SignIn.link2}</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login