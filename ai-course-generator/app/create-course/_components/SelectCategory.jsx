import CategoryList from '@/app/_shared/CategoryList'
import React from 'react'
import Image from 'next/image'

const SelectCategory = () => {
  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-5'>Select the Course Category</h2>
    
    <div className='grid grid-cols-3 gap-10'>
        {CategoryList.map((item,index)=>(
            <div className='flex flex-col p-5 border 
            items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer'>
                <Image src={item.icon} width={60} height={60}/>
                <h2>{item.name}</h2>
            </div>    
        ))}
    </div>
    </div>
  )
}

export default SelectCategory