import React from 'react'

const LeftBottom = (props) => {

  return (
    <div className='flex flex-col gap-2 justify-between items-start bg-[#202b3b] rounded-lg h-[33%] w-[90%] px-4 py-2'>
      <p className='text-[#808080] font-bold'>MORE DETAILS</p>
      <div className='w-full h-[90%] flex flex-wrap justify-start items-center'>
        <div className='text-sm h-[50%] w-[33%] flex flex-col gap-1 items-center justify-center'>
          <div className='text-[#808080] font-bold'>Feels Like</div>
          <div>{props.cityData.current.feelslike_c}° C</div>
        </div>
        <div className='text-sm h-[50%] w-[33%] flex flex-col gap-1 items-center justify-center'>
          <div className='text-[#808080] font-bold'>Humidity</div>
          <div>{props.cityData.current.humidity}</div>
        </div>
        <div className='text-sm h-[50%] w-[33%] flex flex-col gap-1 items-center justify-center'>
          <div><span className='text-[#808080] font-bold'>Wind </span> {`${props.cityData.current.wind_kph} kph (${props.cityData.current.wind_mph} mph)`}</div>
          <div><span className='text-[#808080] font-bold'>Direction </span> {`${props.cityData.current.wind_dir} (${props.cityData.current.wind_degree}°)`}</div>
        </div>
        <div className='text-sm h-[50%] w-[33%] flex flex-col gap-1 items-center justify-center'>
          <div className='text-[#808080] font-bold'>Min-Max Temp (Today)</div>
          <div>{`${props.cityData.forecast.forecastday[0].day.mintemp_c}° C - ${props.cityData.forecast.forecastday[0].day.maxtemp_c}° C`}</div>
        </div>
        <div className='text-sm h-[50%] w-[33%] flex flex-col gap-1 items-center justify-center'>
          <div className='text-[#808080] font-bold'>Sunrise - Sunset</div>
          <div>{`${props.cityData.forecast.forecastday[0].astro.sunrise} - ${props.cityData.forecast.forecastday[0].astro.sunset}`}</div>
        </div>
        <div className='text-sm h-[50%] w-[33%] flex flex-col gap-1 items-center justify-center'>
          <div className='text-[#808080] font-bold'>UV Index</div>
          <div>{props.cityData.current.uv}</div>
        </div>
      </div>
    </div>
  )
}

export default LeftBottom
