import React from 'react'

export default function LodingComp() {
  return (
    <div className='flex w-screen gap-8 justify-center items-center h-[80px]'>
        <div className='animate-ping  text-blue-600 bg-orange-600 h-[20px] w-[20px] rounded-full'></div>
        <div className='animate-ping  text-blue-600 bg-purple-600 rounded-full h-[20px] w-[20px]'></div>
        <div className='animate-ping  text-blue-600 bg-blue-800 rounded-full h-[20px] w-[20px]'></div>
        <div className='animate-ping  text-blue-600 bg-green-600 rounded-full h-[20px] w-[20px]'></div>
    </div>
  )
}
