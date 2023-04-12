import React from 'react'
import { BsCreditCard, BsGithub } from 'react-icons/bs'

function Header() {
  return (
    <div className='w-[90%] lg:w-[60%] mx-auto my-2'>
        <div className='flex items-center justify-between'>
            <div className='text-xl flex items-center gap-2 font-semibold'>
                Xpensr <BsCreditCard size={30} />
            </div>
            <div>
                <a href='https://github.com/' target='_blank' rel='noopener noreferrer' className='my-2 px-2 py-1 flex items-center justify-center gap-2 border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-blue-200'><BsGithub /> Star</a>
            </div>
        </div>
    </div>
    
  )
}

export default Header
