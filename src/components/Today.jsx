import React from 'react'

const Today = (props) => {
  return (
    <div className='flex-shrink-0 w-24 flex flex-col justify-center items-center'>
      <div>{props.time}</div>
      <div><img className='h-12' src={props.icon} alt={props.alt} /></div>
      <div>{props.temp}° C</div>
    </div>
  )
}

export default Today
