import React from 'react'
import './SelectImgStyles.css'



function SelectImg({bgImg, test})  {
  return (
    <div className='selects-location'>
        <img src={bgImg} alt="" />
        <div className="overlay">
            <p>{test}</p>
        </div>
    </div> 
  )
}

export default SelectImg