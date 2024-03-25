import React, { Children } from 'react'

function Button({ Children,
    type='button',
    bgColor="bg-blue-600",
    className='',
    textColor='text-white',
   ...props}) {
   
  return (
    <button className={`px-4 py-4 rounded-lg ${bgColor} ${className} ${textColor} `} {...props}>
        {Children}
    </button>
  )
}

export default Button
