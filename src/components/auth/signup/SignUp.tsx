'use client'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ZodType, z } from 'zod';
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth';
import Link from 'next/link';
import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { PiWarningCircleFill } from "react-icons/pi";
import { BiSolidHide,BiSolidShow } from "react-icons/bi";
import Loading from '@/components/loading/Loading';
const styleInput = 'py-3 pl-6 rounded-lg bg-transparent border text-quaternary-color focus:outline-none focus:border-primary-color w-full';
const SignUp = () => {
    const { signup,isLoading,isLoading2 } = useAuth({
        middleware: 'guest'})
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [error, setErrors] = useState<string>("");
    const [stop, setStop] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPassword2, setShowPassword2] = useState<boolean>(false);
    type FormData = {
        first_name: string;
        last_name: string;
        birthdate: string;
        email: string;
        password: string;
        password_confirmation: string;
    }
    const SignUpSchema: ZodType<FormData> = z.object({
        first_name: z.string().nonempty({ message: 'First name is required' }),
        last_name: z.string().nonempty({ message: 'Last name is required' }),
        birthdate: z.string().nonempty({ message: 'Birthdate is required' }).regex(/^\d{4}-\d{2}-\d{2}$/),
        email: z.string().email({ message: 'Invalid email address' }),
        password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
        password_confirmation: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    }).refine(data => data.password === data.password_confirmation, {
        message: 'Passwords do not match',
        path: ['password_confirmation'],
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(SignUpSchema),
    });
    const signupFunction = async (data: FormData) => {
        if (!isChecked) {
            if (!stop) {
                toast.error('Please accept the terms and conditions')
                setStop(true)

                setTimeout(() => {
                    setStop(false)
                }, 5500)
            }
            return;
        }
        try {
            await signup({
                setErrors,
                props: data,
            })
            console.log(error)
        } catch (e) {
            console.log(e)
        }
    };
    if(isLoading || isLoading2) return <Loading/>   
    return (
        <div className="flex lg:pt-4 md:pt-6 pt-8   w-full  flex-col text-primary-color items-center justify-center ">
            <ToastContainer position='top-center' />
            <div className='w-full' >
                <div className='w-full' >
                    <div className="w-full">
                        <div className="flex w-full flex-col gap-6">
                            <div className="text-center ">
                                <h3 className='text-3xl font-bold'>{Text.SignUp.title}</h3>
                                <p className='text-sm font-normal'>{Text.SignUp.subTitle}</p>
                            </div>
                            <div className="flex md:text-sm text-xs items-center justify-center w-full flex-col">
                                <form onSubmit={handleSubmit(signupFunction)} className='lg:w-[40%] gap-2 flex items-center justify-center flex-col md:w-[80%]'>
                                    <div className='grid md:grid-cols-2 grid-cols-1 w-full gap-2'>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="first name">{Text.SignUp.input1}</label>
                                            <div className='flex  flex-col ' >
                                                <input  {...register('first_name', { required: true })} className={`${styleInput} ${errors.first_name ? "border-red-500 focus:border-red-500 " : "border-quaternary-color"} `} type="text" id='first name' placeholder={Text.SignUp.placeholder1} />
                                                {errors.first_name && <div className="text-red-500 flex gap-1 items-center pt-1 text-xs">
                                                    <PiWarningCircleFill className="inline-block" />
                                                    <p>
                                                        {errors.first_name.message}
                                                    </p>
                                                </div>}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <label htmlFor="last name">{Text.SignUp.input2}</label>
                                            <div className='flex flex-col ' >
                                                <input  {...register('last_name', { required: true })} className={`${styleInput} ${errors.last_name ? "border-red-500 focus:border-red-500 " : "border-quaternary-color"} `} type="text" id='last name' placeholder={Text.SignUp.placeholder2} />
                                                {errors.last_name && <div className="text-red-500 flex gap-1 items-center pt-1 text-xs">
                                                    <PiWarningCircleFill className="inline-block" />
                                                    <p>
                                                        {errors.last_name.message}
                                                    </p>
                                                </div>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex w-full gap-2 flex-col'>
                                        <label htmlFor="birth date">{Text.SignUp.input3}</label>
                                        <div className='flex flex-col'>
                                            <input  {...register('birthdate', { required: true })} type="date" className={`${styleInput} ${errors.birthdate ? "border-red-500 focus:border-red-500 " : "border-quaternary-color"} pr-4 `} placeholder={Text.SignUp.placeholder3} />
                                            {
                                                errors.birthdate && <div className="text-red-500 flex gap-1 items-center pt-1 text-xs">
                                                    <PiWarningCircleFill className="inline-block" />
                                                    <p>
                                                        {errors.birthdate.message}
                                                    </p>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className='flex w-full gap-2  flex-col'>
                                        <label htmlFor="email">{Text.SignUp.input4}</label>
                                        <div >
                                            <input  {...register('email', { required: true })} type="email" className={`${styleInput} ${(errors.email || error != "") ? "border-red-500 focus:border-red-500 " : "border-quaternary-color"} `} placeholder={Text.SignUp.placeholder4}
                                                onChange={() => {
                                                    setErrors("")
                                                }}
                                            />
                                            {errors.email && <div className="text-red-500 relative flex gap-1 items-center pt-1 text-xs">
                                                <PiWarningCircleFill className="inline-block" />
                                                <p>
                                                    {errors.email.message}
                                                </p>
                                            </div>}
                                            {error != "" && <div className="text-red-500 relative flex gap-1 items-center pt-1 text-xs">
                                                <PiWarningCircleFill className="inline-block" />
                                                <p>
                                                    {error}
                                                </p>
                                            </div>}
                                        </div>
                                    </div>
                                    <div className='flex gap-2 w-full flex-col'>
                                        <label htmlFor="password">{Text.SignUp.input5}</label>
                                        <div className='relative'>
                                            <input  {...register('password', { required: true })}  type={showPassword ? "text" : "password"} className={`${styleInput} ${errors.password ? "border-red-500 focus:border-red-500 " : "border-quaternary-color"} `} placeholder={Text.SignUp.placeholder5} />
                                            {
                                                showPassword ? <BiSolidShow onClick={() => setShowPassword(false)} className={`absolute  cursor-pointer h-6 w-5 right-4 text-quaternary-color ${!errors.password ? " top-1/2 transform -translate-y-1/2" : " top-1/4 transform -translate-y-1/4"}  `} /> : <BiSolidHide onClick={() => setShowPassword(true)}  className={`absolute  cursor-pointer h-6 w-5 right-4 text-quaternary-color ${!errors.password ? " top-1/2 transform -translate-y-1/2" : " top-1/4 transform -translate-y-1/4"}  `} />
                                            }
                                           
                                            {errors.password && <div className="text-red-500 flex gap-1 items-center pt-1 text-xs">
                                                <PiWarningCircleFill className="inline-block" />
                                                <p>
                                                    {errors.password.message}
                                                </p>
                                            </div>}
                                        </div>
                                    </div>
                                    <div className='flex gap-2 flex-col w-full' >
                                        <label htmlFor="password">{Text.SignUp.input6}</label>
                                        <div className='relative'>
                                            <input  {...register('password_confirmation', { required: true })}  type={showPassword2 ? "text" : "password"} className={`${styleInput} ${errors.password_confirmation ? "border-red-500 focus:border-red-500 " : "border-quaternary-color"} `} placeholder={Text.SignUp.placeholder5} />
                                            {
                                                showPassword2 ? <BiSolidShow onClick={() => setShowPassword2(false)} className={`absolute  cursor-pointer h-6 w-5 right-4 text-quaternary-color ${!errors.password_confirmation ? " top-1/2 transform -translate-y-1/2" : " top-1/4 transform -translate-y-1/4"} `} /> : <BiSolidHide onClick={() => setShowPassword2(true)} className={`absolute  cursor-pointer h-6 w-5 right-4 text-quaternary-color ${!errors.password_confirmation ? " top-1/2 transform -translate-y-1/2" : " top-1/4 transform -translate-y-1/4"}  `}  />
                                            }
                                           
                                            {errors.password_confirmation && <div className="text-red-500 flex gap-1 items-center pt-1 text-xs">
                                                <PiWarningCircleFill className="inline-block" />
                                                <p>
                                                    {errors.password_confirmation.message}
                                                </p>
                                            </div>}
                                        </div>
                                    </div>
                                    {/*check*/}
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