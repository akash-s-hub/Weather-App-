import React from 'react'

const LeftTop = (props) => {
  let data = props.cityData;

  return (
    <div className='h-[33%] w-[90%] flex justify-between items-center text-xs'>
      <div className="h-full w-[40%] flex justify-center items-center flex-col">
        <div className="text-5xl leading-tight">{data ? data.location.name : "mumbai"}</div>
        <div className="text-2xl text-[#808080]">{data ? data.current.temp_c : "0"}° C</div>
        <div className="text-[#808080] text-sm">{data ? data.current.condition.text : "loading"}</div>
      </div>
      <div className="h-full w-[40%] flex justify-center items-center flex-col">
        <div className="h-[60%] w-full flex justify-center items-center">
          <img className='h-24' src={props.cityData.current.condition.icon} alt="loading" />
        </div>
        {props.cityData ?
          <p className='text-xs'>Last Updated: <br /> {props.cityData.current.last_updated}</p> :
          < p className='text-xs'>Last Updated: <br /> {props.currentDate} {props.currentTime} </p>
        }


      </div>
    </div >
  )
}

export default LeftTop
