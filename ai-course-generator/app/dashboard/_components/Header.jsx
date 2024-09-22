import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-4 shadow-sm'>
        <Image src={'/aplha.svg'} width={60} height={50} />
        <UserButton/>
    </div>
  )
}

export default Header