import React, { useState } from 'react'
import FirstChild from './FirstChild'

const ParentDiv = () => {
  const [showChild,setShowChild]=useState(false)
  return (
    <div className='flex flex-col  items-start p-3 border-2 h-auto'>
      <div className='flex gap-2 justify-start'>
      <h1 className='text-xl'>
        ParentDiv
      </h1>
      <button className=' hover:bg-blue-200 text-md p-1  
      flex justify-center items-center rounded-full cursor-pointer'
      onClick={()=>setShowChild(!showChild)}
      >
        ➕
      </button>
      </div>
      {showChild && <FirstChild/>}
    </div>
  )
}

export default ParentDiv