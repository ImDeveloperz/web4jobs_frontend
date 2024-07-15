"use client"
import React, { useRef } from 'react'

import { FiSearch } from "react-icons/fi";
const Search = () => {
    const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className='border flex border-quaternary-color w-full gap-4 px-4 rounded-lg'>
        <input ref={inputRef} type="text" className="w-full h-12 bg-transparent  focus:outline-none  text-quaternary-color rounded-xl p-4" placeholder="Search..." />
        <div className="flex items-center text-quaternary-color cursor-pointer justify-center" onClick={()=>{
            if(inputRef?.current){
                (inputRef?.current as HTMLInputElement).focus();
            }
        }}>
            <FiSearch size={20}   />
        </div>
    </div>
  )
}

export default Search