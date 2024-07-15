"use client"

import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const styleInput = 'py-3 pl-6 rounded-lg bg-transparent border border-quaternary-color text-quaternary-color  focus:outline-none';

const NewPassword = () => {
  //const [searchParams] : any = useSearchParams()

  const {resetPassword } = useAuth({ middleware: 'guest' })
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = React.useState('')
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('')
  const [errors, setErrors] = useState<string>()
  const [status, setStatus] = useState(null)

  const submitForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    resetPassword({
      setErrors,
      props: {
        email,
        token,
        password,
        password_confirmation: passwordConfirmation
      }
    });
  };

 {/* useEffect(() => {
    const emailParam = searchParams.get('email');
    if (emailParam !== null) {
      setEmail(emailParam);
    }
    const token = searchParams.get('token');
    if (token !== null) {
      setToken(token);
    }
  }, [searchParams.get('email'),searchParams.get('token')]); */ }


  return (
    <div className='w-full pt-10  h-full'>
      <div className='flex text-primary-color h-full items-center  justify-center'>
        <div className='lg:w-1/2 w-full flex flex-col gap-3'>
          <div className='flex flex-col gap-1'>
            <h1 className='md:text-3xl text-2xl font-bold text-center'>{Text.ForgotPassword3.title}</h1>
            <p className='text-center font-normal text-sm mt-2'>{Text.ForgotPassword3.subTitle}</p>
          </div>
          <form onSubmit={
            (event) => {
              submitForm(event)
            }
          } action="">
            <div className='mt-4 text-sm flex flex-col gap-2 w-full'>
              <label htmlFor='password'>{Text.ForgotPassword3.input1}</label>
              <input type='password' onChange={(e)=>{
                setPassword(e.target.value)
              }}  placeholder={Text.ForgotPassword1.placeholder} className={` w-full ${styleInput}`} />
            </div>
            <div className='mt-4 text-sm flex flex-col gap-2 w-full'>
              <label htmlFor='comfirm_pass'>{Text.ForgotPassword3.input2}</label>
              <input onChange={
                (e)=>{
                  setPasswordConfirmation(e.target.value)
                }
              } type='password' placeholder={Text.ForgotPassword3.placeholder2} className={` w-full ${styleInput}`} />
            </div>
            <div className='mt-4'>
              <button className='py-3 w-full border-none flex items-center text-sm justify-center border rounded-lg bg-action-primary font-bold '>{Text.ForgotPassword3.button}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewPassword