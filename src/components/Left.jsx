import React from 'react'
import LeftTop from './LeftTop'
import LeftMiddle from './LeftMiddle'
import LeftBottom from './LeftBottom'

const Left = (props) => {
  return (
    <div
      className='h-full w-[80%] flex gap-2 flex-col items-center justify-center'>
      <LeftTop currentDate={props.currentDate}
        currentTime={props.currentTime}
        cityData={props.cityData}
      />
      <LeftMiddle
        cityData={props.cityData}
      />
      <LeftBottom
        cityData={props.cityData}
      />
    </div>
  )
}

export default Left
