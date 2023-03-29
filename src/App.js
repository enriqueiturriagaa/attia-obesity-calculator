import React from 'react'
import Calculator from './components/Calculator'
import Header from './components/Header'

function App() {
  return (
    <div className='bg-[#141416] text-[#FCFCFD] min-h-screen font-dm'>
      <div className='max-w-4xl mx-auto'>
        <Header />
        <Calculator />


      </div>
    </div>
  )
}

export default App