import React from 'react'

function Header() {
  return (
    <div className='flex md:space-x-5 align-middle justify-between items-center  border-b-[0.15px] border-white/75 '>
        <img src='./logo.svg' alt="logo"  className='px-[25px] py-[20px] lg:border-r-[0.15px] lg:border-white/75'/>
        <p className='lg:block hidden text-xs text-[#8F8F8F] font-inter'>This is a personal project with NO relationship to Peter Attia in any way. Designed and Developed by <a className='underline' href='https://enrique.zone' target="_blank" rel="noreferrer">enrique.zone</a></p>
        <div className='bg-gradient-to-r from-pink-200 via-green-300 to-blue-300 to-90% text-black  self-stretch flex align-middle items-center'>

        <button className='px-8'><p className='text-sm font-lora font-medium'>Contact Me!</p><p className='text-[8px]'>enrique, not Peter</p></button>
        </div>
    </div>
  )
}

export default Header