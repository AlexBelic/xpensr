import React from 'react'
import { GiCampfire } from 'react-icons/gi'

function Footer() {
  return (
    <footer className='fixed bottom-1 flex gap-2 items-center w-full justify-center'>
      Made with <GiCampfire className='text-orange-500 text-2xl ' /> by Me
    </footer>
  )
}

export default Footer
