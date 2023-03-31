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
    <div className='mt-20 text-center m-auto max-w-3xl px-5 '>
        {/* Left */}
        <div className=''>
            <h1 className='font-lora font-bold text-3xl lg:text-5xl mb-2'>A better alternative to BMI </h1>
            <p className='text-[#777E90] font-inter'>“The circumference of your waist should never be above half of your height”</p>
            <form onSubmit={calculate} className="my-10 text-left lg:flex lg:space-x-4  lg:align-baseline lg:mx-auto lg:justify-center lg:items-end">
                <div className='flex flex-col mb-3 lg:mb-0'>
                    <label className=" uppercase text-[8px] mb-1 tracking-wider font-bold text-[#B1B5C3]" htmlFor='height'>Height in Centimeters</label>
                    <input type='number' placeholder='Height in cm' onChange={handleHeightChange} className="bg-inherit border border-[#E6E8EC] text-sm p-2  rounded"/>
                </div>
                <div className='flex flex-col mb-3 lg:mb-0'>
                    <label className="uppercase text-[8px] mb-1 tracking-wider font-bold text-[#B1B5C3]" htmlFor='weight'>Waist Circumference in Centimeters</label>
                    <input type='number' placeholder='Waist in cm' onChange={handleWaistChange} className="bg-inherit border border-[#E6E8EC] text-sm p-2  rounded"/>
                </div>
                <button className='font-lora  bg-gradient-to-r from-pink-200 via-green-300 to-blue-300 to-90% text-black font-bold text-xs rounded-[2px] px-10 py-3 mt-2 lg:mt-0 w-[100%] lg:max-w-[300px]'>Calculate!</button>
            </form>
        </div>

        {/* Middle */}
         <div className=''>
        {result === " " &&
        <div className='mb-4 bg-gradient-to-r from-pink-200 via-green-300 to-blue-300 to-90% text-black rounded-[2px] px-10 py-6 mt-2 w-[100%]'>
            <p className='text-2xl font-lora '>Enter your meassurements</p>
        </div>
      }
        {result === 'You are obese' &&
        
        <div className='mb-4 bg-[#EF466F] text-black rounded-[2px] px-10 py-6 mt-2 w-[100%]'>
            <p className='text-2xl font-lora '>Your height/waist ration is Not good:
You are technically Obese 😵‍💫</p>
        </div>
      }
        {result === 'You are not obese' &&
        <div className='mb-4 bg-[#32BA79] text-black rounded-[2px] px-10 py-6 mt-2 w-[100%]'>
            <p className='text-2xl font-lora '>Your height/waist ration is good 👍!</p>
        </div>
      }
            
        </div> 

        {/* Right */}
        <div className='mt-16'>
            <div className='mb-10'>
                <p className='text-3xl'>🧠</p>
                <p className='text-3xl font-lora font-bold '>What does it mean:</p>
            </div>
            {/* Bento Top*/}
            <div className='lg:flex lg:space-x-4 text-left font-inter mb-4'>
                {/* Box */}
                <div className='bg-[#272727] p-5 rounded mb-4 lg:mb-0'>
                    <h2 className='text-md font-bold mb-2'>This means your Max pant size allowed is:</h2>
                    <p className='mt-2 font-lora font-extrabold text-4xl'>
                        {Math.round(maxPantSize)} in or {Math.round((maxPantSize)*2.54)}cm 
                    </p>
                    <p className='text-xs text-[#F4F5F6] mb-2'>In order to stay under the "obese" threshold, your pant size needs to remain under this number!</p>
                    <p className='text-xs text-[#F4F5F6]'>I am assuming you are not a 90s rapper and use your pants below your waistline</p>
                </div>

                {/* Box */}
                <div className='bg-[#272727] p-5 rounded lg:w-full'>
                    <h2 className='text-md font-bold mb-2'>Useful resources</h2>
                    <ul className='text-sm text-[#777E90] underline list-disc pl-5'>
                        <li className='mb-1'><a href='#' target='_blank'>Peter's website</a></li>
                        <li className='mb-1'><a href='#' target='_blank'>Podcast episode where he shared this info</a></li>
                    </ul>     
                </div>
            </div>
            {/* Bottom Bento */}
            <div className='lg:flex lg:space-x-4 text-left font-inter'>
                {/* Box */}
                <div className='bg-[#272727] p-5 rounded text-center lg:max-w-[300px]'>
                {result === " " &&
                     <div className='mb-4 bg-gradient-to-r from-pink-200 via-green-300 to-blue-300 to-90% text-black rounded-[2px] px-10 p-6 mt-2 w-[100%] h-[100%] lg:flex lg:justify-center lg:align-middle '>
                        <p className='text-xl font-lora lg:self-center'>Enter your meassurements</p>
                    </div>
                }
               {result === 'You are obese' &&
                    <div className=''>
                        <img src='./fat.png' alt='fat' className=' mb-2 w-full'/>

                        <div className=' bg-[#EF466F] text-black rounded-[2px]  p-6 mt-2 w-[100%]'>
                            <p className='text-xl font-lora '>You are technically Obese 😵‍💫</p>
                        </div>
                    </div>
                }
                {result === 'You are not obese' &&
                    <div className=''>
                    <img src='./fit.png' alt='fit' className=' mb-2 w-full'/>

                    <div className=' bg-[#32BA79] text-black rounded-[2px]  p-6 mt-2 w-[100%]'>
                        <p className='text-xl font-lora '>You are fit!</p>
                    </div>
                </div>
                    
                }
                </div>

                {/* Box */}
                <div className='  lg:w-2/3 mt-4 lg:mt-0'>
                    <div className='bg-[#272727] p-5 rounded mb-4'>
                        <img  className="rounded" src='./attia-concern.gif' alt='Funny gif'/>
                    </div>
                    <div className='bg-[#272727] p-5 pb-0 rounded'>
                        <p className='text-center font-bold mb-2'>Get Peter’s new book!</p>
                        <div className='flex justify-between'>
                            <div className='self-stretch flex flex-col justify-center align-middle'>
                                <ul className='text-sm text-[#777E90] underline list-disc pl-5'>
                                    <li className='mb-1'><a href='#' target='_blank'>Amazon</a></li>
                                    <li className='mb-1'><a href='#' target='_blank'>Barnes & Noble</a></li>
                                    <li className='mb-1'><a href='#' target='_blank'>Books a Million</a></li>
                                    <li className='mb-1'><a href='#' target='_blank'>Audible</a></li>
                                    <li className='mb-1'><a href='#' target='_blank'>Google</a></li>
                                </ul>   
                            </div>
                            <img src='./book.png' alt='book'/>
                        </div>
                    </div>
                     
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator