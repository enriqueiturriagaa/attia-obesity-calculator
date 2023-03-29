import React from 'react'

function Calculator() {

    const [height, setHeight] = React.useState(0)
    const [waist, setWaist] = React.useState(0)

    const [result, setResult] = React.useState('')


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
    <div className='border flex flex-col'>
        <form onSubmit={calculate} className="mb-10">
            <div className='flex flex-col'>
                <label htmlFor='height'>Height in Centimeters</label>
                <input type='number' placeholder='Height in cm' onChange={handleHeightChange}/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor='weight'>Waist Circumference in Centimeters</label>
                <input type='number' placeholder='Waist in cm' onChange={handleWaistChange}/>
            </div>
            <button>Calculate</button>
        </form>
        <div>
            <h2>Result</h2>
            <p>{result}</p>
        </div>
        <div>
            <h2>Max pant size allowed in your lifetime</h2>
            <p>In order to stay under the "obese" threshold, your pant size needs to remain under {maxPantSize} (US Sizing)</p>
            <p className='text-xs'>I am assuming you are not a 90s rapper and use your pants below your waistline</p>
        </div>
    </div>
  )
}

export default Calculator