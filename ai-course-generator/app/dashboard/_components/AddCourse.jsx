"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link';

function AddCourse() {
    const {user}=useUser();
  return (
    <div className='flex items-center justify-between'>
        <div>
            <h2 className='text-3xl'>Hello, 
            <span className='font-bold'>{user?.fullName}</span></h2>
            <p className='text-sm text-gray-500'>Create new course with AI, Share qith friends and Earn from it</p>
       </div>
       <Link href={'/create-course'}>
            <Button>+ Create AI Course</Button>
       </Link>
    </div>
  )
}

export default AddCourse