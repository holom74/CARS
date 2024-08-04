import React from 'react'
import ImgNot from '../../assets/imges/not-found/404-not-found.png'


export default function NotFound() {
  return (
    <>
    <div className=' container-fluid'>
      <div className=' container '>
          <div className=' d-flex justify-content-center' >
            <img className='w-50 ' src={ImgNot} alt="" />
          </div>
      </div>
    </div>
    
    
    </>
  )
}
