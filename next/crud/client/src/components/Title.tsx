import React from 'react'

const Title = (props) => {
  return (
    <div className='flex flex-col justify-center'>
        <h1 className='p-5 text-3xl'>
            {props.children}
        </h1>
        <hr className='border-2 border-blue-600'/>
    </div>
  )
}

export default Title