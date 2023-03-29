import React from 'react'

function Header() {
  return (
    <div className='py-10 flex md:space-x-5 align-middle justify-between items-center'>
        <img src='./logo.svg' alt="logo" />
        <p className='text-xs text-[#777E90]'>This is a personal project with NO relationship to Peter Attia in any way. Designed and Developed by <a className='underline' href='https://enrique.zone' target="_blank" rel="noreferrer">enrique.zone</a></p>
    </div>
  )
}

export default Header