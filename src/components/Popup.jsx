import React from 'react'

const Popup = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
      <div className="bg-[#0b131e] p-4 rounded shadow-lg text-center ">
        <p className="text-lg font-semibold">{props.data}</p>
        <button
          onClick={() => props.set(false)} // Close popup
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default Popup
