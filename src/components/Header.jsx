import React, { useState } from 'react'

const Header = (props) => {
  const [showPopup, setShowPopup] = useState(false); // State for popup visibility

  return (
    <div className=' h-[10%] w-full px-4 text-white flex items-center justify-evenly'>
      <h3 className='w-[20%] text-2xl'>Weather App</h3>
      <form
        onSubmit={(e) => { { props.handleFetchWeather(e) } }}
        className='w-[55%]'>
        <input
          value={props.city}
          onChange={(e) => { props.setCity(e.target.value) }}
          className='mx-3 px-5 py-2 w-[50%] bg-[#202b3b] text-white border-none outline-none rounded-md'
          type="text"
          placeholder='Search Your City' />
        <button
          className='px-5 py-2 bg-[#202b3b] text-white rounded-md border-none outline-none'>
          Search
        </button>
      </form>
      <div className='text-xs'>
        <p>Local Date & Time: </p>
        {props.cityData ? <p>{props.cityData.location.localtime}</p> : <p>{`${props.currentDate} ${props.currentTime}`}</p>}
      </div>
    </div>
  )
}

export default Header
