'use client'
import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useState } from "react";
export const PromptBox = ({setIsLoading,isLoading}) => {

  const [prompt,setPrompt] = useState('')
  return (
   <form className={`w-full ${false ? "max-w-3xl":"max-w-2xl"}
   bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}>
     <textarea className='outline-none w-full resize-none overflow-hidden break-words bg-transparent' rows={2} placeholder='Ask a Question' required onChange={(e)=>setPrompt(e.target.value)} value={prompt}/>
     <div className='flex items-center justify-between text-sm '> 
        <div className='flex items-center gap-2'>
            <p className='flex items--center gap-2 text-xs border border-gray-300/40 px-2 py1 rounded-full cursor-pointor hover:bg-gray-500/20 transition hidden'>
                <Image className='h-5 hidden' src={assets.deepthink_icon} alt=""/>
                
            </p>
            <p className='flex items--center gap-2 text-xs border border-gray-300/40 px-2 py1 rounded-full cursor-pointor hover:bg-gray-500/20 transition hidden'>
                <Image className='h-5 hidden' src={assets.search_icon} alt=""/>
                   
            </p>
        </div>
        <div className='flex it'>
          <Image className='w-4 cursor-pointer hidden' src={assets.pin_icon} alt=''/>
          <button className={`${prompt ? "bg-primary":"bg-[#71717a]"} rounded-full p-2 cursor-pointer`}>
          <Image className='w-3.5 aspect-square' src={prompt ? assets.arrow_icon : assets.arrow_icon_dull} alt=''/>
          </button>
        </div>
     </div>
   </form>
  )
}
export default PromptBox