"use client"
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ZodType, z } from 'zod'

const InsertCode = () => {
  const [email, setEmail] = useState<string>("")
  const { verifyCode, resendCode } = useAuth({ middleware: 'guest' })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const email = urlParams.get('email')
    setEmail(email as string)
    if(email === null){
      window.location.pathname = '/signup'
    }
  }, [])

  const [code, setCode] = useState<string>("")
  const [error, setErrors] = useState<string>("")

  type FormData = {
    input1: string;
    input2: string;
    input3: string;
    input4: string;
    input5: string;
    input6: string;
  }

  const InsertCodeSchema: ZodType<FormData> = z.object({
    input1: z.string().nonempty(),
    input2: z.string().nonempty(),
    input3: z.string().nonempty(),
    input4: z.string().nonempty(),
    input5: z.string().nonempty(),
    input6: z.string().nonempty(),
  });

  const { register, handleSubmit,setError, clearErrors, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(InsertCodeSchema),
  });

  const styleInput = `flex gap-1 border p-2 rounded lg:flex-col ${(error || errors.input1 || errors.input2 || errors.input3 || errors.input4 || errors.input5 || errors.input6) ? "border-red-500" : "border-white"}`
  //const lineStyle = 

  const verify = (data: FormData) => {
    const combinedCode = `${data.input1}${data.input2}${data.input3}${data.input4}${data.input5}${data.input6}`
    setCode(combinedCode)
    try{
      verifyCode({ setErrors, props: { code: combinedCode, email: email as string } })
      console.log(error)
    }catch(err){
      
    }
  }

  const resend_code = () => {
    resendCode({ setErrors, email: email as string })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if (isNaN(parseInt(e.target.value))) {
      e.target.value = ""
      setError(`input${index + 1}` as keyof FormData, { type: 'manual', message: 'Must be a number' })
    } else {
      clearErrors(`input${index + 1}` as keyof FormData)
      const nextSibling = document.querySelectorAll('input')[index + 1] as HTMLInputElement
      if (nextSibling) {
        nextSibling.focus()
      }
    }
  }

  return (
    <div className='lg:w-[50%] w-full pt-10 gap-10 text-white flex-col flex items-center justify-center'>
      <div className='flex flex-col gap-1'>
        <div className='md:text-3xl text-2xl text-center font-bold'>{Text.ForgotPassword2.title}</div>
        <div className='md:text-sm text-xs text-center'>{Text.ForgotPassword2.subTitle}</div>
      </div>
      {error && <div className='text-red-500 text-sm'>{error}</div>}
      <form onSubmit={handleSubmit(verify)} className='flex flex-col gap-4'>
        <div className="flex items-center text-white justify-center gap-3">
          {[...Array(6)].map((_, index) => (
            <div key={index} className={styleInput}>
              <input
                {...register(`input${index + 1}` as keyof FormData)}
                onChange={(e) => handleInputChange(e, index)}
                type="text"
                className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none"
                maxLength={1}
              />
              <div className={`w-full h-[1px] `}></div>
            </div>
          ))}
        </div>
        <div className='pt-4 pb-2 text-sm'>
          <p className='md:text-sm text-xs text-center'>
            {Text.ForgotPassword2.text} <span onClick={resend_code} className="text-tertiary-color hover:underline cursor-pointer font-medium">{Text.ForgotPassword2.link}</span>
          </p>
        </div>
        <button className='py-3 w-full border-none flex items-center text-sm justify-center border rounded-lg bg-action-primary font-bold' type='submit'>{Text.ForgotPassword2.button}</button>
      </form>
    </div>
  )
}

export default InsertCode
