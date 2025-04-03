import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const chatlabel = ({openMenu,setOpenMenu}) => {
  return (
    <div className='flex items-center justify-between p-2 text-white/80 hovr:bg-white/10rounded-lg text-sm group cursor-pointer'>
     <p className='group-hover:max-w-5/6 truncate'>Chat Name Here</p>
     <div className='group relative flex items-center justify-center h-6 w-6 aspect-square hover rounded-lg'>
        <Image src={assets.three_dots} alt='' className={`w-4 ${openMenu.open ? "":"hidden"} group-hover:block`}/>
        <div className={`absoulte ${openMenu.open ? "block":"hidden"} -right-36 top-6  rounded-xl w-maxp-2`}>
            <div className='flex items-center gap-3 hover py-2 rounded-lg'>
                <Image src={assets.pencil_icon} alt='' className='w-4'/>
                <p>Rename</p>
            </div>
            <div className='flex items-center gap-3 hover  py-2 rounded-lg'>
                <Image src={assets.delete_icon} alt='' className='w-4'/>
                <p>Delete</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default chatlabel