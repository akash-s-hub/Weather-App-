import React from 'react'

const Right = (props) => {
  const data = props.cityData.forecast.forecastday;

  return (

    <div className='w-[28%] h-[95%] rounded-lg bg-[#202b3b] p-5'>
      <div className='text-[#808080] font-bold'>48-Hour Forecast</div>
      <div className="flex justify-between items-center">
        <div className="part1">
          <div className="">{data[1].date}</div>
          <div><img src={data[1].day.condition.icon} alt={data[1].day.condition.text} /></div>
          <div>{data[1].day.condition.text}</div>
        </div>
        <div className="part2 text-xs">
          <div>Avg Temperature : {data[1].day.avgtemp_c}° C</div>
          <div>Avg Humidity : {data[1].day.avghumidity}</div>
          <div>Max Wind Speed : {data[1].day.maxwind_kph} kph ({data[1].day.maxwind_mph} mph)</div>
          <div>Sunrise : {data[1].astro.sunrise}</div>
          <div>Sunset : {data[1].astro.sunset}</div>
          <div>UV Index : {data[1].day.uv}</div>
        </div>

      </div>
      <div className="nextday2"></div>
    </div >
  )
}



export default Right
