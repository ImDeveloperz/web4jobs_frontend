"use client"
import { Text } from '@/constant'
import { useAuth } from '@/hooks/auth'
import React, { useEffect, useRef } from 'react'

const InsertCode = () => {
  const [email, setEmail] = React.useState<string>("")
  const {verifyCode} = useAuth({middleware: 'guest'})
  //get th email from url
useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const email = urlParams.get('email')
    setEmail(email as string)
}, [])
  const [code, setCode] = React.useState<string>("")
  const [errors, setErrors] = React.useState<string>("")

  const input1 = useRef<HTMLInputElement>(null)
  const input2 = useRef<HTMLInputElement>(null)
  const input3 = useRef<HTMLInputElement>(null)
  const input4 = useRef<HTMLInputElement>(null)
  const input5 = useRef<HTMLInputElement>(null)
  const input6 = useRef<HTMLInputElement>(null)
  const [isChanged, setIsChanged] = React.useState(false)
  useEffect(() => {
    input1.current?.focus()
    if (input1.current?.value && input1.current?.value != "") input2.current?.focus()
    if (input2.current?.value && input1.current?.value != null && input1.current?.value != "") input3.current?.focus()
    if (input3.current?.value && input2.current?.value != null && input2.current.value != "" && input1.current?.value != null && input1.current?.value != "") input4.current?.focus()
    if (input4.current?.value && input3.current?.value != null && input3.current.value != "" && input2.current?.value != null && input2.current.value != "" && input1.current?.value != null && input1.current?.value != "") input5.current?.focus()
    if (input5.current?.value && input4.current?.value != null && input4.current.value != "" && input3.current?.value != null && input3.current.value != "" && input2.current?.value != null && input2.current.value != "" && input1.current?.value != null && input1.current?.value != "") input6.current?.focus()
  }, [isChanged])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCode(input1.current?.value + "" + input2.current?.value + input3.current?.value + input4.current?.value + input5.current?.value + input6.current?.value)
    console.log(code)
    //send the data to the api
    verifyCode(
      {setErrors,
      props: {code: code, email: email as string}}
    )
    console.log(errors)
  }

  return (
    <div className='lg:w-[50%]  w-full  pt-10 gap-10 text-white flex-col flex items-center justify-center '>
      <div className='flex flex-col gap-1'>
        <div className='md:text-3xl text-2xl text-center font-bold'>{Text.ForgotPassword2.title}</div>
        <div className='md:text-sm text-xs text-center'>{Text.ForgotPassword2.subTitle} </div>
      </div>
      <form onSubmit={
        (event)=>{
          handleSubmit(event)
        }
      } action="" className='flex  flex-col gap-4'>
        <div className="flex items-center  text-white justify-center gap-3">
          <div className='flex gap-1 border p-2 rounded lg flex-col'>
            <input
              ref={input1}
              onChange={(e) => {
                //value must be integer
                if (isNaN(parseInt(e.target.value))) {
                  e.target.value = ""
                }
                setIsChanged(!isChanged)
              }}
              type="text"
              className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none  "
              maxLength={1} />
            <div className='w-full h-[1px] bg-white'></div>
          </div>
          <div className='flex gap-1 border p-2 rounded flex-col'>
            <input
              ref={input2}
              onChange={(e) => {
                //value must be integer
                if (isNaN(parseInt(e.target.value))) {
                  e.target.value = ""
                }
                setIsChanged(!isChanged)
              }}
              type="text"
              className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none  "
              maxLength={1} />
            <div className='w-full h-[1px] bg-white'></div>
          </div>
          <div className='flex gap-1 border p-2 rounded lg flex-col'>
            <input
              ref={input3}
              onChange={(e) => {
                //value must be integer
                if (isNaN(parseInt(e.target.value))) {
                  e.target.value = ""
                }
                setIsChanged(!isChanged)
              }}
              type="text"
              className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none  "
              maxLength={1} />
            <div className='w-full h-[1px] bg-white'></div>
          </div>
          <div className='flex gap-1 border p-2 rounded lg flex-col'>
            <input
              ref={input4}
              onChange={(e) => {
                //value must be integer
                if (isNaN(parseInt(e.target.value))) {
                  e.target.value = ""
                }
                setIsChanged(!isChanged)
              }
              }
              type="text"
              className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none  "
              maxLength={1} />
            <div className='w-full h-[1px] bg-white'></div>
          </div>
          <div className='flex gap-1 border p-2 rounded lg flex-col'>
            <input
              ref={input5}
              onChange={(e) => {
                //value must be integer
                if (isNaN(parseInt(e.target.value))) {
                  e.target.value = ""
                }
                setIsChanged(!isChanged)
              }
              }
              type="text"
              className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none  "
              maxLength={1} />
            <div className='w-full h-[1px] bg-white'></div>
          </div>
          <div className='flex gap-1 border p-2 rounded lg flex-col'>
            <input
              ref={input6}
              onChange={(e) => {
                //value must be integer
                if (isNaN(parseInt(e.target.value))) {
                  e.target.value = ""
                }
                setIsChanged(!isChanged)
              }
              }
              type="text"
              className="w-14 bg-transparent h-14 text-center text-2xl font-extrabold hover:border-slate-200 appearance-none rounded p-4 outline-none  "
              maxLength={1} />
            <div className='w-full h-[1px] bg-white'></div>
          </div>
        </div>
        <button className='py-3 w-full border-none flex items-center text-sm justify-center border rounded-lg bg-action-primary font-bold '>{Text.ForgotPassword2.button}</button>
      </form>
    </div>
  )
}

export default InsertCode