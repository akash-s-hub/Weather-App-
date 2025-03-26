import React from 'react'
import Left from './Left'
import Right from './Right'

const Hero = (props) => {
  return (
    <div className='h-[88%] w-full flex items-end justify-evenly'>
      <Left
        currentDate={props.currentDate}
        currentTime={props.currentTime}
        cityData={props.cityData} />
      {/* <Right
        cityData={props.cityData} /> */}
    </div>
  )
}

export default Hero;
