import React from 'react'
import Today from './Today'

const LeftMiddle = (props) => {

  const today = props.cityData?.forecast?.forecastday[0]?.hour || [];

  return (
    <div className='flex flex-col gap-4 justify-center items-start bg-[#202b3b] rounded-lg h-[30%] w-[90%] px-4'>
      <p className='text-[#808080] font-bold'>TODAY'S FORECAST</p>
      <div className='today overflow-scroll w-full flex flex-nowrap justify-start items-center'>
        {today.map((element, index) => (
          <Today
            key={index}
            time={element.time.split(' ')[1]}
            icon={element.condition.icon}
            alt={element.condition.text}
            temp={element.temp_c}
          />
        ))}

      </div>
    </div>
  )
}

export default LeftMiddle
