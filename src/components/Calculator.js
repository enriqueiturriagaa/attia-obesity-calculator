import React from 'react'

function Calculator() {

    const [height, setHeight] = React.useState(0)
    const [waist, setWaist] = React.useState(0)

    const [result, setResult] = React.useState(' ')


    function handleHeightChange(event) {
        setHeight(event.target.value)
        
    }
    function handleWaistChange(event) {
        setWaist(event.target.value)
      }
    const [maxPantSize, setMaxPantSize] = React.useState(0)

    const calculate = () => {
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        const result = height / waist ;
        if (result <= 2) {
            setResult('You are obese')
        } else {
            setResult('You are not obese')
        }
        console.log('This is the result of the obesity Calc: ', result)
        console.log('This is the Height: ', height)
        const heightInInches = height / 2.54;
        console.log('This is the height in inches: ',heightInInches)
        setMaxPantSize(heightInInches / 2)
    }


  return (
    <div className='my-20 flex space-x-14'>
        {/* Left */}
        <div className='w-1/3'>
            <h1 className='font-poppins font-bold text-3xl mb-2'>Attia's Obesity Calculator</h1>
            <h2 className='font-poppins text-xl mb-10'>A better alternative to BMI </h2>
            <p className='text-[#777E90] font-poppins'>“The circumference of your waist should never be above half of your height”</p>
            <form onSubmit={calculate} className="mt-10">
                <div className='flex flex-col mb-3'>
                    <label className="uppercase text-[8px] mb-1 tracking-wider font-bold text-[#B1B5C3]" htmlFor='height'>Height in Centimeters</label>
                    <input type='number' placeholder='Height in cm' onChange={handleHeightChange} className="bg-inherit border border-[#E6E8EC] text-sm p-2  rounded"/>
                </div>
                <div className='flex flex-col mb-3'>
                    <label className="uppercase text-[8px] mb-1 tracking-wider font-bold text-[#B1B5C3]" htmlFor='weight'>Waist Circumference in Centimeters</label>
                    <input type='number' placeholder='Waist in cm' onChange={handleWaistChange} className="bg-inherit border border-[#E6E8EC] text-sm p-2  rounded"/>
                </div>
                <button className='bg-[#3772FF] font-poppins font-bold text-xs rounded-full px-10 py-3 mt-2 w-[100%]'>Calculate</button>
            </form>
        </div>

        {/* Middle */}
        <div className='w-1/3'>
        {result === " " &&
        <h2>
          Enter your meassurements.
        </h2>
      }
        {result === 'You are obese' &&
        
          <img src='./obese-attia.png' alt="obese attia" />
      }
        {result === 'You are not obese' &&
        <img className='rounded-lg' src='./fit-attia.png' alt="fit attia" />
      }
            
        </div>

        {/* Right */}
        <div className='w-1/3'>
            <div className='mb-4'>
                <p className='text-xl font-poppins font-bold'>{result}</p>
            </div>
            <div>
                <h2 className='text-2xl'>Max pant size allowed in your lifetime:</h2>
                <p>In order to stay under the "obese" threshold, your pant size needs to remain under:</p>
                    <p className='mt-2 font-poppins font-extrabold text-2xl'>
                    {Math.round(maxPantSize)} in or {Math.round((maxPantSize)*2.54)}cm 
                    </p>
                <p className='text-xs text-[#777E90]'>I am assuming you are not a 90s rapper and use your pants below your waistline</p>
            </div>
        </div>
    </div>
  )
}

export default Calculator