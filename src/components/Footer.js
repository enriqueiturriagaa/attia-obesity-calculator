import React from 'react'

function Footer() {
  return (
    <div className=' md:space-x-5 align-middle justify-between items-center text-center border-t-[0.15px] border-white/75 py-5 mt-20 '>
        <p className=' text-xs text-[#8F8F8F] font-inter'>This is a personal project with NO relationship to Peter Attia in any way. Designed and Developed by <a className='underline' href='https://enrique.zone' target="_blank" rel="noreferrer">enrique.zone</a></p>
        {/* <div className='bg-gradient-to-r from-pink-200 via-green-300 to-blue-300 to-90%  text-[#343434]  self-stretch flex align-middle items-center'>

        <button className='px-8'><p className='text-sm font-inter font-bold'>Contact Me!</p><p className='text-[8px]'>enrique, not Peter</p></button>
        </div> */}
    </div>
  )
}

export default Footer