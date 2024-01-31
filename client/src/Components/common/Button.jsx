import React from 'react'

function Button(props) {
  return (
   <button className='bg-white text-dark rounded px-4 py-2 font-semibold border border-transparent hover:text-gray-700 focus:outline-none hover:bg-gray-100 active:bg-gray-200'>
    {props.children}
   </button>
  )
}

export default Button