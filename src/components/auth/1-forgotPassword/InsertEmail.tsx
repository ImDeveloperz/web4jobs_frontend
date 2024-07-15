'use client'
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth';
import React, { useState } from 'react'

const styleInput = 'py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none';

const InsertEmail = () => {
  const { forgotPassword } = useAuth({
    middleware: 'guest',
  })
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<string>()
  const [status, setStatus] = useState<string | null>()
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    forgotPassword({ setErrors, email});
  };
  return (
    <div className='w-full pt-10  h-full'>
      <div className='flex gap-8 text-primary-color h-full items-center  justify-center'>
        <div className='lg:w-1/2 w-full flex flex-col gap-4'>
          <div className='flex gap-1 flex-col '>
            <h1 className='text-2xl  font-bold text-center'>{Text.ForgotPassword1.title}</h1>
            <p className='text-center font-normal md:text-sm text-xs mt-2'>{Text.ForgotPassword1.subTitle}</p>
          </div>
          <form action="" onSubmit={(event) =>{
            submitForm(event)
          }}>
            <div className='mt-4 text-sm flex flex-col gap-2 w-full'>
              <label htmlFor='email'>{Text.ForgotPassword1.input1}</label>
              <input onChange={(event)=>{
                setEmail(event.target.value)
              }} type='text' placeholder={Text.ForgotPassword1.placeholder} className={` w-full ${styleInput}`} />
            </div>
            <div className='mt-4'>
              <button className='py-3 w-full border-none flex items-center text-sm justify-center border rounded-lg bg-action-primary font-bold '>{Text.ForgotPassword1.button}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InsertEmail